import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { LocaleCode, Project, UiCopy, localize } from '../../../models/portfolio.models';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @Input() public language: LocaleCode = 'es';
  public projects: Project[] = [];
  public ui!: UiCopy;
  public pageIndex = 0;
  public pageSize = 3;
  private readonly swipeThresholdPx = 48;
  private swipeStartX: number | null = null;
  private swipeStartY: number | null = null;
  private readonly onResize = () => this.syncPageSize();

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.syncPageSize();
    window.addEventListener('resize', this.onResize);

    this.contentService.loadPortfolio().subscribe((content) => {
      this.projects = content.projects;
      this.ui = content.ui;
      this.pageIndex = 0;
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

  public get projectPages(): Project[][] {
    const pages: Project[][] = [];
    for (let i = 0; i < this.projects.length; i += this.pageSize) {
      pages.push(this.projects.slice(i, i + this.pageSize));
    }
    return pages.length > 0 ? pages : [[]];
  }

  public get pageCount(): number {
    return this.projectPages.length;
  }

  public get pageIndexes(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i);
  }

  public get trackTransform(): string {
    return `translate3d(-${this.pageIndex * 100}%, 0, 0)`;
  }

  public get canPrev(): boolean {
    return this.pageIndex > 0;
  }

  public get canNext(): boolean {
    return this.pageIndex < this.pageCount - 1;
  }

  public prev(): void {
    if (this.canPrev) {
      this.pageIndex -= 1;
    }
  }

  public next(): void {
    if (this.canNext) {
      this.pageIndex += 1;
    }
  }

  public goTo(page: number): void {
    this.pageIndex = Math.max(0, Math.min(page, this.pageCount - 1));
  }

  public onSwipePointerDown(event: PointerEvent): void {
    if (this.pageCount <= 1) {
      return;
    }
    this.swipeStartX = event.clientX;
    this.swipeStartY = event.clientY;
  }

  public onSwipePointerUp(event: PointerEvent): void {
    if (this.swipeStartX === null || this.swipeStartY === null) {
      return;
    }

    const dx = event.clientX - this.swipeStartX;
    const dy = event.clientY - this.swipeStartY;
    this.clearSwipe();

    if (Math.abs(dx) < this.swipeThresholdPx || Math.abs(dx) <= Math.abs(dy)) {
      return;
    }

    if (dx < 0) {
      this.next();
    } else {
      this.prev();
    }
  }

  public onSwipePointerCancel(): void {
    this.clearSwipe();
  }

  public description(project: Project): string {
    return localize(project.description, this.language);
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }

  private syncPageSize(): void {
    const width = window.innerWidth;
    const nextSize = width <= 767 ? 1 : width <= 1023 ? 2 : 3;
    if (nextSize === this.pageSize) {
      return;
    }
    this.pageSize = nextSize;
    this.pageIndex = 0;
  }

  private clearSwipe(): void {
    this.swipeStartX = null;
    this.swipeStartY = null;
  }
}
