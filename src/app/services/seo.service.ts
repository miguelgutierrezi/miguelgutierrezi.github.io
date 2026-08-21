import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { LocaleCode } from '../models/portfolio.models';

export interface PageSeoInput {
  title: string;
  description: string;
  /** Path starting with `/`, e.g. `/home` or `/projects/foo`. */
  path: string;
  imageUrl?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly defaultImagePath = 'assets/Fotografia_Miguel_Gutierrez.jpg';
  private jsonLdEl: HTMLScriptElement | null = null;

  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  siteOrigin(): string {
    const configured = (environment.siteUrl ?? '').trim().replace(/\/$/, '');
    if (configured) {
      return configured;
    }
    if (typeof this.document.defaultView?.location?.origin === 'string') {
      return this.document.defaultView.location.origin;
    }
    return '';
  }

  absoluteUrl(pathOrUrl: string): string {
    if (/^https?:\/\//i.test(pathOrUrl)) {
      return pathOrUrl;
    }
    const origin = this.siteOrigin();
    const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
    return origin ? `${origin}${path}` : path;
  }

  setLanguage(locale: LocaleCode): void {
    this.document.documentElement.lang = locale;
  }

  apply(input: PageSeoInput): void {
    const origin = this.siteOrigin();
    const path = input.path.startsWith('/') ? input.path : `/${input.path}`;
    const canonical = origin ? `${origin}${path}` : path;
    const image = this.absoluteUrl(input.imageUrl || this.defaultImagePath);
    const type = input.type ?? 'website';

    this.title.setTitle(input.title);
    this.upsertMeta('name', 'description', input.description);
    this.upsertMeta('name', 'robots', input.noIndex ? 'noindex, nofollow' : 'index, follow');

    this.upsertLink('canonical', canonical);

    this.upsertMeta('property', 'og:title', input.title);
    this.upsertMeta('property', 'og:description', input.description);
    this.upsertMeta('property', 'og:type', type);
    this.upsertMeta('property', 'og:url', canonical);
    this.upsertMeta('property', 'og:image', image);
    if (origin) {
      this.upsertMeta('property', 'og:site_name', 'Miguel Ángel Gutiérrez Ibagué');
    }

    this.upsertMeta('name', 'twitter:card', 'summary_large_image');
    this.upsertMeta('name', 'twitter:title', input.title);
    this.upsertMeta('name', 'twitter:description', input.description);
    this.upsertMeta('name', 'twitter:image', image);
  }

  setJsonLd(data: Record<string, unknown> | Record<string, unknown>[] | null): void {
    if (this.jsonLdEl) {
      this.jsonLdEl.remove();
      this.jsonLdEl = null;
    }
    if (!data) {
      return;
    }
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
    this.jsonLdEl = script;
  }

  private upsertMeta(
    attr: 'name' | 'property',
    key: string,
    content: string
  ): void {
    const selector = `${attr}="${key}"`;
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [attr]: key, content });
    } else {
      this.meta.addTag({ [attr]: key, content });
    }
  }

  private upsertLink(rel: string, href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      this.document.head.appendChild(link);
    }
    link.href = href;
  }
}
