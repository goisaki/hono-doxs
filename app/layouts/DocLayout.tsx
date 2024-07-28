import { Child } from 'hono/jsx'
import { Link, Script } from 'honox/server'

type DocProps = {
  title: string
  pageTitle?: string
  children: Child
}

export function DocLayout({ title, pageTitle, children }: DocProps) {
  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>
        <link rel='icon' href='/favicon.ico' />
        <Link href='/app/styles/markdown.css' rel='stylesheet' />
        <Link href='/app/styles/sidebar.css' rel='stylesheet' />
        <Link href='/app/styles/tailwind.css' rel='stylesheet' />
        <Script src='/app/client.ts' async />
      </head>
      <body>
        <div class='flex min-h-screen flex-col'>
          <header class='sidebar sticky top-0 z-10 w-full border-b bg-white'>
            <div class='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'></div>
          </header>
          <div class='markdown antialiased'>{children}</div>
        </div>
      </body>
    </html>
  )
}
