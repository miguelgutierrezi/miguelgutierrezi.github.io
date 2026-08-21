# Sanity Studio — portfolio editorial

Edita `siteSettings`, `profile`, `project`, `experience`, `course` y `navigation` online. Angular consume el dataset por CDN (solo lectura) y cae al contenido local por colección si falta data.

## Setup rápido

1. Proyecto Sanity: `xm49cfca` (dataset `production`).
2. En esta carpeta:

```bash
cd studio
npm install
npm run dev
```

3. En el Studio, crea (slice 1 mínimo):
   - un documento **Site settings**
   - un documento **Profile**
   - uno o más **Project** (slug = id de ruta Angular, p. ej. `nodejs-scheduler-back`)

4. Slice 2 (opcional hasta el admin): **Experience**, **Course**, **Navigation** (1 singleton). Sin documentos → Angular usa el fallback local. Guía: [`seed/slice2-documents.md`](seed/slice2-documents.md).

5. Angular ya apunta a este proyecto en `environment.ts` / `.prod.ts`:

```ts
cms: {
  enabled: true,
  projectId: 'xm49cfca',
  dataset: 'production',
  apiVersion: '2025-01-01'
}
```

6. Confirma que el dataset es **público de lectura** (Sanity CDN). No pongas tokens de escritura en el cliente.

7. **CORS (obligatorio para el browser):** en [sanity.io/manage](https://www.sanity.io/manage) → proyecto `xm49cfca` → **API** → **CORS origins**, añade al menos:
   - `http://localhost:4200` (dev)
   - tu host Firebase / GitHub Pages (prod)
   - Allow credentials: **no** hace falta para lectura CDN anónima  

   Sin esto el GET desde Angular responde **403 CORS Origin not allowed** y el adapter cae al contenido local (verás los 6 proyectos locales).

## Seed desde el contenido local

Usa el contenido tipado en `src/app/content/portfolio.content.ts` como referencia. Campos clave:

| Angular | Sanity |
| --- | --- |
| `project.id` / `experience.id` / `course.id` | `slug.current` |
| `LocalizedString` | objeto `{ es, en }` |
| `detail.features[].icon` | `shield \| bell \| terminal \| users \| api \| mobile \| code \| database` |

- Slice 1: site / profile / projects  
- Slice 2: experience / courses / navigation (merge por colección; vacío → local)  
- `ui` chrome labels: **siguen locales**

## Seguridad

- Nunca commits de tokens con permiso de escritura.
- Login del Studio = editorial; el sitio público solo hace GET a la API/CDN.
