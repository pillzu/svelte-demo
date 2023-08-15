import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const loasd: PageLoad = async () => {
	// throw new Error('Yikes')
	throw error(404, {message: 'Yikes! '})
}
