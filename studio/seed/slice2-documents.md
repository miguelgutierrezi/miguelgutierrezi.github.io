# Sanity slice 2 — experience / courses / navigation

Schemas listos en Studio. **No hace falta seedear ahora**: Angular usa fallback local si el slice remoto está vacío o incompleto.

Cuando edites desde el admin (o Studio), crea documentos alineados con `src/app/content/portfolio.content.ts`.

## Documentos

| Tipo | Cantidad | Notas |
| --- | --- | --- |
| `experience` | N | slug = id Angular (`globant`, `banco-de-bogota`, …) |
| `course` | N | slug = id Angular (`platzi-react`, …) |
| `navigation` | **1** singleton | array `items` con `id` ∈ `about\|projects\|experience\|courses` + `label` ES/EN |

## Experience — campos

| Campo | Tipo |
| --- | --- |
| slug | Stable ID |
| company | string |
| role | localizedString |
| duration | localizedString |
| responsibilities | localizedStringList |
| imageUrl | string (`assets/…` o https) |
| sortOrder | number |

## Course — campos

| Campo | Tipo |
| --- | --- |
| slug | Stable ID |
| title | localizedString |
| institution | string |
| date | localizedString |
| imageUrl | string |
| credentialUrl | url (opcional) |
| sortOrder | number |

## Merge en Angular

- Si hay ≥1 experience/course/nav item **válido** remoto → reemplaza esa colección.
- Si la colección remota está vacía o no mapea → se mantiene el contenido local.
- `ui` sigue **solo local** (chrome labels); se migrará con el admin si hace falta.

## IDs de experiencia locales (referencia)

`globant` · `banco-de-bogota` · `asesoftware` · `administradores-diaz` · `javeriana-monitor` · `saludarte`

## IDs de cursos locales (referencia)

Ver `portfolio.content.ts` → `courses` (`platzi-react-practical`, `aws-technical-essentials`, …).
