import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const { url, locals, request } = event;
	locals.pb = new PocketBase('http://127.0.0.1:8090');

	locals.pb.authStore.loadFromCookie(request.headers.get('cookie') || '');

	try {
		locals.pb.authStore.isValid && (await locals.pb.collection('users').authRefresh());
		locals.user = locals.pb.authStore.model;
	} catch (_) {
		locals.pb.authStore.clear();
		locals.user = undefined;
	}

	if (
		url.pathname.startsWith('/') &&
		!locals.user &&
		!['/login', '/register'].includes(url.pathname)
	) {
		console.log(url.pathname);

		redirect(303, '/login');
	}
	const response = await resolve(event);

	response.headers.append('set-cookie', locals.pb.authStore.exportToCookie());

	return response;
}
