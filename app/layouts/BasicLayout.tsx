import type { Child } from 'hono/jsx'
import { Link, Script } from 'honox/server'
import { PartialSiteConfig, SiteConfig } from '~/global'
import { defu } from 'defu'
import { siteConfig } from 'siteConfig'
import calSansURL1 from '/webfonts/CalSans-SemiBold.woff2?url'
import calSansURL2 from '/webfonts/CalSans-SemiBold.woff?url'
import calSansURL3 from '/webfonts/CalSans-SemiBold.ttf?url'

export type BasicProps = {
  config: PartialSiteConfig
  children: Child
}

export function BasicLayout({ config, children }: BasicProps) {
  const { title, pageTitle, links, scripts } = defu(config, siteConfig) as SiteConfig
  return (
    <html lang='en'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{pageTitle ? `${pageTitle} - ${title}` : title}</title>
        <link rel='icon' href='/favicon.ico' />
        {links.map((linkOptions) => (
          <Link {...linkOptions} />
        ))}
        {scripts.map((scriptOptions) => (
          <Script {...scriptOptions} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  )
}
