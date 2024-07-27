# SSG - Static Site Generation

Using Hono's SSG feature, you can generate static HTML for each route.

```ts
import { defineConfig } from 'vite'
import honox from 'honox/vite'
import ssg from '@hono/vite-ssg'

const entry = './app/server.ts'

export default defineConfig(() => {
  return {
    plugins: [honox(), ssg({ entry })],
  }
})
```

If you want to include client-side scripts and assets:

```ts
// vite.config.ts
import ssg from '@hono/vite-ssg'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

const entry = './app/server.ts'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [client()],
    }
  } else {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [honox(), ssg({ entry })],
    }
  }
})
```

Build command (including a client):

```txt
vite build --mode client && vite build
```

You can also deploy it to Cloudflare Pages.

```txt
wrangler pages deploy ./dist
```
