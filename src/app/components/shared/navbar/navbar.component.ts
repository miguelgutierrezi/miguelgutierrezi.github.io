import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public spanishOptions = ['Sobre mí', 'Proyectos', 'Experiencia', 'Cursos'];
  public englishOptions = ['About', 'Projects', 'Experience', 'Courses'];
  public language = 'Spanish';
  public option = 'Sobre mí';
  private position = 0;
  @Output() changeLanguage = new EventEmitter<string>();
  @Output() changeOption = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onChangeLanguage(): void {
    if (this.language === 'Spanish') {
      this.language = 'English';
      this.option = this.englishOptions[this.position];
      this.changeLanguage.emit(this.language);
    } else {
      this.language = 'Spanish';
      this.option = this.spanishOptions[this.position];
      this.changeLanguage.emit(this.language);
    }
  }

  public onChangeOption(i: number): void {
    if (this.language === 'Spanish') {
      this.option = this.spanishOptions[i];
      this.position = i;
    } else {
      this.option = this.englishOptions[i];
      this.position = i;
    }
  }

  public validateOption(i: number): boolean {
    if (this.language === 'Spanish') {
      return this.spanishOptions[i] === this.option;
    } else {
      return this.englishOptions[i] === this.option;
    }
  }
}
