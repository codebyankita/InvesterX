//app/sign-in/page.tsx
'use client';
import { useState } from 'react';
import Logo from '../components/Logo';
import Link from 'next/link';
import { FaRegUser } from "react-icons/fa";

import { useRouter } from 'next/navigation';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            console.log("Full Response:", response, "Data:", data);

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('lastLogin', data.lastLogin);

                setMessage('Login successful');
                setTimeout(() => {
                    router.push('/');
                }, 2000);
            } else {
                setMessage(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('Error during login. Please try again later.');
        }
    };


    return (
        <div className="bg-[#f6f8ff] flex items-center justify-center min-h-screen px-4">
            <ScrollAnimationWrapper>
                <div className="text-center w-full max-w-md">
                    <div className="mb-8">
                        <div className=" justify-items-center  mb-6">
                            <Logo />
                        </div>
                        <FaRegUser className="text-4xl text-blue-600 mx-auto" />
                        <h1 className="text-4xl font-bold text-gray-800 mt-4">Welcome back</h1>
                        <p className="text-gray-500 mt-2">
                            Sign in to continue exploring and managing your account seamlessly.                    </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-md">
                        {message && <p className="text-center text-green-600  mb-4">{message}</p>}

                        <form onSubmit={handleLogin}>
                            <div className="mb-4 text-left">
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div className="mb-4 text-left">
                                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col sm:items-center items-start space-y-2 justify-between mb-6">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                        className="form-checkbox text-blue-600"
                                    />
                                    <span className="ml-2 text-gray-700">Remember me</span>
                                </label>
                                <Link href="#" className="text-blue-600 hover:underline">Forgot password?</Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Submit
                            </button>

                        </form>
                        <p className="mt-6 text-gray-700">
                            Don&apos;t have an account yet? <Link href="/sign-up" className="text-blue-600 hover:underline">Sign up today</Link>
                        </p>
                    </div>
                </div>
            </ScrollAnimationWrapper>
        </div>
    );
};

export default SigninPage;



