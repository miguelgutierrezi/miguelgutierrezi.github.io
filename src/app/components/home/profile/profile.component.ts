import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProfileComponent implements OnInit {

  public linkedInUrl = 'https://www.linkedin.com/in/miguelgutierrezi/';
  public gitHubUrl = 'https://github.com/miguelgutierrezi';
  @Input() public language = 'Spanish';
  public text1Spanish = 'Soy un ingeniero de sistemas con experiencia en el\n' +
    'desarrollo de proyectos con metodología ágil, enfocado en el\n' +
    'desarrollo full stack de aplicaciones web y móviles.';
  public text2Spanish = 'Tengo conocimiento en el desarrollo de\n' +
    'aplicaciones web haciendo uso de Angular CLI como\n' +
    'framework para Frontend, y backend de .NET Core y\n' +
    'Spring Boot. Cuento con experiencia en el\n' +
    'desarrollo de aplicaciones híbridas con Ionic\n' +
    'Framework y Flutter. Además tengo experiencia\n' +
    'manejando bases de datos relacionales como SQL\n' +
    'Server y Oracle, y bases de datos no relacionales\n' +
    'como Firebase y MongoDB.';

  public text1English = 'I am a systems engineer with experience in developing\n' +
    'projects with agile methodologies, focused on web and mobile\n' +
    'applications full stack development.';
  public text2English = 'I have knowledge in the development of web\n' +
    'applications using Angular CLI as a framework for\n' +
    'Frontend, and backend using .NET Core and Spring\n' +
    'Boot. I have experience in developing hybrid\n' +
    'applications using Ionic Framework and Flutter.\n' +
    'Also, I have experience managing relational\n' +
    'databases like SQL Server and Oracle, and non-\n' +
    'relational databases like Firebase and MongoDB.';

  constructor() { }

  ngOnInit(): void {
  }

  public goToExternalLink(url: string): void {
    window.open(url, '_blank');
  }
}
