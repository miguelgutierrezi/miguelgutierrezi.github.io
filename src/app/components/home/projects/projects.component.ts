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

  public description(project: Project): string {
    return localize(project.description, this.language);
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }
}
