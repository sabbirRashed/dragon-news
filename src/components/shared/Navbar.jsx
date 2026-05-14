"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import userAvater from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient, signOut } from '@/lib/auth-client';



const Navbar = () => {


    const { data: session, isPending } = authClient.useSession()
    console.log(session?.user);
    const user = session?.user;


    return (
        <div className='flex justify-between items-center container mx-auto pt-4'>
            <div>

            </div>

            <ul className='flex justify-between items-center text-gray-600 gap-6'>
                <li><NavLink href={`/category/01`}>Home</NavLink></li>
                <li><NavLink href={"/about"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            <div className='flex justify-between items-center gap-2'>
                {
                    isPending ? <h2>Loading...</h2>
                        : <>
                            {
                                user ? <div>
                                    <div className='flex justify-between items-center gap-2'>
                                        <Image
                                            src={user?.image || userAvater}
                                            width={50}
                                            height={50}
                                            alt='user avater'
                                            className='rounded-full'></Image>
                                        <button
                                            onClick={() => signOut()}
                                            className='btn bg-gray-700 text-white'>Log Out</button>
                                    </div>
                                    <p className='text-sm text-right text-slate-800'>Welcome, {user.name}!</p>

                                </div>
                                    : <>
                                        <Link href={'/login'}>
                                            <button className='btn bg-gray-700 text-white'>Login</button>
                                        </Link>
                                        <Link href={'/register'}>
                                            <button className='btn bg-gray-700 text-white'>Register</button>
                                        </Link>

                                    </>


                            }
                        </>
                }
            </div>
        </div >
    );
};

export default Navbar;