"use client"

import { useRouter } from 'next/navigation';
import  { useState } from 'react'
import {signIn} from 'next-auth/react'

import React from 'react'
import { AuthProvider } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setError(result.error);
    } else {
      setError(null);
      console.log('DONE')
        router.push('/list');
    }

    //    const data  = await signIn('credentials',{
    //     email,
    //     password
    //    });
    //    console.log(data);

    //     if(data?.error){
    //         console.log(error);
    //     }
    };

    return (
        <AuthProvider>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
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
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-white border border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </div>
        </div>
        </AuthProvider>
    );
}


export default Login


