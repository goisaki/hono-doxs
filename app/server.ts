import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import { createApp } from 'honox/server'
import { mdxRenderer } from '../src/mdxRenderer'

const app = createApp()

const mdxFiles = import.meta.glob<() => string>('/docs/**/*.(md|mdx)', { import: 'default' })
Object.keys(mdxFiles).forEach(async (filePath) => {
  const subApp = new Hono()
  const path = filePath.replace(/(?:index)?\.(md|mdx)$/, '')
  const handlers = mdxRenderer(await mdxFiles[filePath]())
  subApp.get(...handlers)
  app.route(path, subApp)
  console.log(`Load ${path}`)
})

showRoutes(app)

export default app
