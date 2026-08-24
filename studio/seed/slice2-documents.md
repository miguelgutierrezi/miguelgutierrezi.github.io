# Sanity slice 2 — experience / courses / navigation

**Status:** seeded in `production` (2026-08-24) from `src/app/content/portfolio.content.ts`.

```bash
cd studio
npm run seed:dry
npm run seed
```

Default skips docs whose slug (or singleton type) already exists. `ui` chrome labels remain **local** in Angular.

## Documentos

| Tipo | Cantidad | Notas |
| --- | --- | --- |
| `experience` | 6 | slug = id Angular; `_id` = `experience-{slug}` |
| `course` | 11 | slug = id Angular; `_id` = `course-{slug}` |
| `navigation` | **1** singleton `_id` `navigation` | `items[]` with `id` ∈ `about\|projects\|experience\|courses` + `label` ES/EN |

`administradores-diaz` had an empty local `imageUrl`; seed used a Pixabay placeholder so the CDN mapper accepts the doc.

## Experience IDs

`globant` · `banco-de-bogota` · `asesoftware` · `administradores-diaz` · `javeriana-monitor` · `saludarte`

## Course IDs

`platzi-react-practical` · `platzi-react` · `udemy-java-8` · `platzi-git` · `ef-set` · `aws-technical-essentials` · `devops-master` · `ionic-academind` · `angular-complete-guide` · `scrum-fundamentals` · `bizagi-process-modeling`

## Merge en Angular

- Si hay ≥1 experience/course/nav item **válido** remoto → reemplaza esa colección.
- Si la colección remota está vacía o no mapea → se mantiene el contenido local.
- `ui` sigue **solo local**.
