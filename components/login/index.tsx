"use client"
import { useState } from 'react';

const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here with email and password
    setLoggedIn(true);
  };

  const handleGoogleLogin = () => {
    // Perform Google login logic here
    setLoggedIn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
      <h1 className="text-4xl font-bold text-white mb-8">Chmsu</h1>
      {loggedIn ? (
        <p className="text-white text-xl">You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <label htmlFor="email" className="text-gray-800 text-lg font-semibold mb-2 block">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-800 text-lg font-semibold mb-2 block">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">
            Login with Email and Password
          </button>
          <div className="mt-4">
            <button onClick={handleGoogleLogin} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
              Login with Google
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
