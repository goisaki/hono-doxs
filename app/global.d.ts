import {} from 'hono'
import type { ContextRendererProps, Meta } from './types'

declare module 'hono' {
	interface Env {
		// biome-ignore lint/complexity/noBannedTypes:
		Variables: {}
		// biome-ignore lint/complexity/noBannedTypes:
		Bindings: {}
	}
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType:
		(...props: ContextRendererProps): Response | Promise<Response>
	}
}
