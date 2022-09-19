import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase/config';

export const useSignup = () => {
	const [error, setError] = useState(null);

	const signup = (email, password) => {
		setError(null);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log('New user signed up: ', userCredential.user);
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return { signup, error };
};
