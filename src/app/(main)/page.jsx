import { redirect } from "next/navigation";

const categoryId = '01';
const Home = () => {
 
  return (
    redirect(`/category/${categoryId}`)
  );
};

export default Home;
