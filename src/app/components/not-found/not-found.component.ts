import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  LocaleCode,
  SocialLink,
  UiCopy,
  isExternalHttpUrl,
  localize
} from '../../models/portfolio.models';
import { ContentService } from '../../services/content.service';
import { PreferencesService } from '../../services/preferences.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class NotFoundComponent implements OnInit, OnDestroy {
  public language: LocaleCode = 'es';
  public siteName = '';
  public primaryEmail = '';
  public socialLinks: SocialLink[] = [];
  public footerCredit = '';
  public ui!: UiCopy;

  private readonly sub = new Subscription();

  constructor(
    private readonly contentService: ContentService,
    private readonly preferences: PreferencesService,
    private readonly seo: SeoService
  ) {}

  ngOnInit(): void {
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
      this.contentService.loadPortfolio().subscribe((content) => {
        this.siteName = content.site.name;
        this.primaryEmail = content.site.emails[0] ?? '';
        this.socialLinks = content.site.socialLinks;
        this.ui = content.ui;
        this.footerCredit = localize(content.ui.footerCredit, this.language);
        this.applySeo();
        this.seo.setJsonLd(null);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onChangeLanguage(locale: LocaleCode): void {
    this.preferences.setLanguage(locale);
  }

  public onChangeSection(): void {
    // Navbar navigates to /home#section when outside home.
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }

  public isExternal(url: string): boolean {
    return isExternalHttpUrl(url);
  }

  private applySeo(): void {
    if (!this.ui) {
      return;
    }
    this.seo.apply({
      title: `${localize(this.ui.notFoundTitle, this.language)} — ${this.siteName || 'Portfolio'}`,
      description: localize(this.ui.notFoundDescription, this.language),
      path: '/not-found',
      noIndex: true
    });
  }
}
