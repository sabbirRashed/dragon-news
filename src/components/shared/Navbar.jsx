import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvater from '@/assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto mt-4'>
            <div>

            </div>

            <ul className='flex justify-between items-center text-gray-600 gap-6'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/career"}>Career</Link></li>
            </ul>

            <div className='flex justify-between items-center gap-2'>
                <Image
                    src={userAvater}
                    alt='user avater'></Image>
                <Link href={'/login'}>
                    <button className='btn'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;