# HonoX

**HonoX** is a simple and fast meta-framework for creating full-stack websites or Web APIs - (formerly _[Sonik](https://github.com/sonikjs/sonik)_). It stands on the shoulders of giants; built on [Hono](https://hono.dev/), [Vite](https://vitejs.dev/), and UI libraries.

**Note**: _HonoX is currently in the "alpha stage". Breaking changes are introduced without following semantic versioning._

## Features

- **File-based routing** - You can create a large application like Next.js.
- **Fast SSR** - Rendering is ultra-fast thanks to Hono.
- **BYOR** - You can bring your own renderer, not only one using hono/jsx.
- **Islands hydration** - If you want interactions, create an island. JavaScript is hydrated only for it.
- **Middleware** - It works as Hono, so you can use a lot of Hono's middleware.

## Installing

You can install the `honox` package from the npm.

```txt
npm install hono honox
```

## Starter template

If you are starting a new HonoX project, use the `hono-create` command. Run the following and choose `x-basic`.

```txt
npm create hono@latest
```

## Examples

- https://github.com/yusukebe/honox-examples

## Related projects

- [Hono](https://hono.dev/)
- [Vite](https://vitejs.dev/)

## Authors

- Yusuke Wada <https://github.com/yusukebe>

## License

MIT
