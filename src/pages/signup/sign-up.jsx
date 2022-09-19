import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup, error } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password);
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
				{error && <p className="mt-5 text-red-500">{error}</p>}
			</form>
		</div>
	);
};

export default Signup;
