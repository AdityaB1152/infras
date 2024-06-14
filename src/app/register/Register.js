// pages/register.js
"use client"; // Ensure this component is a client component

import React, { useContext, useState } from 'react';
import { AuthContext, AuthProvider } from '../context/AuthContext';


const RegisterPage = () => {
    const {error ,  registerUser } = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   const name = "Adiitya"
    const [success, setSuccess] = useState('');

    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({
            email:email,
            name:name,
            password:password,
        });

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        
        try {
            // Dummy validation for example purposes
            if (email && password && password === confirmPassword) {
                console.log('Inside try');
                const response = await fetch('/api/auth', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name:name,
                      email:email,
                      password:password, // Replace with your data
                    }),
                  });
                
                  const result = await response.json();
                  console.log(result);
                // Redirect to the login page or a welcome page after successful registration
                
            }
        } catch (err) {
            setError('Failed to register');
        }
    };

    return (
        <AuthProvider>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white border border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800"
                     >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </AuthProvider>
    );
};

export default RegisterPage;
