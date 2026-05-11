import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto mt-4'>
            <div>

            </div>

            <ul className='flex justify-between items-center text-gray-600 gap-6'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            <div className='flex justify-between items-center gap-2'>
                <Image
                    src={userAvater}
                    alt='user avater'></Image>
                <Link href={'/login'}>
                    <button className='btn bg-gray-700 text-white'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;