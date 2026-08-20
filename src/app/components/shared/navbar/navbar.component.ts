import {Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavbarComponent implements OnInit {
  public spanishOptions = ['Sobre mí', 'Proyectos', 'Experiencia', 'Cursos'];
  public englishOptions = ['About', 'Projects', 'Experience', 'Courses'];
  public language = 'Spanish';
  public option = 'Sobre mí';
  public menuOpen = false;
  private position = 0;
  @Output() changeLanguage = new EventEmitter<string>();
  @Output() changeOption = new EventEmitter<string>();

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
    const position = sessionStorage.getItem('position');
    if (position) {
      this.position = +position;
    }
  }

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public onChangeLanguage(): void {
    if (this.language === 'Spanish') {
      this.language = 'English';
      this.option = this.englishOptions[this.position];
      sessionStorage.setItem('position', '' + this.position);
      sessionStorage.setItem('language', 'English');
      sessionStorage.setItem('option', this.option);
      this.changeLanguage.emit(this.language);
    } else {
      this.language = 'Spanish';
      this.option = this.spanishOptions[this.position];
      sessionStorage.setItem('position', '' + this.position);
      sessionStorage.setItem('language', 'Spanish');
      sessionStorage.setItem('option', this.option);
      this.changeLanguage.emit(this.language);
    }
    this.menuOpen = false;
  }

  public onChangeOption(i: number): void {
    if (this.language === 'Spanish') {
      this.option = this.spanishOptions[i];
      this.position = i;
      sessionStorage.setItem('position', '' + this.position);
      sessionStorage.setItem('option', this.option);
      sessionStorage.setItem('language', 'Spanish');
      this.changeOption.emit(this.option);
    } else {
      this.option = this.englishOptions[i];
      this.position = i;
      sessionStorage.setItem('position', '' + this.position);
      sessionStorage.setItem('option', this.option);
      sessionStorage.setItem('language', 'English');
      this.changeOption.emit(this.option);
    }
    this.menuOpen = false;
  }

  public validateOption(i: number): boolean {
    if (this.language === 'Spanish') {
      return this.spanishOptions[i] === this.option;
    } else {
      return this.englishOptions[i] === this.option;
    }
  }
}
