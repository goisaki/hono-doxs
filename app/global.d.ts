import {} from 'hono'
import type { Meta } from './types'

declare module 'hono' {
	interface Env {
		// biome-ignore lint/complexity/noBannedTypes:
		Variables: {}
		// biome-ignore lint/complexity/noBannedTypes:
		Bindings: {}
	}
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType:
		(
			content: string | Promise<string>,
			meta?: Meta & {
				frontmatter?: Meta
			},
		): Response | Promise<Response>
	}
}
