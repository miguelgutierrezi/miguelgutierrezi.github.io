# Sanity Studio — portfolio editorial

Edita `siteSettings`, `profile` y `project` online. Angular consume el dataset por CDN (solo lectura) y cae al contenido local si falla.

## Setup rápido

1. Proyecto Sanity: `xm49cfca` (dataset `production`).
2. En esta carpeta:

```bash
cd studio
npm install
npm run dev
```

3. En el Studio, crea:
   - un documento **Site settings**
   - un documento **Profile**
   - uno o más **Project** (slug = id de ruta Angular, p. ej. `nodejs-scheduler-back`)

4. Angular ya apunta a este proyecto en `environment.ts` / `.prod.ts`:

```ts
cms: {
  enabled: true,
  projectId: 'xm49cfca',
  dataset: 'production',
  apiVersion: '2025-01-01'
}
```

5. Confirma que el dataset es **público de lectura** (Sanity CDN). No pongas tokens de escritura en el cliente.

## Seed desde el contenido local

Usa el contenido tipado en `src/app/content/portfolio.content.ts` como referencia. Campos clave:

| Angular | Sanity |
| --- | --- |
| `project.id` | `slug.current` |
| `LocalizedString` | objeto `{ es, en }` |
| `detail.features[].icon` | `shield \| bell \| terminal \| users \| api \| mobile \| code \| database` |

Slice 1: solo site / profile / projects. Experience, courses, navigation y `ui` siguen saliendo del fallback local.

## Seguridad

- Nunca commits de tokens con permiso de escritura.
- Login del Studio = editorial; el sitio público solo hace GET a la API/CDN.
