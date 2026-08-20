import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomeComponent implements OnInit {
  public language = 'Spanish';
  public option = 'Sobre mí';
  constructor() { }

  ngOnInit(): void {
    const language = sessionStorage.getItem('language');
    if (language) {
      this.language = language;
    }
    const option = sessionStorage.getItem('option');
    if (option) {
      this.option = option;
    }
  }

  public onChangeLanguage(): void {
    if (this.language === 'Spanish') {
      this.language = 'English';
    } else {
      this.language = 'Spanish';
    }
  }

  public onChangeOption(event: string): void {
    this.option = event;
    console.log(this.option);
  }
}
