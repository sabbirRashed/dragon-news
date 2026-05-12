import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const breakingNews = [
        {
            id: 1,
            title: "Massive Storm Causes Flooding in Coastal Areas"
        },
        {
            id: 2,
            title: "New AI Technology Transforms Web Development"
        },
        {
            id: 3,
            title: "Global Markets Rise After Economic Recovery Report"
        }
    ];


    return (
        <div className='flex justify-between items-center gap-4 bg-gray-200 p-4 rounded-sm container mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee 
            speed={100}
            pauseOnHover={true}>
                {
                    breakingNews.map(item => (
                        <h2 
                        key={item.id}
                        className='mx-2'>{item.title} .</h2>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;