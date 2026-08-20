import { Observable } from 'rxjs';
import { PortfolioContent } from '../models/portfolio.models';

export abstract class ContentSource {
  abstract loadPortfolio(): Observable<PortfolioContent>;
}
