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
        <h2 className="text-xl font-semibold">All category</h2>
        <ul className="flex flex-col gap-4 text-center font-medium mt-6">
          {
            categories.news_category.map(category => {
              return <li key={category.category_id}
                className="bg-slate-200 rounded-md py-2">{category.category_name}</li>
            })
          }
        </ul>
      </div>

      <div className=" bg-blue-100 col-span-6">
        news home
      </div>

      <div className="bg-pink-100 col-span-3">
        social icons
      </div>
    </div>
  );
}
