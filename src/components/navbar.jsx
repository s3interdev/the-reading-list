import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignout } from '../hooks/useSignout';

const Navbar = () => {
	const { user } = useAuthContext();
	const { signout } = useSignout();

	return (
		<nav>
			<h1>
				<Link to="/">The Reading List</Link>
			</h1>
			<ul>
				{!user && (
					<>
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</>
				)}

				{user && (
					<>
						<li>Hello, {user.email}</li>
						<li onClick={signout}>Sign Out</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
