import type { HttpResponse } from './api-request';

type ResponsWrapper<T> = {
	data?: T;
	error?: string;
	status?: string;
};

export async function extractResponse<T>(
	response: HttpResponse<ResponsWrapper<T>, any>
): Promise<T> {
	return (await response.json()).data;
}

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
