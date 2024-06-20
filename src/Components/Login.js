import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FcLock } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className='flex items-center' style={{ background: '#FFEAD9' }}>
            <div className='p-10' style={{ width: '65%' }}>
                <img src='/Assets/Login.jpg' style={{ width: '70%' }} />
            </div>
            <div className="min-h-[85vh] flex items-center justify-center">
                <div className="bg-gray-100 p-8 rounded-lg shadow-2xl w-96">
                    <h1 className="text-3xl text-center font-medium mb-2 text-orange-900">Welcome Back.....</h1>
                    <p class="mb-2 text-center text-gray-800">
                        Sign in to your account to continue
                    </p>
                    <hr className="mb-4" />
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-m font-medium text-gray-800">
                                Email
                            </label>
                            <div className="flex items-center space-x-3 border rounded-md mt-1 p-2 w-full bg-white">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    style={{ width: '90%', border: 'none', outline: 'none' ,color:'#151515'}}
                                />
                                <MdEmail style={{ color: 'teal', fontSize: '26px' }} />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-m font-medium text-gray-800">
                                Password
                            </label>
                            <div className="flex items-center space-x-3 border rounded-md mt-1 p-2 w-full bg-white">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    style={{ width: '90%', border: 'none', outline: 'none',color:'#151515' }}
                                />
                                <FcLock style={{ color: 'blue', fontSize: '26px' }} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="flex items-center  text-gray-800">
                                <input type="checkbox" className="mr-2"/>
                                Remember me
                            </label>
                            <a href="#" className="text-blue-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="text-xl mt-4 w-full bg-green-300 text-gray-700 py-2 rounded-md hover:bg-yellow-200"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-m text-gray-800">
                        Don't have an account?{' '}
                        <Link to='/register' className="text-blue-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                    <div className="flex flex-row items-center justify-center" >
                        <hr className="mr-3" style={{width:'40%'}} />
                        <p className="text-m text-gray-800">
                            Or
                        </p>
                        <hr className="ml-3" style={{width:'40%'}} />
                    </div>
                    <div class="mt-3 space-y-3">
                        <button
                            class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            type="button"
                        >
                            <span class="mr-2 inline-block">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-rose-500"
                                >
                                    <path
                                        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                    ></path>
                                </svg>
                            </span>
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
