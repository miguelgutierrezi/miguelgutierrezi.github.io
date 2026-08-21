# Sanity slice 1 — contenido completo (desde `portfolio.content.ts`)

Crea **8 documentos** en este orden. Publica cada uno.

Campos `es` / `en` van en los objetos localized del Studio.

---

## 1) Site settings (1 documento)

| Campo | Valor |
| --- | --- |
| name | `Miguel Ángel Gutiérrez Ibagué` |
| brandHandle | `miguel.gutierrez` |
| emails | `migueangel97@hotmail.com` · `miguelangelgi.97@gmail.com` |

### socialLinks

1. id `github` · label `GitHub` · url `https://github.com/miguelgutierrezi` · iconUrl _(vacío)_
2. id `linkedin` · label `LinkedIn` · url `https://www.linkedin.com/in/miguelgutierrezi/` · iconUrl _(vacío)_
3. id `phone` · label `Phone` · url `tel:+573108108579` · iconUrl _(vacío)_
4. id `whatsapp` · label `WhatsApp` · url `https://wa.me/573108108579` · iconUrl _(vacío)_

---

## 2) Profile (1 documento)

| Campo | ES | EN |
| --- | --- | --- |
| imageUrl | `assets/Fotografia_Miguel_Gutierrez.jpg` | (mismo) |
| role | `INGENIERO DE SISTEMAS` | `SYSTEMS ENGINEER` |
| pitch | `Construyendo aplicaciones web y móviles full stack, integraciones en la nube y experiencias digitales con metodologías ágiles.` | `Building full-stack web and mobile applications, cloud integrations, and digital experiences with agile methodologies.` |

### paragraphs (2)

1. ES: `Ingeniero de sistemas con experiencia en el desarrollo de proyectos con metodología ágil, enfocado en el desarrollo full stack de aplicaciones web y móviles. Comprometido con entregas de calidad, colaboración con el cliente y arquitecturas mantenibles.`  
   EN: `Systems engineer with experience delivering projects with agile methodologies, focused on full-stack web and mobile development. Committed to quality delivery, client collaboration, and maintainable architectures.`

2. ES: `Tengo conocimiento en el desarrollo de aplicaciones web haciendo uso de Angular CLI como framework para Frontend, y backend de .NET Core y Spring Boot. Cuento con experiencia en el desarrollo de aplicaciones híbridas con Ionic Framework y Flutter. Además tengo experiencia manejando bases de datos relacionales como SQL Server y Oracle, y bases de datos no relacionales como Firebase y MongoDB.`  
   EN: `I have knowledge in the development of web applications using Angular CLI as a framework for Frontend, and backend using .NET Core and Spring Boot. I have experience in developing hybrid applications using Ionic Framework and Flutter. Also, I have experience managing relational databases like SQL Server and Oracle, and non-relational databases like Firebase and MongoDB.`

### focusAreas

ES/EN (iguales): `Full Stack` · `Angular` · `Spring Boot` · `.NET` · `Cloud & CI/CD` · `Mobile`

---

## 3) Project — `nodejs-scheduler-back`

- **slug:** `nodejs-scheduler-back`
- **title:** `NodeJS Scheduler Back`
- **description ES:** `Esta API fue desarrollada para la administración de una aplicación de agenda simple`
- **description EN:** `This API was developed for the administration of a simple scheduler app`
- **technologies:** `Node.js` · `JavaScript` · `API`
- **technologyIconUrls:**
  - `https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png`
  - `https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png`
- **repositoryUrl:** `https://github.com/miguelgutierrezi/NodeJS-Scheduler-Back`
- **demoUrl:** _(vacío)_
- **imageUrl:** `https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg`
- **featured:** `true`
- **sortOrder:** `1`

### detail

| Campo | ES | EN |
| --- | --- | --- |
| summary | API REST en Node.js para gestionar eventos, usuarios y operaciones de una agenda personal. | Node.js REST API to manage events, users, and operations for a personal scheduler. |
| role | Desarrollador backend | Backend developer |
| duration | ~3 meses | ~3 months |
| team | Proyecto individual | Solo project |
| year | `2019` | |
| client | Proyecto personal | Personal project |

