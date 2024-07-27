import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';
import { loginSchema } from '$lib/schema.js';

export const load = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const {
			locals: { pb }
		} = event;
		const form = await superValidate(event, zod(loginSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			await pb.collection('users').authWithPassword(form.data.email, form.data.password);
		} catch (error) {
			const { status } = error as ClientResponseError;
			return fail(status, {
				form,
				message: 'An error occurred during login. Please check your credentials and try again.'
			});
		}
		throw redirect(302, '/');
	}
};