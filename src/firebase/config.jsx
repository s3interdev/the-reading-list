import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore';

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

/** initialize Firebase */
const app = initializeApp(firebaseConfig);

/** initialize firebase services */
const db = getFirestore(app);

/** export services */
export { db, collection, getDocs, onSnapshot };
