"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    

    const handleLoginForm = (data) =>{
        const email = data.email;
        const password = data.password;
        console.log(email, password);

        
    }
    // console.log(errors);

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center'>
            <div className='p-8 md:p-10 rounded-xl bg-white mx-4 w-sm'>
                <h2 className='font-bold text-xl text-center border-b border-b-base-300 pb-4'>Login your account</h2>

                <form onSubmit={handleSubmit(handleLoginForm)}
                    className='mt-6 space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input
                            type="email"
                            className="input"
                            placeholder="Enter your email address"
                            {...register("email", {required: "Email is required"})} />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter your password" 
                            {...register("password", {required: "Password is required"})} />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className='btn bg-slate-800 text-base-100 w-full'>Login</button>

                </form>
                <p className='mt-4 text-sm text-center'>Don't have an account? <Link href={'/register'} className='text-red-500'>Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;