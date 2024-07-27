import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8)
});

export const registerSchema = z
	.object({
		firstName: z.string().min(3),
		lastName: z.string().min(3),
		email: z.string().email(),
		password: z.string().min(8),
		passwordConfirm: z.string().min(8)
	})
	.refine((data) => data.password === data.passwordConfirm, {
		message: 'Passwords do not match',
		path: ['passwordConfirm']
	});

export const courseSchema = z.object({
	title: z.string(),
	description: z.string().min(10),
	imageUrl: z.string().url().optional(),
	price: z.number({ coerce: true }).int().min(0).optional(),
	isPublished: z.boolean(),
	category: z.string().min(3)
});

export const titleSchema = courseSchema.pick({ title: true });
export const descriptionSchema = courseSchema.pick({ description: true });
export type CourseSchema = z.infer<typeof courseSchema>;
