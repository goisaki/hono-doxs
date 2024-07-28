# Using Tailwind CSS

Given that HonoX is Vite-centric, if you wish to utilize [Tailwind CSS](https://tailwindcss.com/), simply adhere to the official instructions.

Prepare `tailwind.config.js` and `postcss.config.js`:

```js
// tailwind.config.js
export default {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

Write `app/style.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import it in a renderer file. Using the `Link` component will refer to the correct CSS file path after it is built.

```tsx
// app/routes/_renderer.tsx
import { jsxRenderer } from 'hono/jsx-renderer'
import { Link } from 'honox/server'

export default jsxRenderer(({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Link href='/app/style.css' rel='stylesheet' />
      </head>
      <body>{children}</body>
    </html>
  )
})
```

Finally, add `vite.config.ts` configuration to output assets for the production.

```ts
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig({
  plugins: [
    honox({
      client: {
        input: ['/app/style.css'],
      },
    }),
    pages(),
  ],
})
```
