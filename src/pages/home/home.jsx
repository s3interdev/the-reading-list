import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import BookList from '../../components/book-list';
import BookForm from '../../components/book-form';

const Home = () => {
	const { user } = useAuthContext();
	const { documents: books } = useCollection('books', ['uid', '==', user.uid]);

	return (
		<div className="home">
			{books && <BookList books={books} />}
			<BookForm />
		</div>
	);
};

export default Home;
