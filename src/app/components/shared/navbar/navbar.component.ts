import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { LocaleCode, NavItem, SectionId, UiCopy, localize } from '../../../models/portfolio.models';
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
  public menuOpen = false;
  public navigation: NavItem[] = [];
  public brandName = '';
  public ui!: UiCopy;

  @Output() changeLanguage = new EventEmitter<void>();
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
      this.brandName = content.site.name;
      this.navigation = content.navigation;
      this.ui = content.ui;
    });
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public onChangeLanguage(): void {
    this.changeLanguage.emit();
    this.menuOpen = false;
  }

  public onChangeSection(section: SectionId): void {
    this.changeSection.emit(section);
    this.menuOpen = false;
  }

  public labelFor(item: NavItem): string {
    return localize(item.label, this.language);
  }

  public languageSwitchLabel(): string {
    if (!this.ui) {
      return '';
    }
    return this.language === 'es'
      ? localize(this.ui.switchToEnglish, this.language)
      : localize(this.ui.switchToSpanish, this.language);
  }

  public menuToggleLabel(): string {
    return this.ui ? localize(this.ui.menuToggle, this.language) : 'Toggle navigation';
  }

  public isActive(section: SectionId): boolean {
    return this.section === section;
  }
}
