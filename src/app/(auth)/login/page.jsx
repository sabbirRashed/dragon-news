"use client"
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    const handleLoginForm = (e) =>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())
        console.log(userData);
    }
    return (
        <div className='container mx-auto min-h-[95vh] flex justify-center items-center'>
            <div className='p-10 rounded-xl bg-white w-sm'>
                <h2 className='font-bold text-2xl text-center border-b border-b-base-300 pb-4'>Login Your Account</h2>

                <form onSubmit={handleLoginForm}
                    className='mt-6 space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input
                            type="email"
                            name='email'
                            className="input"
                            placeholder="Enter your email address" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Enter your password" />
                    </fieldset>
                    <button className='btn bg-slate-800 text-base-100 w-full'>Login</button>

                </form>
                <p className='mt-4'>Don't have an account? <Link href={'/register'} className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;