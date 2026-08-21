import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { validatePortfolioContent } from '../content/content-validator';
import { LOCAL_PORTFOLIO_CONTENT } from '../content/portfolio.content';
import { PortfolioContent } from '../models/portfolio.models';
import { environment } from '../../environments/environment';
import { ContentSource } from './content-source';
import { LocalContentAdapter } from './local-content.adapter';
import {
  mapProfile,
  mapProjects,
  mapSiteSettings,
  mergeCmsSlice
} from './sanity-mapper';

interface SanityQueryResponse {
  result?: unknown;
}

const PORTFOLIO_QUERY = `{
  "site": *[_type == "siteSettings"][0]{
    name,
    brandHandle,
    emails,
    socialLinks[]{id, label, url, iconUrl}
  },
  "profile": *[_type == "profile"][0]{
    imageUrl,
    role,
    pitch,
    paragraphs,
    focusAreas
  },
  "projects": *[_type == "project"] | order(sortOrder asc){
    "id": slug.current,
    title,
    description,
    technologies,
    technologyIconUrls,
    repositoryUrl,
    demoUrl,
    imageUrl,
    featured,
    sortOrder,
    detail
  }
}`;

@Injectable()
export class SanityContentAdapter extends ContentSource {
  private readonly fetchTimeoutMs = 8000;

  constructor(
    private readonly http: HttpClient,
    private readonly local: LocalContentAdapter
  ) {
    super();
  }

  loadPortfolio(): Observable<PortfolioContent> {
    if (!this.isCmsConfigured()) {
      return this.local.loadPortfolio();
    }

    return this.fetchRemoteSlice().pipe(
      map((raw) => this.toValidatedPortfolio(raw)),
      catchError((error) => {
        if (typeof console !== 'undefined') {
          console.warn('[ContentSource] Sanity fetch failed; using local fallback.', error);
        }
        return this.local.loadPortfolio();
      })
    );
  }

  private isCmsConfigured(): boolean {
    const cms = environment.cms;
    return !!cms?.enabled && !!cms.projectId?.trim() && !!cms.dataset?.trim();
  }

  private fetchRemoteSlice(): Observable<unknown> {
    const {projectId, dataset, apiVersion} = environment.cms;
    const url = `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`;
    const params = new HttpParams().set('query', PORTFOLIO_QUERY);

    return this.http.get<SanityQueryResponse>(url, {params}).pipe(
      timeout(this.fetchTimeoutMs),
      map((response) => response?.result ?? null)
    );
  }

  private toValidatedPortfolio(raw: unknown): PortfolioContent {
    const local = validatePortfolioContent(LOCAL_PORTFOLIO_CONTENT as unknown).content;
    if (!raw || typeof raw !== 'object') {
      throw new Error('Empty Sanity result');
    }

    const record = raw as Record<string, unknown>;
    const site = mapSiteSettings(record['site']);
    const profile = mapProfile(record['profile']);
    const projects = mapProjects(record['projects']);

    if (!site || !profile || projects.length === 0) {
      throw new Error('Sanity slice incomplete (need siteSettings, profile, and at least one project)');
    }

    const merged = mergeCmsSlice(local, {site, profile, projects});
    const {content, issues} = validatePortfolioContent(merged);
    if (issues.length > 0 && typeof console !== 'undefined') {
      console.warn('[ContentSource] Sanity portfolio validation issues:', issues);
    }
    return content;
  }
}
