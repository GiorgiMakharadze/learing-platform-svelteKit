import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '../../../schema';

export const load = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	};
};
