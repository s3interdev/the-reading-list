import { useState } from 'react';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
	};

	return (
		<div className="sign-up">
			<h2 className="font-semibold uppercase">Sign Up</h2>
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
						type="Password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						className="rounded-md"
						required
					/>
				</label>

				<button>Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;
