import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
	// if (event.url.pathname.startsWith('/banana')) {
	// 	return new Response('banana')
	// }
	//
	// const session = event.cookies.get('session')
	// const user = await getUser(session)
	
	// const local = event.cookies.get('locale') ?? 'en'
	//
	// event.locals.locale = local
	//
	// return resolve(event, {
	// 	transformPageChunk: ({html}) => html.replace('%lang%', local)
	//
	// })
	//
	const route = event.url

	let start = performance.now()
	const response = await resolve(event)
	let end = performance.now()

	let responsetime = end - start

	if (responsetime > 2000) {
		console.log(`:( => ${route} took ${responsetime.toFixed(2)}`)
	}

	if (responsetime < 1000) {
		console.log(`:( => ${route} took ${responsetime.toFixed(2)}`)
	}
	return response
}
