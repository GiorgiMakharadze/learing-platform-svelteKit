import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	logout: async (event) => {
		const {
			locals: { pb }
		} = event;
		pb.authStore.clear();
	}
};
