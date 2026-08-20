import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Course, LocaleCode, UiCopy, localize } from '../../../models/portfolio.models';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class CoursesComponent implements OnInit {
  @Input() public language: LocaleCode = 'es';
  public courses: Course[] = [];
  public ui!: UiCopy;

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => {
      this.courses = content.courses;
      this.ui = content.ui;
    });
  }

  public title(course: Course): string {
    return localize(course.title, this.language);
  }

  public date(course: Course): string {
    return localize(course.date, this.language);
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }
}
