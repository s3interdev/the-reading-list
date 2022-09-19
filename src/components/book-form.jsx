import { useState } from 'react';

const BookList = () => {
	const [newBook, setNewBook] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(newBook);

		setNewBook('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span className="font-semibold uppercase">Add New Book Title</span>
				<input
					type="text"
					onChange={(e) => setNewBook(e.target.value)}
					value={newBook}
					required
					className="rounded-md"
				/>
			</label>
			<button>Add Book</button>
		</form>
	);
};

export default BookList;
