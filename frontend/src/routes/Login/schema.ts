import { z } from "zod";

export const createUserForm = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});

export type CreateUserForm = z.infer<typeof createUserForm>;
