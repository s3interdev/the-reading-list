import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { auth, createUserWithEmailAndPassword } from '../firebase/config';

export const useSignup = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);

	const signup = (email, password) => {
		setError(null);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				dispatch({ type: 'SIGNIN', payload: userCredential.user });
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return { signup, error };
};
