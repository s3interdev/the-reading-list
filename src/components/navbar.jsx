import { Link } from 'react-router-dom';
import { useSignout } from '../hooks/useSignout';

const Navbar = () => {
	const { signout } = useSignout();

	return (
		<nav>
			<h1>The Reading List</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/signin">Sign In</Link>
				</li>
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li onClick={signout}>Sign Out</li>
			</ul>
		</nav>
	);
};

export default Navbar;
