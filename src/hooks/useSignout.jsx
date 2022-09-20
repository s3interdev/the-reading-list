import { useAuthContext } from './useAuthContext';
import { auth, signOut } from '../firebase/config';

export const useSignout = () => {
	const { dispatch } = useAuthContext();

	const signout = () => {
		signOut(auth)
			.then(() => {
				dispatch({ type: 'SIGNOUT' });
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return { signout };
};
