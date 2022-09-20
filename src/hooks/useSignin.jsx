import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { auth, signInWithEmailAndPassword } from '../firebase/config';

export const useSignin = () => {
	const { dispatch } = useAuthContext();
	const [error, setError] = useState(null);

	const signin = (email, password) => {
		setError(null);

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				dispatch({ type: 'SIGNIN', payload: userCredential.user });
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return { signin, error };
};
