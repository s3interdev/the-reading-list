import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase/config';

export const useSignin = () => {
	const [error, setError] = useState(null);

	const signin = (email, password) => {
		setError(null);

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log('User signed in: ', userCredential.user);
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return { signin, error };
};
