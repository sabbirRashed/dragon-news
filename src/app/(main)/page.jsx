import LeftSideBar from "@/components/homePage/LeftSideBar";
import RightSideBar from "@/components/homePage/RightSideBar";
import Image from "next/image";

const getCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data.data
}

export default async function Home() {
  const categories = await getCategory();
  console.log(categories.news_category, 'catefoy');

  return (
    <div className="grid grid-cols-12 gap-6 container mx-auto my-15">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={"01"}></LeftSideBar>
      </div>

      <div className=" bg-blue-100 col-span-6">
        news home
      </div>

      <div className="bg-pink-100 col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
