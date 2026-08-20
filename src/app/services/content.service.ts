import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { PortfolioContent } from '../models/portfolio.models';
import { ContentSource } from './content-source';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly portfolio$: Observable<PortfolioContent>;

  constructor(private readonly contentSource: ContentSource) {
    this.portfolio$ = this.contentSource.loadPortfolio().pipe(
      shareReplay({ bufferSize: 1, refCount: false })
    );
  }

  loadPortfolio(): Observable<PortfolioContent> {
    return this.portfolio$;
  }
}
