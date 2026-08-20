import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Experience, LocaleCode, localize } from '../../../models/portfolio.models';
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
  public selectedJob: Experience | null = null;

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.loadPortfolio().subscribe((content) => {
      this.experience = content.experience;
    });
  }

  public role(job: Experience): string {
    return localize(job.role, this.language);
  }

  public duration(job: Experience): string {
    return localize(job.duration, this.language);
  }

  public onSelectJob(job: Experience): void {
    this.selectedJob = job;
  }

  public onCloseAlert(): void {
    this.selectedJob = null;
  }
}
