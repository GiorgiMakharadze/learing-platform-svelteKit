import { titleSchema } from '$lib/schema';
import { redirect, type Actions } from '@sveltejs/kit';
import type { ClientResponseError, RecordModel } from 'pocketbase';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	return {
		form: await superValidate(zod(titleSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const {
			locals: { pb, user }
		} = event;
		const form = await superValidate(event, zod(titleSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		let courseRecord: RecordModel;
		try {
			courseRecord = await pb.collection('courses').create({ ...form.data, user: user?.id });
		} catch (error) {
			const { message: errorMessage } = error as ClientResponseError;
			return message(form, errorMessage, { status: 400 });
		}
		throw redirect(303, `/reacher/courses/${courseRecord.id}`);
	}
};
