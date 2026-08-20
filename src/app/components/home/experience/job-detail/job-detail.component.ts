import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Experience, LocaleCode, localize, localizeList } from '../../../../models/portfolio.models';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class JobDetailComponent {
  @Input() language: LocaleCode = 'es';
  @Input() job!: Experience;
  @Output() closeAlert = new EventEmitter<void>();

  public duration(): string {
    return localize(this.job.duration, this.language);
  }

  public responsibilities(): string[] {
    return localizeList(this.job.responsibilities, this.language);
  }

  public onClose(): void {
    this.closeAlert.emit();
  }
}
