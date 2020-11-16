import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.onChangeOption(0);
    component.language = 'Spanish';
    component.onChangeLanguage();
    component.validateOption(0);
    expect(component).toBeTruthy();
  });

  it('should change language english', () => {
    component.language = 'English';
    component.onChangeOption(0);
    component.validateOption(0);
    component.onChangeLanguage();
    expect(component).toBeTruthy();
  });
});