**body**

1. ES: `Backend de una aplicación de agenda simple: endpoints para crear, listar, actualizar y eliminar eventos, con una capa de API pensada para consumirse desde un front Angular.`  
   EN: `Backend for a simple scheduler app: endpoints to create, list, update, and delete events, with an API layer designed to be consumed by an Angular front end.`

2. ES: `El objetivo fue practicar diseño de API REST, manejo de rutas y separación clara entre lógica de negocio y capa HTTP en Node.js y JavaScript.`  
   EN: `The goal was to practice REST API design, routing, and a clear separation between business logic and the HTTP layer in Node.js and JavaScript.`

**features**

| id | icon | title ES / EN | description ES / EN |
| --- | --- | --- | --- |
| nsb-api | api | API REST / REST API | Endpoints CRUD para la administración de la agenda. / CRUD endpoints for scheduler administration. |
| nsb-events | bell | Gestión de eventos / Event management | Creación y actualización de citas y recordatorios. / Create and update appointments and reminders. |
| nsb-code | code | Node.js / JavaScript | Servidor HTTP ligero y modular para el backend. / Lightweight, modular HTTP server for the backend. |
| nsb-terminal | terminal | Integración con el front / Front-end integration | Contrato de API listo para el cliente Angular Scheduler. / API contract ready for the Angular Scheduler client. |

**gallery**

- id `nsb-cover`
- imageUrl `https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg`
- title ES `Agenda / timetable` · EN `Schedule / timetable`
- caption ES `Imagen representativa del dominio de la agenda.` · EN `Representative image of the scheduler domain.`

---

## 4) Project — `angular-scheduler-front`

- **slug:** `angular-scheduler-front`
- **title:** `Angular Scheduler Front`
- **description ES:** `Este front fue desarrollado para la administración de una aplicación de agenda simple`
- **description EN:** `This front was developed for the administration of a simple scheduler app`
- **technologies:** `Angular` · `TypeScript` · `HTML` · `CSS`
- **technologyIconUrls:**
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png`
  - `https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png`
  - `https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png`
- **repositoryUrl:** `https://github.com/miguelgutierrezi/Angular-Scheduler-Front`
- **imageUrl:** `https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg`
- **featured:** `true`
- **sortOrder:** `2`

### detail

| Campo | ES | EN |
| --- | --- | --- |
| summary | Cliente Angular para administrar eventos de una agenda, consumiendo la API Node.js asociada. | Angular client to manage scheduler events, consuming the related Node.js API. |
| role | Desarrollador frontend | Frontend developer |
| duration | ~3 meses | ~3 months |
| team | Proyecto individual | Solo project |
| year | `2019` | |
| client | Proyecto personal | Personal project |

**body**

1. ES: `Interfaz web en Angular y TypeScript para listar y gestionar citas de una agenda simple, conectada al backend NodeJS Scheduler.`  
   EN: `Web UI in Angular and TypeScript to list and manage appointments for a simple scheduler, connected to the NodeJS Scheduler backend.`

2. ES: `Sirvió para consolidar componentes, formularios, servicios HTTP y estilos HTML/CSS en un flujo full stack con el repositorio hermano de la API.`  
   EN: `It helped consolidate components, forms, HTTP services, and HTML/CSS styling in a full-stack flow with the sibling API repository.`

**features**

| id | icon | title ES / EN | description ES / EN |
| --- | --- | --- | --- |
| asf-ui | code | UI Angular / Angular UI | Vistas tipadas en TypeScript para la agenda. / Typed TypeScript views for the scheduler. |
| asf-api | api | Consumo de API / API consumption | Servicios HTTP hacia el backend Node.js. / HTTP services against the Node.js backend. |
| asf-events | bell | Administración de citas / Appointment admin | Alta, edición y consulta de eventos en pantalla. / Create, edit, and browse events on screen. |
| asf-users | users | Flujo de usuario / User flow | Navegación enfocada en tareas diarias de la agenda. / Navigation focused on day-to-day scheduler tasks. |

