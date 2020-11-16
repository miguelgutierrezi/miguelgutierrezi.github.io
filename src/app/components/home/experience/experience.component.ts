import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
  @Input() public language: string;
  constructor() { }

  ngOnInit(): void {
  }

}
