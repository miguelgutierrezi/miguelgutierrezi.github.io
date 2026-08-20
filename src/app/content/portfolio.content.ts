import { PortfolioContent } from '../models/portfolio.models';

export const LOCAL_PORTFOLIO_CONTENT: PortfolioContent = {
  site: {
    name: 'Miguel Ángel Gutiérrez Ibagué',
    brandHandle: 'miguel.gutierrez',
    emails: ['migueangel97@hotmail.com', 'miguelangelgi.97@gmail.com'],
    socialLinks: [
      {
        id: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/miguelgutierrezi/',
        iconUrl: ''
      },
      {
        id: 'github',
        label: 'GitHub',
        url: 'https://github.com/miguelgutierrezi',
        iconUrl: ''
      }
    ]
  },
  ui: {
    profileHeading: { es: 'Sobre mí', en: 'About me' },
    aboutCode: { es: '// 01. SOBRE MÍ', en: '// 01. ABOUT' },
    aboutTitle: { es: 'Trayectoria', en: 'Background' },
    emailLabel: { es: 'Correo', en: 'Email' },
    projectsHeading: { es: 'Mis proyectos', en: 'My projects' },
    projectsCode: { es: '// 03. PROYECTOS', en: '// 03. PROJECTS' },
    projectsTitle: { es: 'Sistemas Destacados', en: 'Featured Systems' },
    viewRepository: { es: 'Ver repositorio', en: 'View repository' },
    experienceHeading: { es: 'Experiencia laboral', en: 'Professional History' },
    experienceCode: { es: '// 02. EXPERIENCIA', en: '// 02. EXPERIENCE' },
    experienceTitle: { es: 'Historial Laboral', en: 'Work History' },
    seeMore: { es: 'Ver más', en: 'See more' },
    responsibilitiesHeading: { es: 'Funciones', en: 'Responsibilities' },
    close: { es: 'Cerrar', en: 'Close' },
    coursesHeading: { es: 'Mis cursos', en: 'My courses' },
    coursesCode: { es: '// 04. APRENDIZAJE', en: '// 04. LEARNING' },
    coursesTitle: { es: 'Cursos y Certificaciones', en: 'Courses & Certifications' },
    viewCredential: { es: 'Ver credencial', en: 'See credential' },
    switchToEnglish: { es: 'English', en: 'English' },
    switchToSpanish: { es: 'Español', en: 'Español' },
    menuToggle: { es: 'Abrir o cerrar menú', en: 'Toggle navigation' },
    footerCredit: { es: 'Hecho con Angular • 2026', en: 'Built with Angular • 2026' },
    previousProject: { es: 'Proyecto anterior', en: 'Previous project' },
    nextProject: { es: 'Proyecto siguiente', en: 'Next project' }
  },
  profile: {
    imageUrl: 'assets/Fotografia_Miguel_Gutierrez.jpg',
    role: {
      es: 'INGENIERO DE SISTEMAS',
      en: 'SYSTEMS ENGINEER'
    },
    pitch: {
      es: 'Construyendo aplicaciones web y móviles full stack, integraciones en la nube y experiencias digitales con metodologías ágiles.',
      en: 'Building full-stack web and mobile applications, cloud integrations, and digital experiences with agile methodologies.'
    },
    paragraphs: [
      {
        es:
          'Ingeniero de sistemas con experiencia en el desarrollo de proyectos con metodología ágil, enfocado en el desarrollo full stack de aplicaciones web y móviles. Comprometido con entregas de calidad, colaboración con el cliente y arquitecturas mantenibles.',
        en:
          'Systems engineer with experience delivering projects with agile methodologies, focused on full-stack web and mobile development. Committed to quality delivery, client collaboration, and maintainable architectures.'
      },
      {
        es:
          'Tengo conocimiento en el desarrollo de aplicaciones web haciendo uso de Angular CLI como framework para Frontend, y backend de .NET Core y Spring Boot. Cuento con experiencia en el desarrollo de aplicaciones híbridas con Ionic Framework y Flutter. Además tengo experiencia manejando bases de datos relacionales como SQL Server y Oracle, y bases de datos no relacionales como Firebase y MongoDB.',
        en:
          'I have knowledge in the development of web applications using Angular CLI as a framework for Frontend, and backend using .NET Core and Spring Boot. I have experience in developing hybrid applications using Ionic Framework and Flutter. Also, I have experience managing relational databases like SQL Server and Oracle, and non-relational databases like Firebase and MongoDB.'
      }
    ],
    focusAreas: {
      es: ['Full Stack', 'Angular', 'Spring Boot', '.NET', 'Cloud & CI/CD', 'Mobile'],
      en: ['Full Stack', 'Angular', 'Spring Boot', '.NET', 'Cloud & CI/CD', 'Mobile']
    }
  },
  navigation: [
    { id: 'about', label: { es: 'Sobre Mí', en: 'About' } },
    { id: 'experience', label: { es: 'Experiencia', en: 'Experience' } },
    { id: 'projects', label: { es: 'Proyectos', en: 'Projects' } },
    { id: 'courses', label: { es: 'Estudios', en: 'Studies' } }
  ],
  projects: [
    {
      id: 'nodejs-scheduler-back',
      title: 'NodeJS Scheduler Back',
      description: {
        es: 'Esta API fue desarrollada para la administración de una aplicación de agenda simple',
        en: 'This API was developed for the administration of a simple scheduler app'
      },
      technologies: ['Node.js', 'JavaScript', 'API'],
      technologyIconUrls: [
        'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png'
      ],
      repositoryUrl: 'https://github.com/miguelgutierrezi/NodeJS-Scheduler-Back',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg',
      featured: true,
      sortOrder: 1
    },
    {
      id: 'angular-scheduler-front',
      title: 'Angular Scheduler Front',
      description: {
        es: 'Este front fue desarrollado para la administración de una aplicación de agenda simple',
        en: 'This front was developed for the administration of a simple scheduler app'
      },
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      technologyIconUrls: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      repositoryUrl: 'https://github.com/miguelgutierrezi/Angular-Scheduler-Front',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg',
      featured: true,
      sortOrder: 2
    },
    {
      id: 'angular-course-final-project',
      title: 'Angular Course Final Project',
      description: {
        es: 'Este front fue desarrollado para el curso de Angular - The Complete Guide de Udemy',
        en: 'This front was developed for the course Angular - The Complete Guide de Udemy'
      },
      technologies: ['Angular', 'TypeScript', 'RxJS'],
      technologyIconUrls: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      repositoryUrl: 'https://github.com/miguelgutierrezi/Angular-Course-Final-Project',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_1280.jpg',
      featured: false,
      sortOrder: 3
    },
    {
      id: 'ionic-course-final-project',
      title: 'Ionic Course Final Project',
      description: {
        es: 'Este front fue desarrollado para el curso de Ionic - Build, iOS, android & web apps with Ionic and Angular',
        en: 'This front was developed for the course Ionic - Build, iOS, android & web apps with Ionic and Angular'
      },
      technologies: ['Ionic', 'Angular', 'TypeScript'],
      technologyIconUrls: [
        'https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      repositoryUrl: 'https://github.com/miguelgutierrezi/Ionic-Course-Final-Project',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg',
      featured: false,
      sortOrder: 4
    },
    {
      id: 'check-in-now',
      title: 'CheckInNow',
      description: {
        es: 'Proyecto realizado para la materia de "Introducción a la computación móvil"',
        en: 'Project developed for "Introducción a la computación móvil" subject'
      },
      technologies: ['Android', 'Java'],
      technologyIconUrls: [
        'https://logonoid.com/images/android-studio-logo.png',
        'https://qph.fs.quoracdn.net/main-qimg-c43424186b9c089b9aa1d64c7f1989c1'
      ],
      repositoryUrl: 'https://github.com/IntroCompuMovil18302/CheckInNow',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg',
      featured: false,
      sortOrder: 5
    },
    {
      id: 'synchronous',
      title: 'Synchronous',
      description: {
        es: 'Proyecto realizado para la materia de "Ingeniería de Software"',
        en: 'Project developed for the "Ingeniería de Software" subject'
      },
      technologies: ['Django', 'Ionic', 'Angular'],
      technologyIconUrls: [
        'https://splendornet.com/wp-content/uploads/2019/01/django.png',
        'https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        'https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png',
        'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png'
      ],
      repositoryUrl: 'https://github.com/miguelgutierrezi/Synchronous',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/03/20/03/06/desk-2158142_1280.jpg',
      featured: false,
      sortOrder: 6
    }
  ],
  experience: [
    {
      id: 'globant',
      company: 'Globant',
      role: {
        es: 'Desarrollador Java Semi Senior Advanced',
        en: 'Semi Senior Advanced Java Developer'
      },
      duration: {
        es: 'Febrero 2021 - Actual',
        en: 'February 2021 - Current'
      },
      responsibilities: {
        es: [
          'Consultor - Desarrollador en entidades como Disney, Hulu, desarrollando aplicaciones según los requerimientos del cliente.',
          'Análisis de refinamiento de historias de usuario junto con el equipo de trabajo.',
          'Desarrollador enfocado en el desarrollo de aplicaciones haciendo uso de Java con',
          'Spring Framework, Flask y Django en Python, ReactJS, AWS y arquitecturas monolíticas y de microservicios.',
          'CI/CD usando pipelines en jenkins y CircleCI',
          'Contacto con el cliente siguiendo metodologías ágiles.'
        ],
        en: [
          'Consultant - Developer in entities such as Disney, Hulu, developing applications according to the client\'s requirements.',
          'Refinement analysis of user stories together with the work team.',
          'Developer focused on developing applications using Java with Spring Framework, Flask and Django on Python, ReactJS, Angular, AWS, and monolithic and microservices architectures.',
          'CI/CD using jenkins and CircleCI pipelines',
          'Contact with the client following agile methodologies.'
        ]
      },
      imageUrl: 'https://emprendedoresnews.com/wp-content/uploads/2020/01/company_5d7c04ad08a25a53fd4d5987.png',
      sortOrder: 1
    },
    {
      id: 'banco-de-bogota',
      company: 'Banco de Bogotá',
      role: {
        es: 'Desarrollador Fullstack',
        en: 'Fullstack Developer'
      },
      duration: {
        es: 'Agosto 2020 - Febrero 2021',
        en: 'August 2020 - February 2021'
      },
      responsibilities: {
        es: [
          'Análisis de refinamiento de historias de usuario junto con el equipo de trabajo.',
          'Desarrollador full stack de aplicaciones haciendo uso de lenguajes Java, Typescript, Javascript y Frameworks como Angular, NodeJS y Spring Boot. Uso de caché con Redis y ElasticSearch como BD.',
          'Integración continua haciendo uso de CircleCI y despliegue con AWS Fargate, Lambda y Api gateway.',
          'Elaboración de proyectos con metodologías ágiles tales como Scrum Scrumban o Kanban.'
        ],
        en: [
          'Analysis and refinement of user stories with the project teamwork.',
          'Full stack developer of applications using programming languages like Java and Typescript, and Frameworks such as Angular, or Spring Boot.',
          'Continuous integration using CircleCI and deployment with AWS Fargate, Lambda and Api gateway.',
          'Development of projects with agile methodologies such as Scrum, Scrumban and Kanban.'
        ]
      },
      imageUrl: 'https://seeklogo.com/images/B/Banco_de_Bogota-logo-609A0072EA-seeklogo.com.png',
      sortOrder: 2
    },
    {
      id: 'asesoftware',
      company: 'Asesoftware',
      role: {
        es: 'Analista de Sistemas',
        en: 'Systems Analyst'
      },
      duration: {
        es: 'Enero 2020 - Agosto 2020',
        en: 'January 2020 - August 2020'
      },
      responsibilities: {
        es: [
          'Análisis de requerimientos y de sistemas, enfocados a las peticiones del cliente para sistemas determinados.',
          'Desarrollador full stack de aplicaciones haciendo uso de lenguajes Java, .NET, Typescript, y Frameworks como Angular, o Spring Boot.',
          'Liderar equipos de trabajo',
          'Contacto con el cliente siguiendo metodologías ágiles como Scrum.'
        ],
        en: [
          'Analysis of requirements and systems, focused on customer requests for specific systems.',
          'Full stack developer of applications using programming languages like Java, .NET and Typescript, and Frameworks such as Angular, or Spring Boot.',
          'Lead work teams',
          'Contact with the client following agile methodologies.'
        ]
      },
      imageUrl: 'https://ferialaboral.uniandes.edu.co/images/12020-20-30/tercer-envio/Asesoftware.png',
      sortOrder: 3
    },
    {
      id: 'administradores-diaz',
      company: 'Administradores Diaz PH SAS',
      role: {
        es: 'Diseñador y Desarrollador',
        en: 'Designer and Developer'
      },
      duration: {
        es: 'Enero 2020 - Junio 2020',
        en: 'January 2020 - June 2020'
      },
      responsibilities: {
        es: [
          'Diseño y desarrollo como freelance de aplicación híbrida enfocada a la administración de edificios, haciendo uso de Ionic Framework y Firebase.'
        ],
        en: [
          'Design and development as a freelance, of an hybrid application focused on building management, using the Ionic Framework and Firebase.'
        ]
      },
      imageUrl: '',
      sortOrder: 4
    },
    {
      id: 'javeriana-monitor',
      company: 'Pontificia Universidad Javeriana',
      role: {
        es: 'Monitor de introducción a la Ingeniería de Sistemas',
        en: 'Introduction to Systems Engineer Instructor'
      },
      duration: {
        es: 'Junio 2016 - Noviembre 2019',
        en: 'June 2016 - November 2019'
      },
      responsibilities: {
        es: [
          'Formulación de laboratorios con el robot Lego Mindstorms EV3, kit educativo, para los estudiantes.',
          'Asistencia y coordinación en el desarrollo de los laboratorios de la asignatura Introducción a la Ingeniería de Sistemas.'
        ],
        en: [
          'Formulation of laboratories with the Lego Mindstorms EV3 robot, educational kit, for students.',
          'Assistance and coordination in the development of the laboratories of the Introduction to Systems Engineering subject.'
        ]
      },
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Javeriana.svg/1200px-Javeriana.svg.png',
      sortOrder: 5
    },
    {
      id: 'saludarte',
      company: 'Fundación Saludarte',
      role: {
        es: 'Diseñador y desarrollador',
        en: 'Designer and Developer'
      },
      duration: {
        es: 'Enero 2019 - Junio 2019',
        en: 'January 2019 - June 2019'
      },
      responsibilities: {
        es: [
          'Desarrollo de Proyecto Social Universitario con la Pontificia Universidad Javeriana.',
          'Re-ingeniería de la aplicación de inventarios de la entidad',
          'Diseño de la aplicación de nómina de la entidad.',
          'Talleres de C++, Matlab y LaTex a algunos de los residentes de la fundación.'
        ],
        en: [
          'Reengineering of Inventory app inside the entity.',
          'Design and develop of paysheet app inside the entity.'
        ]
      },
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/djmnD5r9aWbXbtQdreOPrLuQDh90YocTF9Kzige246cyVWU96M6BvI5IXxxi9XGN3nlO1ddNU3JpfAz1u8C8beohN02ritpz7pQdLUOdhYk-',
      sortOrder: 6
    }
  ],
  courses: [
    {
      id: 'platzi-react-practical',
      title: { es: 'CURSO PRÁCTICO DE REACTJS', en: 'REACTJS PRACTICAL COURSE' },
      institution: 'Platzi',
      date: { es: 'Marzo 2021', en: 'March 2021' },
      imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png',
      credentialUrl: 'https://platzi.com/p/miguelgutierrezi/curso/1651-course/diploma/detalle/',
      sortOrder: 1
    },
    {
      id: 'platzi-react',
      title: { es: 'CURSO DE REACTJS', en: 'REACTJS COURSE' },
      institution: 'Platzi',
      date: { es: 'Marzo 2021', en: 'March 2021' },
      imageUrl: 'https://cdn.auth0.com/blog/react-js/react.png',
      credentialUrl: 'https://platzi.com/p/miguelgutierrezi/curso/1548-react/diploma/detalle/',
      sortOrder: 2
    },
    {
      id: 'udemy-java-8',
      title: { es: 'JAVA 8 NEW FEATURES IN SIMPLE WAY', en: 'JAVA 8 NEW FEATURES IN SIMPLE WAY' },
      institution: 'Udemy',
      date: { es: 'Enero 2021', en: 'January 2021' },
      imageUrl: 'https://benjagarrido.com/wp-content/uploads/2015/07/java_logo.png',
      credentialUrl: 'https://www.udemy.com/certificate/UC-3fcc0583-03f3-4b83-8a8d-848586b1a54f/',
      sortOrder: 3
    },
    {
      id: 'platzi-git',
      title: { es: 'CURSO PROFESIONAL DE GIT Y GITHUB', en: 'GIT AND GITHUB PROFESSIONAL COURSE' },
      institution: 'Platzi',
      date: { es: 'Noviembre 2020', en: 'November 2020' },
      imageUrl: 'https://i1.wp.com/unaaldia.hispasec.com/wp-content/uploads/2018/06/877f2-git-logo.png?fit=910%2C910&ssl=1',
      credentialUrl: 'https://platzi.com/@miguelgutierrezi/curso/1557-git-github/diploma/detalle/',
      sortOrder: 4
    },
    {
      id: 'ef-set',
      title: { es: 'EF STANDARD ENGLISH TEST', en: 'EF STANDARD ENGLISH TEST' },
      institution: 'EF Standard English Test (EF SET)',
      date: { es: 'Noviembre 2020', en: 'November 2020' },
      imageUrl: 'https://avatars2.githubusercontent.com/u/4095775?s=280&v=4',
      credentialUrl: 'https://www.efset.org/cert/Bjyeio',
      sortOrder: 5
    },
    {
      id: 'aws-technical-essentials',
      title: { es: 'AWS TECHNICAL ESSENTIALS DAY', en: 'AWS TECHNICAL ESSENTIALS DAY' },
      institution: 'Udemy',
      date: { es: 'Octubre 2020', en: 'October 2020' },
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',
      sortOrder: 6
    },
    {
      id: 'devops-master',
      title: {
        es: 'MASTER DEVOPS WITH DOCKER, KUBERNETES AND AZURE DEVOPS',
        en: 'MASTER DEVOPS WITH DOCKER, KUBERNETES AND AZURE DEVOPS'
      },
      institution: 'Udemy',
      date: { es: 'Agosto 2020', en: 'August 2020' },
      imageUrl: 'https://d3pmluylahx1gi.cloudfront.net/wp-content/uploads/2019/12/04212545/Nub8-What-is-Devops-1.png',
      credentialUrl: 'https://www.udemy.com/certificate/UC-517c2369-7720-426e-8e8a-6326daaaedb6/',
      sortOrder: 7
    },
    {
      id: 'ionic-academind',
      title: {
        es: 'IONIC - BUILD, IOS, ANDROID & WEB APPS WITH IONIC AND ANGULAR',
        en: 'IONIC - BUILD, IOS, ANDROID & WEB APPS WITH IONIC AND ANGULAR'
      },
      institution: 'Udemy - Academind',
      date: { es: 'Junio 2020', en: 'June 2020' },
      imageUrl: 'https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png',
      credentialUrl: 'https://www.udemy.com/certificate/UC-26210c57-d329-465c-8c38-f393c467b39e/',
      sortOrder: 8
    },
    {
      id: 'angular-complete-guide',
      title: { es: 'ANGULAR - THE COMPLETE GUIDE', en: 'ANGULAR - THE COMPLETE GUIDE' },
      institution: 'Udemy - Academind',
      date: { es: 'Junio 2020', en: 'June 2020' },
      imageUrl: 'https://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png',
      credentialUrl: 'https://www.udemy.com/certificate/UC-35e719c7-cf3b-42ea-890d-238c5bc13ac8/',
      sortOrder: 9
    },
    {
      id: 'scrum-fundamentals',
      title: { es: 'SCRUM FUNDAMENTALS CERTIFIED', en: 'SCRUM FUNDAMENTALS CERTIFIED' },
      institution: 'ScrumStudy',
      date: { es: 'Mayo 2020', en: 'May 2020' },
      imageUrl:
        'https://static.wixstatic.com/media/359df6_b24c9194c0bc42faa49600ae844e4e65~mv2.png/v1/fill/w_240,h_134,al_c,q_85,usm_0.33_1.00_0.00/Logo-SCRUMstudy.webp',
      credentialUrl:
        'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-MiguelGuti%C3%A9rrez-782269.pdf',
      sortOrder: 10
    },
    {
      id: 'bizagi-process-modeling',
      title: { es: 'CERTIFICACIÓN EN MODELAMIENTO DE PROCESOS', en: 'PROCESS MODELING CERTIFICATION' },
      institution: 'Bizagi Limited',
      date: { es: 'Octubre 2017', en: 'October 2017' },
      imageUrl:
        'https://media-exp1.licdn.com/dms/image/C560BAQEjv-SN4JUpJA/company-logo_200_200/0?e=2159024400&v=beta&t=Yibb5xgK5A1toFp6roIKHKAq4jZJbqye9wxRTOysgXM',
      sortOrder: 11
    }
  ]
};
