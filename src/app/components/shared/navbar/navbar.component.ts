import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';
import {
  LocaleCode,
  LocalizedString,
  NavItem,
  SectionId,
  SocialLink,
  UiCopy,
  isExternalHttpUrl,
  localize
} from '../../../models/portfolio.models';
import { ContentService } from '../../../services/content.service';
import { PreferencesService } from '../../../services/preferences.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class NavbarComponent implements OnInit, OnDestroy {
  public language: LocaleCode = 'es';
  public section: SectionId = 'about';
  public navigation: NavItem[] = [];
  public brandHandle = '';
  public roleTag = '';
  public socialLinks: SocialLink[] = [];
  public primaryEmail = '';
  public menuOpen = false;
  /** Keeps the panel painted until the close slide finishes. */
  public menuVisible = false;
  public ui!: UiCopy;
  private roleLocalized: LocalizedString | null = null;
  private menuCloseTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly menuAnimDurationMs = 380;

  private get menuAnimMs(): number {
    if (typeof matchMedia === 'undefined') {
      return this.menuAnimDurationMs;
    }
    return matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : this.menuAnimDurationMs;
  }

  @Output() changeLanguage = new EventEmitter<LocaleCode>();
  @Output() changeSection = new EventEmitter<SectionId>();

  constructor(
    private readonly contentService: ContentService,
    private readonly preferences: PreferencesService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const snapshot = this.preferences.snapshot;
    this.language = snapshot.language;
    this.section = snapshot.section;

    this.preferences.preferences$.subscribe((prefs) => {
      this.language = prefs.language;
      this.section = prefs.section;
      if (this.roleLocalized) {
        this.roleTag = localize(this.roleLocalized, prefs.language);
      }
    });

    this.contentService.loadPortfolio().subscribe((content) => {
      this.brandHandle = content.site.brandHandle || content.site.name;
      this.roleLocalized = content.profile.role;
      this.roleTag = localize(content.profile.role, this.language);
      this.navigation = content.navigation;
      this.socialLinks = content.site.socialLinks;
      this.primaryEmail = content.site.emails[0] ?? '';
      this.ui = content.ui;
    });
  }

  ngOnDestroy(): void {
    this.clearMenuCloseTimer();
    this.unlockBodyScroll();
  }

  public toggleMenu(): void {
    if (this.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  public openMenu(): void {
    this.clearMenuCloseTimer();
    this.menuVisible = true;
    // Next frame so the closed translateX(100%) paints before sliding in.
    requestAnimationFrame(() => {
      this.menuOpen = true;
      this.lockBodyScroll();
    });
  }

  public closeMenu(): void {
    if (!this.menuVisible && !this.menuOpen) {
      return;
    }
    this.menuOpen = false;
    this.clearMenuCloseTimer();
    this.menuCloseTimer = setTimeout(() => {
      this.menuVisible = false;
      this.unlockBodyScroll();
      this.menuCloseTimer = null;
    }, this.menuAnimMs);
  }

  public onNavigate(event: Event, section: SectionId): void {
    event.preventDefault();
    this.closeMenu();
    this.afterMenuClose(() => {
      this.changeSection.emit(section);
      const onHome = this.router.url.startsWith('/home') || this.router.url === '/';
      if (!onHome) {
        void this.router.navigate(['/home'], { fragment: section });
        return;
      }
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      history.replaceState(null, '', `#${section}`);
    });
  }

  public setLanguage(locale: LocaleCode): void {
    if (locale === this.language) {
      return;
    }
    this.changeLanguage.emit(locale);
  }

  public labelFor(item: NavItem): string {
    return localize(item.label, this.language);
  }

  public padIndex(value: number): string {
    return `${value}`.padStart(2, '0') + '.';
  }

  public languageSwitchLabel(): string {
    if (!this.ui) {
      return 'Language';
    }
    return this.language === 'es'
      ? localize(this.ui.switchToEnglish, this.language)
      : localize(this.ui.switchToSpanish, this.language);
  }

  public menuToggleLabel(): string {
    return this.ui ? localize(this.ui.menuToggle, this.language) : 'Toggle navigation';
  }

  public menuCreditPrimary(): string {
    const credit = this.footerCreditText();
    const [primary] = credit.split('•');
    return (primary ?? credit).trim();
  }

  public menuCreditYear(): string {
    const credit = this.footerCreditText();
    const parts = credit.split('•');
    return (parts[1] ?? '2026').trim();
  }

  public isActive(section: SectionId): boolean {
    return this.section === section;
  }

  public isExternal(url: string): boolean {
    return isExternalHttpUrl(url);
  }

  private footerCreditText(): string {
    if (!this.ui?.footerCredit) {
      return this.language === 'es' ? 'Hecho con Angular • 2026' : 'Built with Angular • 2026';
    }
    return localize(this.ui.footerCredit, this.language);
  }

  private afterMenuClose(action: () => void): void {
    setTimeout(action, this.menuAnimMs);
  }

  private clearMenuCloseTimer(): void {
    if (this.menuCloseTimer !== null) {
      clearTimeout(this.menuCloseTimer);
      this.menuCloseTimer = null;
    }
  }

  private lockBodyScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private unlockBodyScroll(): void {
    document.body.style.overflow = '';
  }
}
