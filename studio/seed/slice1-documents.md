# Sanity slice 1 — contenido completo (desde `portfolio.content.ts`)

**Status:** seeded in `production` (2026-08-24). Re-run only for missing docs:

```bash
cd studio
npm run seed:dry   # preview
npm run seed       # create missing (skips existing slugs / singletons)
```

`--replace` overwrites matching docs from local content (do not use if you have editorial edits you want to keep).

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

## Projects (6)

Stable id = `slug.current` (ruta Angular `/projects/:id`). Seed `_id` = `project-{slug}` except existing UUID docs.

| slug | title | sortOrder |
| --- | --- | --- |
| `nodejs-scheduler-back` | NodeJS Scheduler Back | 1 |
| `angular-scheduler-front` | Angular Scheduler Front | 2 |
| `angular-course-final-project` | Angular Course Final Project | 3 |
| `ionic-course-final-project` | Ionic Course Final Project | 4 |
| `check-in-now` | CheckInNow | 5 |
| `synchronous` | Synchronous | 6 |

Full field copy lives in `src/app/content/portfolio.content.ts` (source of truth for the seed script).

---

## Checklist

- [x] Site settings
- [x] Profile
- [x] Project `nodejs-scheduler-back` (pre-existing; seed skipped to keep editorial title)
- [x] Project `angular-scheduler-front`
- [x] Project `angular-course-final-project`
- [x] Project `ionic-course-final-project`
- [x] Project `check-in-now`
- [x] Project `synchronous`
- [x] Published (`production` dataset)
- [ ] Recargar el CV y verificar home + `/projects/:id` (CDN cache ~a few seconds)
