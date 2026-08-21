import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { CoursesComponent } from './components/home/courses/courses.component';
import { JobDetailComponent } from './components/home/experience/job-detail/job-detail.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ContentSource } from './services/content-source';
import { LocalContentAdapter } from './services/local-content.adapter';
import { SanityContentAdapter } from './services/sanity-content.adapter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingSpinnerComponent,
    ProfileComponent,
    HomeComponent,
    NotFoundComponent,
    ProjectsComponent,
    ExperienceComponent,
    CoursesComponent,
    JobDetailComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    LocalContentAdapter,
    { provide: ContentSource, useClass: SanityContentAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
