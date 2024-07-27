import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { redirect, type Actions } from '@sveltejs/kit';
import type { ClientResponseError } from 'pocketbase';
import { registerSchema } from '$lib/schema.js';

export const load = async () => {
	return {
		form: await superValidate(zod(registerSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const {
			locals: { pb }
		} = event;
		const form = await superValidate(event, zod(registerSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			await pb.collection('users').create(form.data);
		} catch (error) {
			const { message: errorMessage } = error as ClientResponseError;
			return message(form, errorMessage, { status: 400 });
		}
		throw redirect(303, '/');
	}
};
