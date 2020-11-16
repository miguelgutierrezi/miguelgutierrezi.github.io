import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.onChangeOption('About');
    component.language = 'English';
    component.onChangeLanguage();
    expect(component).toBeTruthy();
  });

  it('should change language spanish', () => {
    component.language = 'Spanish';
    component.onChangeLanguage();
    expect(component).toBeTruthy();
  });
});
