import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  LocaleCode,
  LocalizedString,
  PortfolioContent,
  SocialLink,
  UiCopy,
  localize
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
  public emails: string[] = [];
  public socialLinks: SocialLink[] = [];
  public ui!: UiCopy;
  private paragraphs: LocalizedString[] = [];

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => this.applyContent(content));
  }

  public paragraph(index: number): string {
    const value = this.paragraphs[index];
    return value ? localize(value, this.language) : '';
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }

  public goToExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  private applyContent(content: PortfolioContent): void {
    this.imageUrl = content.profile.imageUrl;
    this.emails = content.site.emails;
    this.socialLinks = content.site.socialLinks;
    this.paragraphs = content.profile.paragraphs;
    this.ui = content.ui;
  }
}
