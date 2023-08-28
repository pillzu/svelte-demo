import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
	// if (event.url.pathname.startsWith('/banana')) {
	// 	return new Response('banana')
	// }
	//
	// const session = event.cookies.get('session')
	// const user = await getUser(session)
	
	const local = event.cookies.get('locale') ?? 'en'

	event.locals.locale = local

	return resolve(event, {
		transformPageChunk: ({html}) => html.replace('%lang%', local)

	})

}
