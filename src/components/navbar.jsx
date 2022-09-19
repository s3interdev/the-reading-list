import { Link } from 'react-router-dom';

const Navbar = () => {
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
				<li>Sign Out</li>
			</ul>
		</nav>
	);
};

export default Navbar;
