import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  @Input() public language: string;
  constructor() { }

  ngOnInit(): void {
  }

}
