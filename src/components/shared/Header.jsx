import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center py-8 space-y-3'>
            <Image src={logo} alt='The Dragon News' width={300} height={200} className='mx-auto'></Image>
            <p>Journalism without Fear or Feavour</p>
            <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;