**gallery**

- id `asf-cover`
- imageUrl `https://cdn.pixabay.com/photo/2018/03/13/11/18/timetable-3222252_1280.jpg`
- title ES `Vista de agenda` · EN `Scheduler view`
- caption ES `Referencia visual del front de la agenda.` · EN `Visual reference for the scheduler front end.`

---

## 5) Project — `angular-course-final-project`

- **slug:** `angular-course-final-project`
- **title:** `Angular Course Final Project`
- **description ES:** `Este front fue desarrollado para el curso de Angular - The Complete Guide de Udemy`
- **description EN:** `This front was developed for the course Angular - The Complete Guide de Udemy`
- **technologies:** `Angular` · `TypeScript` · `RxJS`
- **technologyIconUrls:** (mismos logos Angular/JS/TS/HTML/CSS que arriba)
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png`
  - `https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png`
  - `https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png`
- **repositoryUrl:** `https://github.com/miguelgutierrezi/Angular-Course-Final-Project`
- **imageUrl:** `https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_1280.jpg`
- **featured:** `false`
- **sortOrder:** `3`

### detail

| Campo | ES | EN |
| --- | --- | --- |
| summary | Proyecto final del curso Angular - The Complete Guide (Udemy / Academind), aplicando componentes, routing y RxJS. | Final project for Angular - The Complete Guide (Udemy / Academind), applying components, routing, and RxJS. |
| role | Estudiante / desarrollador frontend | Student / frontend developer |
| duration | Duración del curso | Course duration |
| team | Proyecto individual | Solo project |
| year | `2020` | |
| client | Udemy — Angular The Complete Guide | Udemy — Angular The Complete Guide |

**body**

1. ES: `Aplicación front construida como entrega práctica del curso de Angular: módulos, componentes, servicios y flujos reactivos con RxJS según el temario.`  
   EN: `Front-end app built as the course practical deliverable: modules, components, services, and reactive flows with RxJS following the syllabus.`

2. ES: `Reforzó fundamentos de Angular CLI, TypeScript tipado y patrones comunes de una SPA antes de llevarlos a proyectos laborales.`  
   EN: `It reinforced Angular CLI fundamentals, typed TypeScript, and common SPA patterns before applying them in professional work.`

**features**

| id | icon | title ES / EN | description ES / EN |
| --- | --- | --- | --- |
| acf-angular | code | Angular + TypeScript | Estructura de app con componentes y tipado estricto. / App structure with components and strong typing. |
| acf-rxjs | api | RxJS | Observables y flujos asíncronos del curso. / Observables and async flows from the course. |
| acf-ui | users | UI del caso de estudio / Case-study UI | Pantallas alineadas con el proyecto final del curso. / Screens aligned with the course final project. |
| acf-shield | shield | Buenas prácticas del curso / Course best practices | Organización de módulos y servicios según la guía. / Module and service organization per the guide. |

**gallery**

- id `acf-cover`
- imageUrl `https://cdn.pixabay.com/photo/2016/05/06/12/25/cook-1375797_1280.jpg`
- title ES `Proyecto del curso` · EN `Course project`
- caption ES `Imagen asociada al proyecto final de Angular.` · EN `Image associated with the Angular final project.`

---

## 6) Project — `ionic-course-final-project`

- **slug:** `ionic-course-final-project`
- **title:** `Ionic Course Final Project`
- **description ES:** `Este front fue desarrollado para el curso de Ionic - Build, iOS, android & web apps with Ionic and Angular`
- **description EN:** `This front was developed for the course Ionic - Build, iOS, android & web apps with Ionic and Angular`
- **technologies:** `Ionic` · `Angular` · `TypeScript`
- **technologyIconUrls:**
  - `https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png`
  - `https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png`
  - `https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png`
- **repositoryUrl:** `https://github.com/miguelgutierrezi/Ionic-Course-Final-Project`
- **imageUrl:** `https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg`
- **featured:** `false`
- **sortOrder:** `4`

### detail

