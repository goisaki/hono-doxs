import { SiteConfig } from '~/global'

export const siteConfig: SiteConfig = {
  title: 'HonoX',
  links: [
    {
      href: '/app/styles/tailwind.css',
      rel: 'stylesheet',
    },
  ],
  scripts: [
    {
      src: '/app/client.ts',
      async: true
    }
  ],
}
