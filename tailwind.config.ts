import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				heading: [
					'Cal Sans',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
				text: [
					'Inter Variable',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji',
				],
			},
		},
	},
	plugins: [],
} satisfies Config
