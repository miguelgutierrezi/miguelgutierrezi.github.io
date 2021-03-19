import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
  @Input() public language: string;
  public selectedJobSpanish: any;
  public selectedJobEnglish: any;
  public spanishExperience = [
    {
      charge: 'Desarrollador Java Semi Senior Advanced',
      enterprise: 'Globant',
      duration: 'Febrero 2021 - Actual',
      functions: [
        'Consultor - Desarrollador en entidades como Disney, Hulu, desarrollando aplicaciones según los requerimientos del cliente.',
        'Análisis de refinamiento de historias de usuario junto con el equipo de trabajo.',
        'Desarrollador enfocado en el desarrollo de aplicaciones haciendo uso de Java con',
        'Spring Framework, Flask y Django en Python, ReactJS, AWS y arquitecturas monolíticas y de microservicios.',
        'CI/CD usando pipelines en jenkins y CircleCI',
        'Contacto con el cliente siguiendo metodologías ágiles.'
      ],
      image: 'https://emprendedoresnews.com/wp-content/uploads/2020/01/company_5d7c04ad08a25a53fd4d5987.png'
    },
    {
      charge: 'Desarrollador Fullstack',
      enterprise: 'Banco de Bogotá',
      duration: 'Agosto 2020 - Febrero 2021',
      functions: [
        'Análisis de refinamiento de historias de usuario junto con el equipo de trabajo.',
        'Desarrollador full stack de aplicaciones haciendo uso de lenguajes Java, Typescript, Javascript y Frameworks como Angular, NodeJS y Spring Boot. Uso de caché con Redis y ElasticSearch como BD.',
        'Integración continua haciendo uso de CircleCI y despliegue con AWS Fargate, Lambda y Api gateway.',
        'Elaboración de proyectos con metodologías ágiles tales como Scrum Scrumban o Kanban.'
      ],
      image: 'https://seeklogo.com/images/B/Banco_de_Bogota-logo-609A0072EA-seeklogo.com.png'
    },
    {
      charge: 'Analista de Sistemas',
      enterprise: 'Asesoftware',
      duration: 'Enero 2020 - Agosto 2020',
      functions: [
        'Análisis de requerimientos y de sistemas, enfocados a las peticiones del cliente para sistemas determinados.',
        'Desarrollador full stack de aplicaciones haciendo uso de lenguajes Java, .NET, Typescript, y Frameworks como Angular, o Spring Boot.',
        'Liderar equipos de trabajo',
        'Contacto con el cliente siguiendo metodologías ágiles como Scrum.'
      ],
      image: 'https://ferialaboral.uniandes.edu.co/images/12020-20-30/tercer-envio/Asesoftware.png'
    },
    {
      charge: 'Diseñador y Desarrollador',
      enterprise: 'Administradores Diaz PH SAS',
      duration: 'Enero 2020 - Junio 2020',
      functions: [
        'Diseño y desarrollo como freelance de aplicación híbrida enfocada a la administración de edificios, haciendo uso de Ionic Framework y Firebase.'
      ],
      image: ''
    },
    {
      charge: 'Monitor de introducción a la Ingeniería de Sistemas',
      enterprise: 'Pontificia Universidad Javeriana',
      duration: 'Junio 2016 - Noviembre 2019',
      functions: [
        'Formulación de laboratorios con el robot Lego Mindstorms EV3, kit educativo, para los estudiantes.',
        'Asistencia y coordinación en el desarrollo de los laboratorios de la asignatura Introducción a la Ingeniería de Sistemas.'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Javeriana.svg/1200px-Javeriana.svg.png'
    },
    {
      charge: 'Diseñador y desarrollador',
      enterprise: 'Fundación Saludarte',
      duration: 'Enero 2019 - Junio 2019',
      functions: [
        'Desarrollo de Proyecto Social Universitario con la Pontificia Universidad Javeriana.',
        'Re-ingeniería de la aplicación de inventarios de la entidad',
        'Diseño de la aplicación de nómina de la entidad.',
        'Talleres de C++, Matlab y LaTex a algunos de los residentes de la fundación.'
      ],
      image: 'https://lh3.googleusercontent.com/proxy/djmnD5r9aWbXbtQdreOPrLuQDh90YocTF9Kzige246cyVWU96M6BvI5IXxxi9XGN3nlO1ddNU3JpfAz1u8C8beohN02ritpz7pQdLUOdhYk-'
    }
  ];
  public englishExperience = [
    {
      charge: 'Semi Senior Advanced Java Developer',
      enterprise: 'Globant',
      duration: 'February 2021 - Current',
      functions: [
        'Consultant - Developer in entities such as Disney, Hulu, developing applications according to the client\'s requirements.',
        'Refinement analysis of user stories together with the work team.',
        'Developer focused on developing applications using Java with Spring Framework, Flask and Django on Python, ReactJS, Angular, AWS, and monolithic and microservices architectures.',
        'CI/CD using jenkins and CircleCI pipelines',
        'Contact with the client following agile methodologies.'
      ],
      image: 'https://emprendedoresnews.com/wp-content/uploads/2020/01/company_5d7c04ad08a25a53fd4d5987.png'
    },
    {
      charge: 'Fullstack Developer',
      enterprise: 'Banco de Bogotá',
      duration: 'August 2020 - February 2021',
      functions: [
        'Analysis and refinement of user stories with the project teamwork.',
        'Full stack developer of applications using programming languages like Java and Typescript, and Frameworks such as Angular, or Spring Boot.',
        'Continuous integration using CircleCI and deployment with AWS Fargate, Lambda and Api gateway.',
        'Development of projects with agile methodologies such as Scrum, Scrumban and Kanban.'
      ],
      image: 'https://seeklogo.com/images/B/Banco_de_Bogota-logo-609A0072EA-seeklogo.com.png'
    },
    {
      charge: 'Systems Analyst',
      enterprise: 'Asesoftware',
      duration: 'January 2020 - August 2020',
      functions: [
        'Analysis of requirements and systems, focused on customer requests for specific systems.',
        'Full stack developer of applications using programming languages like Java, .NET and Typescript, and Frameworks such as Angular, or Spring Boot.',
        'Lead work teams',
        'Contact with the client following agile methodologies.'
      ],
      image: 'https://ferialaboral.uniandes.edu.co/images/12020-20-30/tercer-envio/Asesoftware.png'
    },
    {
      charge: 'Designer and Developer',
      enterprise: 'Administradores Diaz PH SAS',
      duration: 'January 2020 - June 2020',
      functions: [
        'Design and development as a freelance, of an hybrid application focused on building management, using the Ionic Framework and Firebase.'
      ],
      image: ''
    },
    {
      charge: 'Introduction to Systems Engineer Instructor',
      enterprise: 'Pontificia Universidad Javeriana',
      duration: 'June 2016 - November 2019',
      functions: [
        'Formulation of laboratories with the Lego Mindstorms EV3 robot, educational kit, for students.',
        'Assistance and coordination in the development of the laboratories of the Introduction to Systems Engineering subject.'
      ],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Javeriana.svg/1200px-Javeriana.svg.png'
    },
    {
      charge: 'Designer and Developer',
      enterprise: 'Fundación Saludarte',
      duration: 'January 2019 - June 2019',
      functions: [
        'Reengineering of Inventory app inside the entity.',
        'Design and develop of paysheet app inside the entity.'
      ],
      image: 'https://lh3.googleusercontent.com/proxy/djmnD5r9aWbXbtQdreOPrLuQDh90YocTF9Kzige246cyVWU96M6BvI5IXxxi9XGN3nlO1ddNU3JpfAz1u8C8beohN02ritpz7pQdLUOdhYk-'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSelectJob(i: number): void {
    this.selectedJobEnglish = this.englishExperience[i];
    this.selectedJobSpanish = this.spanishExperience[i];
  }

  public onCloseAlert(): void {
    this.selectedJobEnglish = null;
    this.selectedJobSpanish = null;
  }
}
