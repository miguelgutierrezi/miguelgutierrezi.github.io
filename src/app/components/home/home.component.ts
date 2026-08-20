import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocaleCode, SectionId } from '../../models/portfolio.models';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class HomeComponent implements OnInit {
  public language: LocaleCode = 'es';
  public section: SectionId = 'about';

  constructor(private readonly preferences: PreferencesService) {}

  ngOnInit(): void {
    const snapshot = this.preferences.snapshot;
    this.language = snapshot.language;
    this.section = snapshot.section;

    this.preferences.preferences$.subscribe((prefs) => {
      this.language = prefs.language;
      this.section = prefs.section;
    });
  }

  public onChangeLanguage(): void {
    this.preferences.toggleLanguage();
  }

  public onChangeSection(section: SectionId): void {
    this.preferences.setSection(section);
  }
}