| Campo | ES | EN |
| --- | --- | --- |
| summary | App híbrida del curso Ionic (iOS, Android y web) con Angular y TypeScript. | Hybrid app from the Ionic course (iOS, Android, and web) with Angular and TypeScript. |
| role | Estudiante / desarrollador mobile | Student / mobile developer |
| duration | Duración del curso | Course duration |
| team | Proyecto individual | Solo project |
| year | `2020` | |
| client | Udemy — Ionic & Angular (Academind) | Udemy — Ionic & Angular (Academind) |

**body**

1. ES: `Proyecto final del curso de Ionic: aplicación multiplataforma sobre Angular, con componentes Ionic y flujos típicos de una app móvil/web.`  
   EN: `Final project for the Ionic course: a cross-platform Angular-based app using Ionic components and typical mobile/web flows.`

2. ES: `Permitió practicar Capacitor/cordova-style packaging mental model, navegación móvil y reutilización de conocimiento Angular en un stack híbrido.`  
   EN: `It was a chance to practice hybrid app navigation and reuse Angular knowledge in a hybrid stack.`

**features**

| id | icon | title ES / EN | description ES / EN |
| --- | --- | --- | --- |
| icf-mobile | mobile | App híbrida / Hybrid app | Misma base para web, iOS y Android vía Ionic. / Same codebase for web, iOS, and Android via Ionic. |
| icf-angular | code | Angular + Ionic | Componentes y routing del ecosistema Ionic. / Components and routing from the Ionic ecosystem. |
| icf-ui | users | UI móvil / Mobile UI | Pantallas orientadas a uso táctil y navegación app. / Screens oriented to touch use and app navigation. |
| icf-api | api | Integraciones del curso / Course integrations | Servicios y patrones enseñados en el temario. / Services and patterns taught in the syllabus. |

**gallery**

- id `icf-cover`
- imageUrl `https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg`
- title ES `Proyecto Ionic` · EN `Ionic project`
- caption ES `Imagen representativa del proyecto final Ionic.` · EN `Representative image for the Ionic final project.`

---

## 7) Project — `check-in-now`

- **slug:** `check-in-now`
- **title:** `CheckInNow`
- **description ES:** `Proyecto realizado para la materia de "Introducción a la computación móvil"`
- **description EN:** `Project developed for "Introducción a la computación móvil" subject`
- **technologies:** `Android` · `Java`
- **technologyIconUrls:**
  - `https://logonoid.com/images/android-studio-logo.png`
  - `https://qph.fs.quoracdn.net/main-qimg-c43424186b9c089b9aa1d64c7f1989c1`
- **repositoryUrl:** `https://github.com/IntroCompuMovil18302/CheckInNow`
- **imageUrl:** `https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg`
- **featured:** `false`
- **sortOrder:** `5`

### detail

| Campo | ES | EN |
| --- | --- | --- |
| summary | App Android nativa (Java) para check-in, desarrollada en la materia Introducción a la computación móvil. | Native Android (Java) check-in app built for the Introducción a la computación móvil course. |
| role | Desarrollador Android (equipo académico) | Android developer (academic team) |
| duration | 1 semestre | 1 semester |
| team | Equipo académico | Academic team |
| year | `2018` | |
| client | Introducción a la computación móvil | Introducción a la computación móvil |

**body**

1. ES: `CheckInNow es una aplicación Android en Java orientada a registrar check-ins, como entrega de la asignatura de computación móvil en la universidad.`  
   EN: `CheckInNow is a Java Android app focused on recording check-ins, delivered for the university mobile computing course.`

2. ES: `El trabajo en equipo permitió aplicar ciclo de vida de Activities, UI nativa y buenas prácticas básicas de apps móviles en un contexto académico.`  
   EN: `Teamwork applied Activity lifecycle, native UI, and basic mobile app practices in an academic setting.`

**features**

