import PocketBase from 'pocketbase';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { locals, request, url } = event;
	locals.pb = new PocketBase('http://127.0.0.1:8090');

	locals.pb.authStore.loadFromCookie(request.headers.get('cookie') || '');

	try {
		if (locals.pb.authStore.isValid) {
			await locals.pb.collection('users').authRefresh();
		}
		locals.user = locals.pb.authStore.model;
	} catch (error) {
		console.log(error);
		locals.pb.authStore.clear();
		locals.user = undefined;
	}

	if (
		url.pathname.startsWith('/') &&
		!locals.user &&
		!['/login', '/register'].includes(url.pathname)
	) {
		redirect(303, '/login');
	}

	const response = await resolve(event);

	response.headers.append('set-cookie', locals.pb.authStore.exportToCookie());

	return response;
};
