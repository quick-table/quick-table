import { Api } from '$lib/api-request';
import { getFirebaseApp } from '$lib/firebase';
import { readonly, writable } from 'svelte/store';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	type UserCredential
} from 'firebase/auth';

export type UserCredentials = {
	email: string;
	password: string;
};

export type UserToken = {
	userToken: string;
	userRefreshToken: string;
};

export type SecurityData = {
	credentials: UserCredential;
};

const isLoggedIn = writable(false);

const api = new Api<SecurityData>({
	baseUrl: 'http://localhost:8001',
	baseApiParams: {
		secure: true
	},
	securityWorker: async (data) => {
		if (data == null) {
			return {};
		}

		return {
			headers: {
				Authorization: `Bearer ${await data.credentials.user.getIdToken()}`
			}
		};
	}
});

async function login(userCredentials: UserCredentials) {
	const app = getFirebaseApp();
	const auth = getAuth(app);

	const cred = await signInWithEmailAndPassword(
		auth,
		userCredentials.email,
		userCredentials.password
	).catch((error) => {
		console.log(error);
	});

	if (!cred) {
		throw new Error('Login failed');
	}

	api.setSecurityData({
		credentials: cred
	});

	isLoggedIn.set(true);

	console.log('Login succeeded');
}

async function singUp(userCredentials: UserCredentials) {
	const app = getFirebaseApp();
	const auth = getAuth(app);

	const cred = await createUserWithEmailAndPassword(
		auth,
		userCredentials.email,
		userCredentials.password
	).catch((error) => {
		console.log(error);
	});

	if (!cred) {
		throw new Error('Login failed');
	}

	api.setSecurityData({
		credentials: cred
	});

	isLoggedIn.set(true);

	await api.api.createNewUser({});
}

export const UserStore = {
	api: api.api,
	isLoggedIn: readonly(isLoggedIn),

	login: login,
	signUp: singUp
};
