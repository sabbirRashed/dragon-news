import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-black">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;