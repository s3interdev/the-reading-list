import { auth, signOut } from '../firebase/config';

export const useSignout = () => {
	const signout = () => {
		signOut(auth)
			.then(() => {
				console.log('User signed out');
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return { signout };
};
