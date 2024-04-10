import firebase from 'firebase/compat/app';

const firebaseConfig = {
	apiKey: 'AIzaSyCLvXZ4F8aruMH0ZJDj-dE_XBjoy28ZrmI',
	authDomain: 'restaurant-reservation-9fd06.firebaseapp.com',
	projectId: 'restaurant-reservation-9fd06',
	storageBucket: 'restaurant-reservation-9fd06.appspot.com',
	messagingSenderId: '258733000693',
	appId: '1:258733000693:web:4854671b126b7915b7c2bc',
	measurementId: 'G-0RYD7RE8NF'
};


let firebaseApp: firebase.app.App | undefined = undefined;

export function getFirebaseApp() {
	if (firebaseApp === undefined){
		firebaseApp = firebase.initializeApp(firebaseConfig);
	}

	return firebaseApp;
}
