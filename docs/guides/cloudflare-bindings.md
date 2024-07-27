### Cloudflare Bindings

If you want to use Cloudflare's Bindings in your development environment, create `wrangler.toml` and configure it properly.

```toml
name = "my-project-name"
compatibility_date = "2024-04-01"
compatibility_flags = [ "nodejs_compat" ]
pages_build_output_dir = "./dist"

# [vars]
# MY_VARIABLE = "production_value"

# [[kv_namespaces]]
# binding = "MY_KV_NAMESPACE"
# id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

In `vite.config.ts`, use the Cloudflare Adapter in `@hono/vite-dev-server`.

```ts
import honox from 'honox/vite'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    honox({
      devServer: {
        adapter,
      },
    }),
  ],
})
```
