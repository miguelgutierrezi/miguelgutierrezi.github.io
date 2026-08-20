import { PortfolioContent } from '../models/portfolio.models';

export const LOCAL_PORTFOLIO_CONTENT: PortfolioContent = {
  site: {
    name: 'Miguel Ángel Gutiérrez Ibagué',
    brandHandle: 'miguel.gutierrez',
    emails: ['migueangel97@hotmail.com', 'miguelangelgi.97@gmail.com'],
    socialLinks: [
      {
        id: 'github',
        label: 'GitHub',
        url: 'https://github.com/miguelgutierrezi',
        iconUrl: ''
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/miguelgutierrezi/',
        iconUrl: ''
      },
      {
        id: 'phone',
        label: 'Phone',
        url: 'tel:+573108108579',
        iconUrl: ''
      },
      {
        id: 'whatsapp',
        label: 'WhatsApp',
        url: 'https://wa.me/573108108579',
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
    nextProject: { es: 'Proyecto siguiente', en: 'Next project' },
    backToProjects: { es: 'Volver a proyectos', en: 'Back to projects' },
    projectDetailsHeading: { es: 'Detalles del Proyecto', en: 'Project Details' },
    perspectiveCode: { es: '// 01. PERSPECTIVA', en: '// 01. PERSPECTIVE' },
    perspectiveTitle: { es: 'Descripción e Impacto', en: 'Description & Impact' },
    capabilitiesCode: { es: '// 02. CAPACIDADES', en: '// 02. CAPABILITIES' },
    capabilitiesTitle: { es: 'Características Clave', en: 'Key Features' },
    interfaceCode: { es: '// 03. INTERFAZ', en: '// 03. INTERFACE' },
    interfaceTitle: { es: 'Capturas de Pantalla', en: 'Screenshots' },
    keyTechnologies: { es: 'Tecnologías clave', en: 'Key technologies' },
    viewGithub: { es: 'Ver Código en GitHub', en: 'View Code on GitHub' },
    viewLiveDemo: { es: 'Ver Demo en Vivo', en: 'View Live Demo' },
    metaRole: { es: 'Rol', en: 'Role' },
    metaDuration: { es: 'Duración', en: 'Duration' },
    metaTeam: { es: 'Equipo', en: 'Team' },
    metaYear: { es: 'Año', en: 'Year' },
    metaClient: { es: 'Cliente', en: 'Client' }
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
    { id: 'courses', label: { es: 'Cursos', en: 'Courses' } }
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
      sortOrder: 1,
      detail: {
        summary: {
          es: 'API REST en Node.js para gestionar eventos, usuarios y operaciones de una agenda personal.',
          en: 'Node.js REST API to manage events, users, and operations for a personal scheduler.'
        },
        role: {
          es: 'Desarrollador backend',
          en: 'Backend developer'
        },
        duration: {
          es: '~3 meses',
          en: '~3 months'
        },
        team: {
          es: 'Proyecto individual',
          en: 'Solo project'
        },
        year: '2019',
        client: {
          es: 'Proyecto personal',
          en: 'Personal project'
        },
        body: [
          {
            es: 'Backend de una aplicación de agenda simple: endpoints para crear, listar, actualizar y eliminar eventos, con una capa de API pensada para consumirse desde un front Angular.',
            en: 'Backend for a simple scheduler app: endpoints to create, list, update, and delete events, with an API layer designed to be consumed by an Angular front end.'
          },
          {
            es: 'El objetivo fue practicar diseño de API REST, manejo de rutas y separación clara entre lógica de negocio y capa HTTP en Node.js y JavaScript.',
            en: 'The goal was to practice REST API design, routing, and a clear separation between business logic and the HTTP layer in Node.js and JavaScript.'
          }
        ],
        features: [
          {
            id: 'nsb-api',
            icon: 'api',
            title: { es: 'API REST', en: 'REST API' },
            description: {
              es: 'Endpoints CRUD para la administración de la agenda.',
              en: 'CRUD endpoints for scheduler administration.'
            }
          },
          {
            id: 'nsb-events',
            icon: 'bell',
            title: { es: 'Gestión de eventos', en: 'Event management' },
            description: {
              es: 'Creación y actualización de citas y recordatorios.',
              en: 'Create and update appointments and reminders.'
            }
          },
          {
            id: 'nsb-code',
            icon: 'code',
            title: { es: 'Node.js / JavaScript', en: 'Node.js / JavaScript' },
            description: {
              es: 'Servidor HTTP ligero y modular para el backend.',
              en: 'Lightweight, modular HTTP server for the backend.'
            }
          },
          {
            id: 'nsb-terminal',
            icon: 'terminal',
            title: { es: 'Integración con el front', en: 'Front-end integration' },
            description: {
              es: 'Contrato de API listo para el cliente Angular Scheduler.',
              en: 'API contract ready for the Angular Scheduler client.'
            }
          }
        ],
        gallery: [
          {
            id: 'nsb-cover',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg',
            title: { es: 'Agenda / timetable', en: 'Schedule / timetable' },
            caption: {
              es: 'Imagen representativa del dominio de la agenda.',
              en: 'Representative image of the scheduler domain.'
            }
          }
        ]
      }
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
      sortOrder: 2,
      detail: {
        summary: {
          es: 'Cliente Angular para administrar eventos de una agenda, consumiendo la API Node.js asociada.',
          en: 'Angular client to manage scheduler events, consuming the related Node.js API.'
        },
        role: {
          es: 'Desarrollador frontend',
          en: 'Frontend developer'
        },
        duration: {
          es: '~3 meses',
          en: '~3 months'
        },
        team: {
          es: 'Proyecto individual',
          en: 'Solo project'
        },
        year: '2019',
        client: {
          es: 'Proyecto personal',
          en: 'Personal project'
        },
        body: [
          {
            es: 'Interfaz web en Angular y TypeScript para listar y gestionar citas de una agenda simple, conectada al backend NodeJS Scheduler.',
            en: 'Web UI in Angular and TypeScript to list and manage appointments for a simple scheduler, connected to the NodeJS Scheduler backend.'
          },
          {
            es: 'Sirvió para consolidar componentes, formularios, servicios HTTP y estilos HTML/CSS en un flujo full stack con el repositorio hermano de la API.',
            en: 'It helped consolidate components, forms, HTTP services, and HTML/CSS styling in a full-stack flow with the sibling API repository.'
          }
        ],
        features: [
          {
            id: 'asf-ui',
            icon: 'code',
            title: { es: 'UI Angular', en: 'Angular UI' },
            description: {
              es: 'Vistas tipadas en TypeScript para la agenda.',
              en: 'Typed TypeScript views for the scheduler.'
            }
          },
          {
            id: 'asf-api',
            icon: 'api',
            title: { es: 'Consumo de API', en: 'API consumption' },
            description: {
              es: 'Servicios HTTP hacia el backend Node.js.',
              en: 'HTTP services against the Node.js backend.'
            }
          },
          {
            id: 'asf-events',
            icon: 'bell',
            title: { es: 'Administración de citas', en: 'Appointment admin' },
            description: {
              es: 'Alta, edición y consulta de eventos en pantalla.',
              en: 'Create, edit, and browse events on screen.'
            }
          },
          {
            id: 'asf-users',
            icon: 'users',
            title: { es: 'Flujo de usuario', en: 'User flow' },
            description: {
              es: 'Navegación enfocada en tareas diarias de la agenda.',
              en: 'Navigation focused on day-to-day scheduler tasks.'
            }
          }
        ],
        gallery: [
          {
            id: 'asf-cover',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg',
            title: { es: 'Vista de agenda', en: 'Scheduler view' },
            caption: {
              es: 'Referencia visual del front de la agenda.',
              en: 'Visual reference for the scheduler front end.'
            }
          }
        ]
      }
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
      sortOrder: 3,
      detail: {
        summary: {
          es: 'Proyecto final del curso Angular - The Complete Guide (Udemy / Academind), aplicando componentes, routing y RxJS.',
          en: 'Final project for Angular - The Complete Guide (Udemy / Academind), applying components, routing, and RxJS.'
        },
        role: {
          es: 'Estudiante / desarrollador frontend',
          en: 'Student / frontend developer'
        },
        duration: {
          es: 'Duración del curso',
          en: 'Course duration'
        },
        team: {
          es: 'Proyecto individual',
          en: 'Solo project'
        },
        year: '2020',
        client: {
          es: 'Udemy — Angular The Complete Guide',
          en: 'Udemy — Angular The Complete Guide'
        },
        body: [
          {
            es: 'Aplicación front construida como entrega práctica del curso de Angular: módulos, componentes, servicios y flujos reactivos con RxJS según el temario.',
            en: 'Front-end app built as the course practical deliverable: modules, components, services, and reactive flows with RxJS following the syllabus.'
          },
          {
            es: 'Reforzó fundamentos de Angular CLI, TypeScript tipado y patrones comunes de una SPA antes de llevarlos a proyectos laborales.',
            en: 'It reinforced Angular CLI fundamentals, typed TypeScript, and common SPA patterns before applying them in professional work.'
          }
        ],
        features: [
          {
            id: 'acf-angular',
            icon: 'code',
            title: { es: 'Angular + TypeScript', en: 'Angular + TypeScript' },
            description: {
              es: 'Estructura de app con componentes y tipado estricto.',
              en: 'App structure with components and strong typing.'
            }
          },
          {
            id: 'acf-rxjs',
            icon: 'api',
            title: { es: 'RxJS', en: 'RxJS' },
            description: {
              es: 'Observables y flujos asíncronos del curso.',
              en: 'Observables and async flows from the course.'
            }
          },
          {
            id: 'acf-ui',
            icon: 'users',
            title: { es: 'UI del caso de estudio', en: 'Case-study UI' },
            description: {
              es: 'Pantallas alineadas con el proyecto final del curso.',
              en: 'Screens aligned with the course final project.'
            }
          },
          {
            id: 'acf-shield',
            icon: 'shield',
            title: { es: 'Buenas prácticas del curso', en: 'Course best practices' },
            description: {
              es: 'Organización de módulos y servicios según la guía.',
              en: 'Module and service organization per the guide.'
            }
          }
        ],
        gallery: [
          {
            id: 'acf-cover',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_1280.jpg',
            title: { es: 'Proyecto del curso', en: 'Course project' },
            caption: {
              es: 'Imagen asociada al proyecto final de Angular.',
              en: 'Image associated with the Angular final project.'
            }
          }
        ]
      }
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
      sortOrder: 4,
      detail: {
        summary: {
          es: 'App híbrida del curso Ionic (iOS, Android y web) con Angular y TypeScript.',
          en: 'Hybrid app from the Ionic course (iOS, Android, and web) with Angular and TypeScript.'
        },
        role: {
          es: 'Estudiante / desarrollador mobile',
          en: 'Student / mobile developer'
        },
        duration: {
          es: 'Duración del curso',
          en: 'Course duration'
        },
        team: {
          es: 'Proyecto individual',
          en: 'Solo project'
        },
        year: '2020',
        client: {
          es: 'Udemy — Ionic & Angular (Academind)',
          en: 'Udemy — Ionic & Angular (Academind)'
        },
        body: [
          {
            es: 'Proyecto final del curso de Ionic: aplicación multiplataforma sobre Angular, con componentes Ionic y flujos típicos de una app móvil/web.',
            en: 'Final project for the Ionic course: a cross-platform Angular-based app using Ionic components and typical mobile/web flows.'
          },
          {
            es: 'Permitió practicar Capacitor/cordova-style packaging mental model, navegación móvil y reutilización de conocimiento Angular en un stack híbrido.',
            en: 'It was a chance to practice hybrid app navigation and reuse Angular knowledge in a hybrid stack.'
          }
        ],
        features: [
          {
            id: 'icf-mobile',
            icon: 'mobile',
            title: { es: 'App híbrida', en: 'Hybrid app' },
            description: {
              es: 'Misma base para web, iOS y Android vía Ionic.',
              en: 'Same codebase for web, iOS, and Android via Ionic.'
            }
          },
          {
            id: 'icf-angular',
            icon: 'code',
            title: { es: 'Angular + Ionic', en: 'Angular + Ionic' },
            description: {
              es: 'Componentes y routing del ecosistema Ionic.',
              en: 'Components and routing from the Ionic ecosystem.'
            }
          },
          {
            id: 'icf-ui',
            icon: 'users',
            title: { es: 'UI móvil', en: 'Mobile UI' },
            description: {
              es: 'Pantallas orientadas a uso táctil y navegación app.',
              en: 'Screens oriented to touch use and app navigation.'
            }
          },
          {
            id: 'icf-api',
            icon: 'api',
            title: { es: 'Integraciones del curso', en: 'Course integrations' },
            description: {
              es: 'Servicios y patrones enseñados en el temario.',
              en: 'Services and patterns taught in the syllabus.'
            }
          }
        ],
        gallery: [
          {
            id: 'icf-cover',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg',
            title: { es: 'Proyecto Ionic', en: 'Ionic project' },
            caption: {
              es: 'Imagen representativa del proyecto final Ionic.',
              en: 'Representative image for the Ionic final project.'
            }
          }
        ]
      }
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
      sortOrder: 5,
      detail: {
        summary: {
          es: 'App Android nativa (Java) para check-in, desarrollada en la materia Introducción a la computación móvil.',
          en: 'Native Android (Java) check-in app built for the Introducción a la computación móvil course.'
        },
        role: {
          es: 'Desarrollador Android (equipo académico)',
          en: 'Android developer (academic team)'
        },
        duration: {
          es: '1 semestre',
          en: '1 semester'
        },
        team: {
          es: 'Equipo académico',
          en: 'Academic team'
        },
        year: '2018',
        client: {
          es: 'Introducción a la computación móvil',
          en: 'Introducción a la computación móvil'
        },
        body: [
          {
            es: 'CheckInNow es una aplicación Android en Java orientada a registrar check-ins, como entrega de la asignatura de computación móvil en la universidad.',
            en: 'CheckInNow is a Java Android app focused on recording check-ins, delivered for the university mobile computing course.'
          },
          {
            es: 'El trabajo en equipo permitió aplicar ciclo de vida de Activities, UI nativa y buenas prácticas básicas de apps móviles en un contexto académico.',
            en: 'Teamwork applied Activity lifecycle, native UI, and basic mobile app practices in an academic setting.'
          }
        ],
        features: [
          {
            id: 'cin-mobile',
            icon: 'mobile',
            title: { es: 'Android nativo', en: 'Native Android' },
            description: {
              es: 'Aplicación Java sobre Android Studio.',
              en: 'Java app built with Android Studio.'
            }
          },
          {
            id: 'cin-checkin',
            icon: 'bell',
            title: { es: 'Check-in', en: 'Check-in' },
            description: {
              es: 'Flujo principal de registro / llegada.',
              en: 'Primary check-in / arrival flow.'
            }
          },
          {
            id: 'cin-users',
            icon: 'users',
            title: { es: 'Trabajo en equipo', en: 'Teamwork' },
            description: {
              es: 'Desarrollo colaborativo del curso (repo IntroCompuMovil).',
              en: 'Collaborative course development (IntroCompuMovil repo).'
            }
          },
          {
            id: 'cin-code',
            icon: 'code',
            title: { es: 'Java', en: 'Java' },
            description: {
              es: 'Lógica y pantallas en Java para Android.',
              en: 'Logic and screens in Java for Android.'
            }
          }
        ],
        gallery: [
          {
            id: 'cin-cover',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg',
            title: { es: 'CheckInNow', en: 'CheckInNow' },
            caption: {
              es: 'Imagen representativa del proyecto móvil académico.',
              en: 'Representative image of the academic mobile project.'
            }
          }
        ]
      }
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
      sortOrder: 6,
      detail: {
        summary: {
          es: 'Sistema full stack (Django + Ionic/Angular) para la materia Ingeniería de Software.',
          en: 'Full-stack system (Django + Ionic/Angular) for the Software Engineering course.'
        },
        role: {
          es: 'Desarrollador full stack (equipo académico)',
          en: 'Full-stack developer (academic team)'
        },
        duration: {
          es: '1 semestre',
          en: '1 semester'
        },
        team: {
          es: 'Equipo académico',
          en: 'Academic team'
        },
        year: '2019',
        client: {
          es: 'Ingeniería de Software',
          en: 'Ingeniería de Software'
        },
        body: [
          {
            es: 'Synchronous integra un backend Django con un cliente Ionic/Angular, como proyecto de la asignatura de Ingeniería de Software: requisitos, diseño y entrega iterativa.',
            en: 'Synchronous integrates a Django backend with an Ionic/Angular client as a Software Engineering course project: requirements, design, and iterative delivery.'
          },
          {
            es: 'El alcance académico cubrió modelado, API/servicios y una interfaz híbrida, aplicando prácticas de proceso de software vistas en clase.',
            en: 'The academic scope covered modeling, API/services, and a hybrid UI, applying software process practices from the course.'
          }
        ],
        features: [
          {
            id: 'syn-database',
            icon: 'database',
            title: { es: 'Backend Django', en: 'Django backend' },
            description: {
              es: 'Modelos y servicios del lado servidor.',
              en: 'Server-side models and services.'
            }
          },
          {
            id: 'syn-mobile',
            icon: 'mobile',
            title: { es: 'Cliente Ionic', en: 'Ionic client' },
            description: {
              es: 'App híbrida sobre Angular para el front.',
              en: 'Hybrid Angular-based app for the front end.'
            }
          },
          {
            id: 'syn-users',
            icon: 'users',
            title: { es: 'Proceso en equipo', en: 'Team process' },
            description: {
              es: 'Trabajo colaborativo según la materia de IS.',
              en: 'Collaborative work per the SE course.'
            }
          },
          {
            id: 'syn-api',
            icon: 'api',
            title: { es: 'Integración full stack', en: 'Full-stack integration' },
            description: {
              es: 'Conexión entre API Django y UI Ionic/Angular.',
              en: 'Connection between Django API and Ionic/Angular UI.'
            }
          }
        ],
        gallery: [
          {
            id: 'syn-cover',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/03/20/03/06/desk-2158142_1280.jpg',
            title: { es: 'Synchronous', en: 'Synchronous' },
            caption: {
              es: 'Imagen representativa del proyecto de Ingeniería de Software.',
              en: 'Representative image of the Software Engineering project.'
            }
          }
        ]
      }
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
