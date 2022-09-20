import { db, doc, deleteDoc } from '../firebase/config';

const BookList = ({ books }) => {
	const handleClick = async (id) => {
		const ref = doc(db, 'books', id);

		await deleteDoc(ref);
	};

	return (
		<div className="book-list">
			<ul>
				{books.map((book) => (
					<li key={book.id} onClick={() => handleClick(book.id)}>
						{book.title}
					</li>
				))}
			</ul>
		</div>
	);
};
export default BookList;
