# Nested Layouts

If you are using the JSX Renderer middleware, you can nest layouts using ` <Layout />`.

```tsx
// app/routes/posts/_renderer.tsx

import { jsxRenderer } from 'hono/jsx-renderer'

export default jsxRenderer(({ children, Layout }) => {
  return (
    <Layout>
      <nav>Posts Menu</nav>
      <div>{children}</div>
    </Layout>
  )
})
```

#### Passing Additional Props in Nested Layouts

Props passed to nested renderers do not automatically propagate to the parent renderers. To ensure that the parent layouts receive the necessary props, you should explicitly pass them from the nested <Layout /> component. Here's how you can achieve that:

Let's start with our route handler:

```tsx
// app/routes/nested/index.tsx
export default createRoute((c) => {
  return c.render(<div>Content</div>, { title: 'Dashboard' })
})
```

Now, let's take a look at our nested renderer:

```tsx
// app/routes/nested/_renderer.tsx
export default jsxRenderer(({ children, Layout, title }) => {
  return (
    <Layout title={title}>
      {/* Pass the title prop to the parent renderer */}
      <main>{children}</main>
    </Layout>
  )
})
```

In this setup, all the props sent to the nested renderer's <Layout /> are consumed by the parent renderer:

```tsx
// app/routes/_renderer.tsx
export default jsxRenderer(({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title> {/* Use the title prop here */}
      </head>
      <body>
        {children} {/* Insert the Layout's children here */}
      </body>
    </html>
  )
})
```
