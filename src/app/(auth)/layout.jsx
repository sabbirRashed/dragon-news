import Navbar from '@/components/shared/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='bg-base-300'>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;