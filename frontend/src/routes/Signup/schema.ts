import { z } from 'zod';

export const createUserForm = z
	.object({
		email: z.string().email(),
		password: z.string().min(6),
		passwordConfirmation: z.string().min(6)
	})
	.refine((data) => data.password === data.passwordConfirmation, {
		message: 'Passwords do not match',
		path: ['passwordConfirmation']
	});

export type CreateUserForm = z.infer<typeof createUserForm>;
