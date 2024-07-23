import { Plugin } from 'vite'
import { pluginMdxRollup } from './pluginMdx'

export type SiteConfig = {
  title: string
}
export const pluginDoxs = (siteConfig: SiteConfig): Plugin[] => {
  return [pluginMdxRollup]
}
