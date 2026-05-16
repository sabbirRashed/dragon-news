
import RightSideBar from "@/components/homePage/RightSideBar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

export const generateMetadata =async({params}) =>{
    const {id} = await params;
    // console.log("params", id);
    const news = await getNewsDetailsById(id)
    

    return {
    title: news.title,
    description: news.details,
  }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id, "news details id");
    const newsDetaisData = await getNewsDetailsById(id);
    // console.log(newsDetaisData);

    return (
        <div className="max-w-325 mx-auto my-15 grid grid-cols-12 gap-6">
            <div className="card bg-base-100 shadow-sm col-span-9">
                {/* author info */}
                <div className='flex justify-between items-center bg-base-300 p-4'>
                    <div className='flex justify-between items-center gap-2'>
                        <Image
                            src={newsDetaisData?.author?.img}
                            alt={newsDetaisData?.author?.name}
                            width={40}
                            height={40}
                            className='rounded-full' />

                        <div>
                            <h2 className='font-semibold'>{newsDetaisData?.author?.name}</h2>
                            <h2 className='text-xs'>{newsDetaisData?.author?.published_date}</h2>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-1'>
                        <CiShare2 className='text-xl' />
                        <CiBookmark className='text-xl' />
                    </div>
                </div>


                <div className="card-body space-y-4">
                    <figure>
                        <Image
                            src={newsDetaisData?.image_url}
                            alt={newsDetaisData.title}
                            width={400}
                            height={400}
                            className='w-full' />
                    </figure>
                    
                    <div>
                        <h2 className="card-title mb-2">{newsDetaisData.title}</h2>
                        <p className=''>{newsDetaisData.details}</p>
                        <Link href={`/category/${newsDetaisData?.category_id}`}
                            className='text-amber-500 font-bold inline-block mt-6 '>
                            <button className="flex justify-start items-center gap-2 btn bg-orange-600 text-base-100">
                                <FaArrowLeftLong className="text-xl" />
                                All News in this category
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="col-span-3">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default NewsDetailsPage;