| id | icon | title ES / EN | description ES / EN |
| --- | --- | --- | --- |
| cin-mobile | mobile | Android nativo / Native Android | Aplicación Java sobre Android Studio. / Java app built with Android Studio. |
| cin-checkin | bell | Check-in | Flujo principal de registro / llegada. / Primary check-in / arrival flow. |
| cin-users | users | Trabajo en equipo / Teamwork | Desarrollo colaborativo del curso (repo IntroCompuMovil). / Collaborative course development (IntroCompuMovil repo). |
| cin-code | code | Java | Lógica y pantallas en Java para Android. / Logic and screens in Java for Android. |

**gallery**

- id `cin-cover`
- imageUrl `https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_1280.jpg`
- title ES/EN `CheckInNow`
- caption ES `Imagen representativa del proyecto móvil académico.` · EN `Representative image of the academic mobile project.`

---

## 8) Project — `synchronous`

- **slug:** `synchronous`
- **title:** `Synchronous`
- **description ES:** `Proyecto realizado para la materia de "Ingeniería de Software"`
- **description EN:** `Project developed for the "Ingeniería de Software" subject`
- **technologies:** `Django` · `Ionic` · `Angular`
- **technologyIconUrls:**
  - `https://splendornet.com/wp-content/uploads/2019/01/django.png`
  - `https://hackr.io/tutorials/learn-ionic/logo/logo-ionic?ver=1587978084`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png`
  - `https://logosvector.net/wp-content/uploads/2015/07/JavaScript_logo.png`
  - `https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png`
  - `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png`
- **repositoryUrl:** `https://github.com/miguelgutierrezi/Synchronous`
- **imageUrl:** `https://cdn.pixabay.com/photo/2017/03/20/03/06/desk-2158142_1280.jpg`
- **featured:** `false`
- **sortOrder:** `6`

### detail

| Campo | ES | EN |
| --- | --- | --- |
| summary | Sistema full stack (Django + Ionic/Angular) para la materia Ingeniería de Software. | Full-stack system (Django + Ionic/Angular) for the Software Engineering course. |
| role | Desarrollador full stack (equipo académico) | Full-stack developer (academic team) |
| duration | 1 semestre | 1 semester |
| team | Equipo académico | Academic team |
| year | `2019` | |
| client | Ingeniería de Software | Ingeniería de Software |

**body**

1. ES: `Synchronous integra un backend Django con un cliente Ionic/Angular, como proyecto de la asignatura de Ingeniería de Software: requisitos, diseño y entrega iterativa.`  
   EN: `Synchronous integrates a Django backend with an Ionic/Angular client as a Software Engineering course project: requirements, design, and iterative delivery.`

2. ES: `El alcance académico cubrió modelado, API/servicios y una interfaz híbrida, aplicando prácticas de proceso de software vistas en clase.`  
   EN: `The academic scope covered modeling, API/services, and a hybrid UI, applying software process practices from the course.`

**features**

| id | icon | title ES / EN | description ES / EN |
| --- | --- | --- | --- |
| syn-database | database | Backend Django / Django backend | Modelos y servicios del lado servidor. / Server-side models and services. |
| syn-mobile | mobile | Cliente Ionic / Ionic client | App híbrida sobre Angular para el front. / Hybrid Angular-based app for the front end. |
| syn-users | users | Proceso en equipo / Team process | Trabajo colaborativo según la materia de IS. / Collaborative work per the SE course. |
| syn-api | api | Integración full stack / Full-stack integration | Conexión entre API Django y UI Ionic/Angular. / Connection between Django API and Ionic/Angular UI. |

**gallery**

- id `syn-cover`
- imageUrl `https://cdn.pixabay.com/photo/2017/03/20/03/06/desk-2158142_1280.jpg`
- title ES/EN `Synchronous`
- caption ES `Imagen representativa del proyecto de Ingeniería de Software.` · EN `Representative image of the Software Engineering project.`

---

## Checklist

- [ ] Site settings
- [ ] Profile
- [ ] Project `nodejs-scheduler-back`
- [ ] Project `angular-scheduler-front`
- [ ] Project `angular-course-final-project`
- [ ] Project `ionic-course-final-project`
- [ ] Project `check-in-now`
- [ ] Project `synchronous`
- [ ] Todos **Published**
- [ ] Recargar `npm start` y verificar home + `/projects/:id`
