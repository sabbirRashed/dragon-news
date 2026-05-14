'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {

    const handleGoogle = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div className='space-y-6'>
            <h2 className='text-xl font-semibold'>Login With</h2>
            <div className='flex flex-col gap-2 '>
                <button
                    onClick={() => { handleGoogle() }}
                    className='btn border border-blue-500 text-blue-500'>
                    <FaGoogle />
                    Login with Google
                </button>
                <button className='btn btn-outline'>
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>

            <div className='mt-10'>
                <h2 className='text-xl font-semibold mb-6'>Find Us On</h2>
                <div className='flex flex-col border border-gray-300 rounded-lg'>
                    <button className='btn flex justify-start items-center gap-2 border-x-0 border-t-0  bordr-b border-b-gray-300 bg-transparent shadow-none hover:bg-base-300 py-8 rounded-none'>
                        <FaFacebookF className='text-3xl text-blue-400 p-2 bg-gray-200 hover:bg-white rounded-full' />
                        Facebook
                    </button>
                    <button className='btn flex justify-start items-center gap-2 border-x-0 border-t-0 bordr-b border-b-gray-300 bg-transparent shadow-none hover:bg-base-300 py-8 rounded-none'>
                        <FaTwitter className='text-3xl text-blue-400 p-2 bg-gray-200 hover:bg-white rounded-full' />
                        Twitter
                    </button>
                    <button className='btn flex justify-start items-center gap-2 border-none  bg-transparent shadow-none hover:bg-base-300 py-8 rounded-none'>
                        <FaInstagram className='text-3xl text-pink-500 p-2 bg-gray-200 hover:bg-white rounded-full' />
                        Instagrame
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;