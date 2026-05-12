import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold">All category</h2>
            <ul className="flex flex-col gap-4 font-medium mt-6">
                {
                    categories.news_category.map(category => {
                        return <li key={category.category_id}
                            className={`${activeId === category.category_id ? 'bg-slate-100' : ""} rounded-md`}>

                            <Link href={`/category/${category.category_id}`}
                            className='block p-2 rounded-md'>{category.category_name}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;