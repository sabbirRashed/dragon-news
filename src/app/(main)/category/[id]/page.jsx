import LeftSideBar from '@/components/homePage/LeftSideBar';
import NewsCard from '@/components/homePage/NewsCard';
import RightSideBar from '@/components/homePage/RightSideBar';
import { getCategory, getNewsByCategoryId } from '@/lib/data';




const NewsByCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const categories = await getCategory();
    const news = await getNewsByCategoryId(id);

    return (
        <div className="grid grid-cols-12 gap-6 container mx-auto my-15">

            {/* left-side */}
            <div className="col-span-3">
                <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
            </div>

            {/* center */}
            <div className="col-span-6 ">
                <h2 className="text-xl font-semibold">News By Categories</h2>
                <div className="mt-6 space-y-4 bg-base-200 p-2 rounded-sm">
                    {
                        news.length > 0 ?
                            news.map((n) => {
                                return (
                                    <NewsCard
                                        key={n._id}
                                        news={n} />
                                )
                            })
                            : <h2 className='text-xl font-semibold text-center text-purple-500'>No Data Found!</h2>
                    }
                </div>
            </div>

            {/* ritht-side */}
            <div className="col-span-3">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default NewsByCategoryPage;