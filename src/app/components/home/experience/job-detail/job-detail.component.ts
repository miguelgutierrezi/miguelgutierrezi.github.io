import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.sass']
})
export class JobDetailComponent implements OnInit {

  @Input() language: string;
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
