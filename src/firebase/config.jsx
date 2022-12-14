import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import {
	getFirestore,
	collection,
	onSnapshot,
	addDoc,
	doc,
	deleteDoc,
	query,
	where,
} from 'firebase/firestore';

/** firebase configuration object containing keys and identifiers */
const firebaseConfig = {
	apiKey: 'AIzaSyCd6qlpxkZiiygKO8217BRCUW8pYW-eniA',
	authDomain: 'the-reading-list.firebaseapp.com',
	projectId: 'the-reading-list',
	storageBucket: 'the-reading-list.appspot.com',
	messagingSenderId: '995726601471',
	appId: '1:995726601471:web:d60ad9679620c9274070ca',
	measurementId: 'G-BH5JX4E57N',
};

/** initialize firebase */
const app = initializeApp(firebaseConfig);

/** initialize firebase services */
const auth = getAuth(app);
const db = getFirestore(app);

/** export services */
export {
	auth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	db,
	collection,
	onSnapshot,
	addDoc,
	doc,
	deleteDoc,
	query,
	where,
};
