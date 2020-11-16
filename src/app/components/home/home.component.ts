import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public language = 'Spanish';
  public option = 'Sobre mí';
  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('language')) {
      this.language = sessionStorage.getItem('language');
    }
    if (sessionStorage.getItem('option')) {
      this.option = sessionStorage.getItem('option');
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
