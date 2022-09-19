import { useState, useEffect } from 'react';
import { db, collection, onSnapshot } from '../firebase/config';

export const useCollection = (col) => {
	const [documents, setDocuments] = useState(null);

	useEffect(() => {
		let ref = collection(db, col);

		const unsubscribe = onSnapshot(ref, (snapshot) => {
			let results = [];

			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
			setDocuments(results);
		});

		/** unsubscribe on unmount */
		return () => unsubscribe();
	}, [col]);

	return { documents };
};
