import { useState } from 'react';

const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div className="sign-in">
			<h2 className="font-semibold uppercase">Sign In</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Email:</span>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						className="rounded-md"
						required
					/>
				</label>

				<label>
					<span>Password:</span>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						className="rounded-md"
						required
					/>
				</label>

				<button>Sign In</button>
			</form>
		</div>
	);
};

export default Signin;
