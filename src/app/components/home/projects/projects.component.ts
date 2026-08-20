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

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => {
      this.projects = content.projects;
      this.ui = content.ui;
    });
  }

  public description(project: Project): string {
    return localize(project.description, this.language);
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }
}
