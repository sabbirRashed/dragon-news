import React from 'react';

const LoginPage = () => {
    return (
        <div className='bg-base-300 '>
            <div className='container mx-auto min-h-[90vh] mt-6 flex justify-center items-center'>
                <div className='p-10 rounded-xl bg-white'>
                    <h2 className='font-bold text-2xl text-center'>Login Your Account</h2>

                    <form action=""
                    className='mt-6 '>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                            <label className="label">Email address</label>
                            <input type="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;