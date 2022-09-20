import { useState, useEffect, useRef } from 'react';
import { db, collection, onSnapshot, query, where } from '../firebase/config';

export const useCollection = (col, _qry) => {
	const [documents, setDocuments] = useState(null);

	const qry = useRef(_qry).current;

	useEffect(() => {
		let ref = collection(db, col);

		if (qry) {
			ref = query(ref, where(...qry));
		}

		const unsubscribe = onSnapshot(ref, (snapshot) => {
			let results = [];

			snapshot.docs.forEach((doc) => {
				results.push({ id: doc.id, ...doc.data() });
			});
			setDocuments(results);
		});

		/** unsubscribe on unmount */
		return () => unsubscribe();
	}, [col, qry]);

	return { documents };
};
