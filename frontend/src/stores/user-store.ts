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

export type UserData = {
	id: string;
	credentials: UserCredential;
};

const isLoggedIn = writable(false);
const userData = writable<UserData | null>(null);

const api = new Api<SecurityData>({
	baseUrl: 'http://ec2-52-201-242-246.compute-1.amazonaws.com:8001',
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

	console.log(cred);
	console.log(cred.user.uid);

	api.setSecurityData({
		credentials: cred
	});

	userData.set({
		id: cred.user.uid,
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

	userData.set({
		id: cred.user.uid,
		credentials: cred
	});

	isLoggedIn.set(true);

	await api.api.createNewUser({});
}

export const UserStore = {
	api: api.api,
	userData: readonly(userData),
	isLoggedIn: readonly(isLoggedIn),

	login: login,
	signUp: singUp
};
