import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  Experience,
  LocaleCode,
  UiCopy,
  localize,
  localizeList
} from '../../../models/portfolio.models';
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ExperienceComponent implements OnInit {
  @Input() public language: LocaleCode = 'es';
  public experience: Experience[] = [];
  public ui!: UiCopy;

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => {
      this.experience = content.experience;
      this.ui = content.ui;
    });
  }

  public role(job: Experience): string {
    return localize(job.role, this.language);
  }

  public duration(job: Experience): string {
    return localize(job.duration, this.language);
  }

  public responsibilities(job: Experience): string[] {
    return localizeList(job.responsibilities, this.language);
  }

  public label(key: keyof UiCopy): string {
    return this.ui ? localize(this.ui[key], this.language) : '';
  }
}
