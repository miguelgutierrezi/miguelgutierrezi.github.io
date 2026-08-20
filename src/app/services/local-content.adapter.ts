import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { validatePortfolioContent } from '../content/content-validator';
import { LOCAL_PORTFOLIO_CONTENT } from '../content/portfolio.content';
import { PortfolioContent } from '../models/portfolio.models';
import { ContentSource } from './content-source';

@Injectable()
export class LocalContentAdapter extends ContentSource {
  loadPortfolio(): Observable<PortfolioContent> {
    // Pass through unknown so the validator is the single narrowing boundary
    // (same path a CMS adapter will use for remote JSON).
    return of(LOCAL_PORTFOLIO_CONTENT as unknown).pipe(
      map((raw) => {
        const { content, issues } = validatePortfolioContent(raw);
        if (issues.length > 0 && typeof console !== 'undefined') {
          console.warn('[ContentSource] Local portfolio validation issues:', issues);
        }
        return content;
      })
    );
  }
}
