import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  @Input() public language: string;
  public spanishCourses = [
    {
      name: 'CURSO PROFESIONAL DE GIT Y GITHUB',
      date: 'Noviembre 2020',
      company: 'Platzi',
      imageLink: 'https://i1.wp.com/unaaldia.hispasec.com/wp-content/uploads/2018/06/877f2-git-logo.png?fit=910%2C910&ssl=1',
      credential: 'https://platzi.com/@miguelgutierrezi/curso/1557-git-github/diploma/detalle/'
    },
    {
      name: 'EF STANDARD ENGLISH TEST',
      date: 'Noviembre 2020',
      company: 'EF Standard English Test (EF SET)',
      imageLink: 'https://avatars2.githubusercontent.com/u/4095775?s=280&v=4',
      credential: 'https://www.efset.org/cert/Bjyeio'
    },
    {
      name: 'AWS TECHNICAL ESSENTIALS DAY',
      date: 'Octubre 2020',
      company: 'Udemy',
      imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png'
    },
    {
      name: 'MASTER DEVOPS WITH DOCKER, KUBERNETES AND AZURE DEVOPS',
      date: 'Agosto 2020',
      company: 'Udemy',
      imageLink: 'https://d3pmluylahx1gi.cloudfront.net/wp-content/uploads/2019/12/04212545/Nub8-What-is-Devops-1.png',
      credential: 'https://www.udemy.com/certificate/UC-517c2369-7720-426e-8e8a-6326daaaedb6/'
    },
    {
      name: 'IONIC - BUILD, IOS, ANDROID & WEB APPS WITH IONIC AND ANGULAR',
      date: 'Junio 2020',
      company: 'Udemy - Academind',
      imageLink: 'https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png',
      credential: 'https://www.udemy.com/certificate/UC-26210c57-d329-465c-8c38-f393c467b39e/'
    },
    {
      name: 'ANGULAR - THE COMPLETE GUIDE',
      date: 'Junio 2020',
      company: 'Udemy - Academind',
      imageLink: 'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png',
      credential: 'https://www.udemy.com/certificate/UC-35e719c7-cf3b-42ea-890d-238c5bc13ac8/'
    },
    {
      name: 'SCRUM FUNDAMENTALS CERTIFIED',
      date: 'Mayo 2020',
      company: 'ScrumStudy',
      imageLink: 'https://static.wixstatic.com/media/359df6_b24c9194c0bc42faa49600ae844e4e65~mv2.png/v1/fill/w_240,h_134,al_c,q_85,usm_0.33_1.00_0.00/Logo-SCRUMstudy.webp',
      credential: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-MiguelGuti%C3%A9rrez-782269.pdf'
    },
    {
      name: 'CERTIFICACIÓN EN MODELAMIENTO DE PROCESOS',
      date: 'Octubre 2017',
      company: 'Bizagi Limited',
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560BAQEjv-SN4JUpJA/company-logo_200_200/0?e=2159024400&v=beta&t=Yibb5xgK5A1toFp6roIKHKAq4jZJbqye9wxRTOysgXM'
    },
  ];

  public englishCourses = [
    {
      name: 'GIT AND GITHUB PROFESSIONAL COURSE',
      date: 'November 2020',
      company: 'Platzi',
      imageLink: 'https://i1.wp.com/unaaldia.hispasec.com/wp-content/uploads/2018/06/877f2-git-logo.png?fit=910%2C910&ssl=1',
      credential: 'https://platzi.com/@miguelgutierrezi/curso/1557-git-github/diploma/detalle/'
    },
    {
      name: 'EF STANDARD ENGLISH TEST',
      date: 'November 2020',
      company: 'EF Standard English Test (EF SET)',
      imageLink: 'https://avatars2.githubusercontent.com/u/4095775?s=280&v=4',
      credential: 'https://www.efset.org/cert/Bjyeio'
    },
    {
      name: 'AWS TECHNICAL ESSENTIALS DAY',
      date: 'October 2020',
      company: 'Udemy',
      imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png'
    },
    {
      name: 'MASTER DEVOPS WITH DOCKER, KUBERNETES AND AZURE DEVOPS',
      date: 'August 2020',
      company: 'Udemy',
      imageLink: 'https://d3pmluylahx1gi.cloudfront.net/wp-content/uploads/2019/12/04212545/Nub8-What-is-Devops-1.png',
      credential: 'https://www.udemy.com/certificate/UC-517c2369-7720-426e-8e8a-6326daaaedb6/'
    },
    {
      name: 'IONIC - BUILD, IOS, ANDROID & WEB APPS WITH IONIC AND ANGULAR',
      date: 'June 2020',
      company: 'Udemy - Academind',
      imageLink: 'https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png',
      credential: 'https://www.udemy.com/certificate/UC-26210c57-d329-465c-8c38-f393c467b39e/'
    },
    {
      name: 'ANGULAR - THE COMPLETE GUIDE',
      date: 'June 2020',
      company: 'Udemy - Academind',
      imageLink: 'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png',
      credential: 'https://www.udemy.com/certificate/UC-35e719c7-cf3b-42ea-890d-238c5bc13ac8/'
    },
    {
      name: 'SCRUM FUNDAMENTALS CERTIFIED',
      date: 'May 2020',
      company: 'ScrumStudy',
      imageLink: 'https://static.wixstatic.com/media/359df6_b24c9194c0bc42faa49600ae844e4e65~mv2.png/v1/fill/w_240,h_134,al_c,q_85,usm_0.33_1.00_0.00/Logo-SCRUMstudy.webp',
      credential: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-MiguelGuti%C3%A9rrez-782269.pdf'
    },
    {
      name: 'PROCESS MODELING CERTIFICATION',
      date: 'October 2017',
      company: 'Bizagi Limited',
      imageLink: 'https://media-exp1.licdn.com/dms/image/C560BAQEjv-SN4JUpJA/company-logo_200_200/0?e=2159024400&v=beta&t=Yibb5xgK5A1toFp6roIKHKAq4jZJbqye9wxRTOysgXM'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
