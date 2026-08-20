import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocaleCode, Project, UiCopy, localize } from '../../../models/portfolio.models';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ProjectsComponent implements OnInit {
  @Input() public language: LocaleCode = 'es';
  public projects: Project[] = [];
  public ui!: UiCopy;
  public pageIndex = 0;
  private readonly pageSize = 3;
  private readonly swipeThresholdPx = 48;
  private swipeStartX: number | null = null;
  private swipeStartY: number | null = null;

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => {
      this.projects = content.projects;
      this.ui = content.ui;
      this.pageIndex = 0;
    });
  }

  public get visibleProjects(): Project[] {
    const start = this.pageIndex * this.pageSize;
    return this.projects.slice(start, start + this.pageSize);
  }

  public get pageCount(): number {
    return Math.max(1, Math.ceil(this.projects.length / this.pageSize));
  }

  public get pages(): number[] {
    return Array.from({ length: this.pageCount }, (_, i) => i);
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

  private clearSwipe(): void {
    this.swipeStartX = null;
    this.swipeStartY = null;
  }
}
