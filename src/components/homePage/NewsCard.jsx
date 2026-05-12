import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    console.log(news, "from news card");

    return (
        <div className="card bg-base-100 shadow-sm">
            {/* author info */}
            <div className='flex justify-between items-center bg-base-300 p-4'>
                <div className='flex justify-between items-center gap-2'>
                    <Image
                        src={news?.author?.img}
                        alt={news?.author?.name}
                        width={40}
                        height={40}
                        className='rounded-full' />

                    <div>
                        <h2 className='font-semibold'>{news?.author?.name}</h2>
                        <h2 className='text-xs'>{news?.author?.published_date}</h2>
                    </div>
                </div>

                <div className='flex justify-between items-center gap-1'>
                    <CiShare2 className='text-xl' />
                    <CiBookmark className='text-xl' />
                </div>
            </div>


            <div className="card-body space-y-4">
                <h2 className="card-title">{news.title}</h2>
                <figure>
                    <Image
                        src={news?.image_url}
                        alt={news.title}
                        width={400}
                        height={400}
                        className='w-full' />
                </figure>
                <div>
                    <p className='line-clamp-3'>{news.details}</p>
                    <Link href={`/news/${news?._id}`} className='text-amber-500 font-bold inline-block mt-1'>Read More</Link>
                </div>

                <div className='flex justify-between items-center border-t border-t-base-300 pt-4'>
                    <div className='flex justify-between items-start gap-2 text-xl text-amber-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className='text-base  text-neutral'>{news?.rating?.number}</span>
                    </div>

                    <div className='flex  justify-between items-end gap-2'>
                        <FaEye className='text-xl' />
                        {news?.total_view}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;