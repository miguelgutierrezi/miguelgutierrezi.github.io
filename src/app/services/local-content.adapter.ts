import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LOCAL_PORTFOLIO_CONTENT } from '../content/portfolio.content';
import { PortfolioContent } from '../models/portfolio.models';
import { ContentSource } from './content-source';

@Injectable()
export class LocalContentAdapter extends ContentSource {
  loadPortfolio(): Observable<PortfolioContent> {
    return of(this.normalize(LOCAL_PORTFOLIO_CONTENT));
  }

  private normalize(content: PortfolioContent): PortfolioContent {
    return {
      ...content,
      projects: [...content.projects].sort((a, b) => a.sortOrder - b.sortOrder),
      experience: [...content.experience].sort((a, b) => a.sortOrder - b.sortOrder),
      courses: [...content.courses].sort((a, b) => a.sortOrder - b.sortOrder)
    };
  }
}
