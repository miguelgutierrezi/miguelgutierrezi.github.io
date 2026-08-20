import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  LocaleCode,
  LocalizedString,
  PortfolioContent,
  SocialLink,
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
  private paragraphs: LocalizedString[] = [];

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => this.applyContent(content));
  }

  public paragraph(index: number): string {
    const value = this.paragraphs[index];
    return value ? localize(value, this.language) : '';
  }

  public goToExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  private applyContent(content: PortfolioContent): void {
    this.imageUrl = content.profile.imageUrl;
    this.emails = content.site.emails;
    this.socialLinks = content.site.socialLinks;
    this.paragraphs = content.profile.paragraphs;
  }
}
