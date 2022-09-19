import { useCollection } from '../../hooks/useCollection';
import BookList from '../../components/book-list';
import BookForm from '../../components/book-form';

const Home = () => {
	const { documents: books } = useCollection('books');

	return (
		<div className="home">
			{books && <BookList books={books} />}
			<BookForm />
		</div>
	);
};

export default Home;
