import {Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-job-detail',
    templateUrl: './job-detail.component.html',
    styleUrls: ['./job-detail.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class JobDetailComponent implements OnInit {

  @Input() language = 'Spanish';
  @Input() jobEnglish: any;
  @Input() jobSpanish: any;
  @Output() closeAlert = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClose(): void {
    this.closeAlert.emit();
  }

}
