### Trailing Slash

By default, trailing slashes are removed if the root file is an index file such as `index.tsx` or `index.mdx`.
However, if you set the `trailingSlash` option to `true` as the following, the trailing slash is not removed.

```ts
import { createApp } from 'honox/server'

const app = createApp({
  trailingSlash: true,
})
```

Like the followings:

- `trailingSlash` is `false` (default): `app/routes/path/index.mdx` => `/path`
- `trailingSlash` is `true`: `app/routes/path/index.mdx` => `/path/`
