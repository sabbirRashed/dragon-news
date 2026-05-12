import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold'>Login With</h2>
            <div className='flex flex-col gap-2 mt-6'>
                <button className='btn border border-blue-500 text-blue-500'>
                    <FaGoogle />
                    Login with Google
                </button>
                <button className='btn btn-outline'>
                    <FaGithub></FaGithub>
                    Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default RightSideBar;