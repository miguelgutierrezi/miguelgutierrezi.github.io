import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.sass'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProjectsComponent implements OnInit {
  @Input() public language = 'Spanish';
  public spanishProjects = [
    {
      name: 'NodeJS Scheduler Back',
      icons: [
        'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png'
      ],
      description: 'Esta API fue desarrollada para la administración de una aplicación de agenda simple',
      gitHubURL: 'https://github.com/miguelgutierrezi/NodeJS-Scheduler-Back',
      image: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg'
    },
    {
      name: 'Angular Scheduler Front',
      icons: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'Este front fue desarrollado para la administración de una aplicación de agenda simple',
      gitHubURL: 'https://github.com/miguelgutierrezi/Angular-Scheduler-Front',
      image: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg'
    },
    {
      name: 'Angular Course Final Project',
      icons: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'Este front fue desarrollado para el curso de Angular - The Complete Guide de Udemy',
      gitHubURL: 'https://github.com/miguelgutierrezi/Angular-Course-Final-Project',
      image: 'https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_1280.jpg'
    },
    {
      name: 'Ionic Course Final Project',
      icons: [
        'https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'Este front fue desarrollado para el curso de Ionic - Build, iOS, android & web apps with Ionic and Angular',
      gitHubURL: 'https://github.com/miguelgutierrezi/Ionic-Course-Final-Project',
      image: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg'
    },
    {
      name: 'CheckInNow',
      icons: [
        'https://logonoid.com/images/android-studio-logo.png',
        'https://qph.fs.quoracdn.net/main-qimg-c43424186b9c089b9aa1d64c7f1989c1',
      ],
      description: 'Proyecto realizado para la materia de "Introducción a la computación móvil"',
      gitHubURL: 'https://github.com/IntroCompuMovil18302/CheckInNow',
      image: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg'
    },
    {
      name: 'Synchronous',
      icons: [
        'https://splendornet.com/wp-content/uploads/2019/01/django.png',
        'https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'Proyecto realizado para la materia de "Ingeniería de Software"',
      gitHubURL: 'https://github.com/miguelgutierrezi/Synchronous',
      image: 'https://cdn.pixabay.com/photo/2017/03/20/03/06/desk-2158142_1280.jpg'
    }
  ];
  public englishProjects = [
    {
      name: 'NodeJS Scheduler Back',
      icons: [
        'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png'
      ],
      description: 'This API was developed for the administration of a simple scheduler app',
      gitHubURL: 'https://github.com/miguelgutierrezi/NodeJS-Scheduler-Back',
      image: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg'
    },
    {
      name: 'Angular Scheduler Front',
      icons: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'This front was developed for the administration of a simple scheduler app',
      gitHubURL: 'https://github.com/miguelgutierrezi/Angular-Scheduler-Front',
      image: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg'
    },
    {
      name: 'Angular Course Final Project',
      icons: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'This front was developed for the course Angular - The Complete Guide de Udemy',
      gitHubURL: 'https://github.com/miguelgutierrezi/Angular-Course-Final-Project',
      image: 'https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_1280.jpg'
    },
    {
      name: 'Ionic Course Final Project',
      icons: [
        'https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'This front was developed for the course Ionic - Build, iOS, android & web apps with Ionic and Angular',
      gitHubURL: 'https://github.com/miguelgutierrezi/Ionic-Course-Final-Project',
      image: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg'
    },
    {
      name: 'CheckInNow',
      icons: [
        'https://logonoid.com/images/android-studio-logo.png',
        'https://qph.fs.quoracdn.net/main-qimg-c43424186b9c089b9aa1d64c7f1989c1',
      ],
      description: 'Project developed for "Introducción a la computación móvil" subject',
      gitHubURL: 'https://github.com/IntroCompuMovil18302/CheckInNow',
      image: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg'
    },
    {
      name: 'Synchronous',
      icons: [
        'https://splendornet.com/wp-content/uploads/2019/01/django.png',
        'https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      description: 'Project developed for the "Ingeniería de Software" subject',
      gitHubURL: 'https://github.com/miguelgutierrezi/Synchronous',
      image: 'https://cdn.pixabay.com/photo/2017/03/20/03/06/desk-2158142_1280.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
