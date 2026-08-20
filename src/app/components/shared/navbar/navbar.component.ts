import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LocaleCode,
  NavItem,
  SectionId,
  UiCopy,
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
export class NavbarComponent implements OnInit {
  public language: LocaleCode = 'es';
  public section: SectionId = 'about';
  public navigation: NavItem[] = [];
  public brandHandle = '';
  public ui!: UiCopy;

  @Output() changeLanguage = new EventEmitter<LocaleCode>();
  @Output() changeSection = new EventEmitter<SectionId>();

  constructor(
    private readonly contentService: ContentService,
    private readonly preferences: PreferencesService
  ) {}

  ngOnInit(): void {
    const snapshot = this.preferences.snapshot;
    this.language = snapshot.language;
    this.section = snapshot.section;

    this.preferences.preferences$.subscribe((prefs) => {
      this.language = prefs.language;
      this.section = prefs.section;
    });

    this.contentService.loadPortfolio().subscribe((content) => {
      this.brandHandle = content.site.brandHandle || content.site.name;
      this.navigation = content.navigation;
      this.ui = content.ui;
    });
  }

  public onNavigate(event: Event, section: SectionId): void {
    event.preventDefault();
    this.changeSection.emit(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    history.replaceState(null, '', `#${section}`);
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

  public languageSwitchLabel(): string {
    if (!this.ui) {
      return 'Language';
    }
    return this.language === 'es'
      ? localize(this.ui.switchToEnglish, this.language)
      : localize(this.ui.switchToSpanish, this.language);
  }

  public isActive(section: SectionId): boolean {
    return this.section === section;
  }
}
