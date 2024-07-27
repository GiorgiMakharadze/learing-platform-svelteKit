import { titleSchema } from '$lib/schema.js';
import type { Category, Course } from '$lib/types.js';
import { error, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async ({ params, locals: { pb, user } }) => {
	const { courseId } = params;
	const userId = user?.id;
	if (!userId) {
		throw redirect(303, '/login');
	}
	async function getCourse() {
		try {
			const course = await pb.collection('courses').getOne<Course>(courseId, {
				expand: 'category, attachments(course), chapters(course)'
			});
			if (course.imageUrl) {
				const imageUrl = pb.files.getUrl(course, course.imageUrl);
				course.imageUrl = imageUrl;
			}
			return course;
		} catch (e) {
			// const { status } = e as ClientResponseError;
			// if (status === 404) error(400, 'course does not exist');
			console.log(e);

			throw redirect(308, '/');
		}
	}

	async function getCategories() {
		try {
			const categories = await pb.collection('categories').getFullList<Category>({
				sort: '-created'
			});
			return categories;
		} catch (e) {
			// const { status } = e as ClientResponseError;
			// if (status === 404) redirect(303, '/');
			console.log(e);
			error(400, 'an error occurred');
		}
	}

	const [course, categories] = await Promise.all([getCourse(), getCategories()]);
	const titleForm = await superValidate(course, zod(titleSchema));
	return {
		course,
		categories,
		titleForm
	};
};
