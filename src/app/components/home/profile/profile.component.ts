import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  LocaleCode,
  LocalizedString,
  PortfolioContent,
  SocialLink,
  UiCopy,
  localize,
  localizeList
} from '../../../models/portfolio.models';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ProfileComponent implements OnInit {
  @Input() public language: LocaleCode = 'es';

  public imageUrl = '';
  public siteName = '';
  public primaryEmail = '';
  public socialLinks: SocialLink[] = [];
  public paragraphs: LocalizedString[] = [];
  public ui!: UiCopy;
  private roleText: LocalizedString = { es: '', en: '' };
  private pitchText: LocalizedString = { es: '', en: '' };
  private focusList: { es: string[]; en: string[] } = { es: [], en: [] };

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => this.applyContent(content));
  }

  public role(): string {
    return localize(this.roleText, this.language);
  }

  public pitch(): string {
    return localize(this.pitchText, this.language);
  }

  public focusAreas(): string[] {
    return localizeList(this.focusList, this.language);
  }

  public localizeText(value: LocalizedString): string {
    return localize(value, this.language);
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }

  private applyContent(content: PortfolioContent): void {
    this.imageUrl = content.profile.imageUrl;
    this.siteName = content.site.name;
    this.primaryEmail = content.site.emails[0] ?? '';
    this.socialLinks = content.site.socialLinks;
    this.paragraphs = content.profile.paragraphs;
    this.roleText = content.profile.role;
    this.pitchText = content.profile.pitch;
    this.focusList = content.profile.focusAreas;
    this.ui = content.ui;
  }
}
