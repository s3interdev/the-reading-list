import { useState, useEffect } from 'react';
import { db, collection, getDocs } from '../../firebase/config';
import BookList from '../../components/book-list';
import BookForm from '../../components/book-form';

const Home = () => {
	const [books, setBooks] = useState(null);

	useEffect(() => {
		const ref = collection(db, 'books');

		getDocs(ref).then((snapshot) => {
			let res = [];

			snapshot.docs.forEach((doc) => {
				res.push({ id: doc.id, ...doc.data() });
			});
			setBooks(res);
		});
	}, []);

	return (
		<div className="home">
			{books && <BookList books={books} />}
			<BookForm />
		</div>
	);
};

export default Home;
