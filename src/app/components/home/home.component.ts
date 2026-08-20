import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  LocaleCode,
  LocalizedString,
  SectionId,
  SocialLink,
  isExternalHttpUrl,
  localize
} from '../../models/portfolio.models';
import { ContentService } from '../../services/content.service';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {
  public language: LocaleCode = 'es';
  public section: SectionId = 'about';
  public siteName = '';
  public primaryEmail = '';
  public socialLinks: SocialLink[] = [];
  public footerCredit = '';
  private footerCreditTemplate: LocalizedString | null = null;

  private observer?: IntersectionObserver;
  private readonly sectionIds: SectionId[] = ['about', 'experience', 'projects', 'courses'];

  constructor(
    private readonly preferences: PreferencesService,
    private readonly contentService: ContentService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const snapshot = this.preferences.snapshot;
    this.language = snapshot.language;
    this.section = snapshot.section;

    this.preferences.preferences$.subscribe((prefs) => {
      this.language = prefs.language;
      this.section = prefs.section;
      if (this.footerCreditTemplate) {
        this.footerCredit = localize(this.footerCreditTemplate, prefs.language);
      }
    });

    this.contentService.loadPortfolio().subscribe((content) => {
      this.siteName = content.site.name;
      this.primaryEmail = content.site.emails[0] ?? '';
      this.socialLinks = content.site.socialLinks;
      this.footerCreditTemplate = content.ui.footerCredit;
      this.footerCredit = localize(content.ui.footerCredit, this.language);
    });

    this.setupScrollSpy();

    this.route.fragment.subscribe((fragment) => {
      const hash = (fragment || '') as SectionId;
      if (this.sectionIds.includes(hash)) {
        this.preferences.setSection(hash);
        queueMicrotask(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  public onChangeLanguage(locale: LocaleCode): void {
    this.preferences.setLanguage(locale);
  }

  public onChangeSection(section: SectionId): void {
    this.preferences.setSection(section);
  }

  public isExternal(url: string): boolean {
    return isExternalHttpUrl(url);
  }

  private setupScrollSpy(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) {
          return;
        }
        const id = visible.target.id as SectionId;
        if (this.sectionIds.includes(id) && id !== this.section) {
          this.preferences.setSection(id);
          history.replaceState(null, '', `#${id}`);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.15, 0.35, 0.55] }
    );

    queueMicrotask(() => {
      for (const id of this.sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          this.observer?.observe(el);
        }
      }
    });
  }
}
