import type { DrawerSettings } from '@skeletonlabs/skeleton';
import type { HttpResponse, Restaurant } from './api-request';

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

export function pad(number: number): string {
	return number.toString().padStart(2, '0');
}
export function dateToString(date: Date): string {
	return `${pad(date.getFullYear())}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function time(input: string): number {
	const value = Date.parse('05/02/2024 ' + input);
	return value;
}

export type DisplayConfig = DrawerSettings & {
	meta?: {
		RestaurantAvailability?: Restaurant;
	};
};
