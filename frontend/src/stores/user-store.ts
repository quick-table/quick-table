import { Api } from '$lib/api-request';
import { getFirebaseApp } from '$lib/firebase';
import { readonly, writable } from 'svelte/store';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	type User,
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
	user: User;
};

export type UserData = {
	id: string;
	user: User;
};

const isLoggedIn = writable(false);
const userData = writable<UserData | null>(null);

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
				Authorization: `Bearer ${await data.user.getIdToken()}`
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

	registerUser(cred.user);

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

	registerUser(cred.user);

	await api.api.createNewUser({});
}

async function initialize() {
	const app = getFirebaseApp();

	getAuth(app).onAuthStateChanged(function (user) {
		if (user) {
			registerUser(user);
		}
	});
}

async function registerUser(user: User) {
	console.log('Registering User : ', user);

	api.setSecurityData({
		user: user
	});

	userData.set({
		user: user,
		id: user.uid
	});

	isLoggedIn.set(true);
}

export const UserStore = {
	api: api.api,
	userData: readonly(userData),
	isLoggedIn: readonly(isLoggedIn),

	login: login,
	signUp: singUp,
	initialize: initialize
};
