import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

export default createRoute((c) => {
	const name = c.req.query('name') ?? 'Hono'
	return c.render(
		<div class='bg-red-500'>
			<h1>Hello, {name}!</h1>
			<Counter />
		</div>,
		{
			title: 'Hoge',
		},
	)
})
