# Cloudflare Pages

Add the `wrangler.toml`:

```toml
# wrangler.toml
name = "my-project-name"
compatibility_date = "2024-04-01"
compatibility_flags = [ "nodejs_compat" ]
pages_build_output_dir = "./dist"
```

Setup the `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import honox from 'honox/vite'
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig({
  plugins: [honox(), pages()],
})
```

Build command (including a client):

```txt
vite build --mode client && vite build
```

Deploy with the following commands after the build. Ensure you have [Wrangler](https://developers.cloudflare.com/workers/wrangler/) installed:

```txt
wrangler pages deploy
```
