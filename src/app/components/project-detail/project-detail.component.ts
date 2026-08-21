import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest } from 'rxjs';
import {
  LocaleCode,
  Project,
  SocialLink,
  UiCopy,
  isExternalHttpUrl,
  localize
} from '../../models/portfolio.models';
import { ContentService } from '../../services/content.service';
import { PreferencesService } from '../../services/preferences.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  public language: LocaleCode = 'es';
  public project: Project | null = null;
  public previous: Project | null = null;
  public next: Project | null = null;
  public siteName = '';
  public primaryEmail = '';
  public socialLinks: SocialLink[] = [];
  public footerCredit = '';
  public ui!: UiCopy;

  private readonly sub = new Subscription();
  private projects: Project[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly contentService: ContentService,
    private readonly preferences: PreferencesService,
    private readonly seo: SeoService
  ) {}

  ngOnInit(): void {
    this.preferences.setSection('projects');
    this.language = this.preferences.snapshot.language;
    this.seo.setLanguage(this.language);

    this.sub.add(
      this.preferences.preferences$.subscribe((prefs) => {
        this.language = prefs.language;
        this.seo.setLanguage(prefs.language);
        if (this.ui?.footerCredit) {
          this.footerCredit = localize(this.ui.footerCredit, prefs.language);
        }
        this.applySeo();
      })
    );

    this.sub.add(
      combineLatest([this.contentService.loadPortfolio(), this.route.paramMap]).subscribe(
        ([content, params]) => {
          this.siteName = content.site.name;
          this.primaryEmail = content.site.emails[0] ?? '';
          this.socialLinks = content.site.socialLinks;
          this.ui = content.ui;
          this.footerCredit = localize(content.ui.footerCredit, this.language);
          this.projects = [...content.projects].sort((a, b) => a.sortOrder - b.sortOrder);

          const id = params.get('id');
          const index = this.projects.findIndex((item) => item.id === id);
          if (index < 0) {
            void this.router.navigateByUrl('/not-found');
            return;
          }

          this.project = this.projects[index];
          this.previous = index > 0 ? this.projects[index - 1] : null;
          this.next = index < this.projects.length - 1 ? this.projects[index + 1] : null;
          this.applySeo();
          this.applyJsonLd();
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onChangeLanguage(locale: LocaleCode): void {
    this.preferences.setLanguage(locale);
  }

  public onChangeSection(): void {
    // Navigation handled by navbar via router when leaving detail.
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }

  public text(value: { es: string; en: string } | undefined): string {
    if (!value) {
      return '';
    }
    return localize(value, this.language);
  }

  public isExternal(url: string): boolean {
    return isExternalHttpUrl(url);
  }

  private applySeo(): void {
    if (!this.project) {
      return;
    }
    const description = localize(this.project.description, this.language);
    this.seo.apply({
      title: `${this.project.title} — ${this.siteName || 'Portfolio'}`,
      description,
      path: `/projects/${this.project.id}`,
      imageUrl: this.project.imageUrl,
      type: 'article'
    });
  }

  private applyJsonLd(): void {
    if (!this.project) {
      return;
    }
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: this.project.title,
      description: localize(this.project.description, this.language),
      url: this.seo.absoluteUrl(`/projects/${this.project.id}`),
      image: this.seo.absoluteUrl(this.project.imageUrl),
      author: {
        '@type': 'Person',
        name: this.siteName
      },
      keywords: this.project.technologies.join(', ')
    });
  }
}
