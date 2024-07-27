## BYOR - Bring Your Own Renderer

You can bring your own renderer using a UI library like React, Preact, Solid, or others.

**Note**: We may not provide support for the renderer you bring.

### React case

You can define a renderer using [`@hono/react-renderer`](https://github.com/honojs/middleware/tree/main/packages/react-renderer). Install the modules first.

```txt
npm i @hono/react-renderer react react-dom hono
npm i -D @types/react @types/react-dom
```

Define the Props that the renderer will receive in `global.d.ts`.

```ts
// global.d.ts
import '@hono/react-renderer'

declare module '@hono/react-renderer' {
  interface Props {
    title?: string
  }
}
```

The following is an example of `app/routes/_renderer.tsx`.

```tsx
// app/routes/_renderer.tsx
import { reactRenderer } from '@hono/react-renderer'

export default reactRenderer(({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {import.meta.env.PROD ? (
          <script type='module' src='/static/client.js'></script>
        ) : (
          <script type='module' src='/app/client.ts'></script>
        )}
        {title ? <title>{title}</title> : ''}
      </head>
      <body>{children}</body>
    </html>
  )
})
```

The `app/client.ts` will be like this.

```ts
// app/client.ts
import { createClient } from 'honox/client'

createClient({
  hydrate: async (elem, root) => {
    const { hydrateRoot } = await import('react-dom/client')
    hydrateRoot(root, elem)
  },
  createElement: async (type: any, props: any) => {
    const { createElement } = await import('react')
    return createElement(type, props)
  },
})
```
