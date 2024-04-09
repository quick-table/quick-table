import { writable } from 'svelte/store';

const user = writable();

const UserStore = {
	user: user
};

export default UserStore;
