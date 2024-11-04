import { Outlet, useLoaderData } from "react-router-dom";
import CategoriesBtn from "../components/CategoriesBtn/CategoriesBtn";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="pt-32">
      <h2 className="font-bold text-3xl text-center pb-10">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[20%]  border-2 border-red-200">
          <CategoriesBtn categories={categories}></CategoriesBtn>
        </div>
        <div className="w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Outlet></Outlet>
          <div className="card bg-base-100  shadow-md p-5 rounded-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="pt-6">
              <h2 className="font-semibold text-2xl pb-3">Dell XPS 13</h2>
              <p className="font-medium text-xl text-gray-600">
                Price : 99.99 k
              </p>
              <div className="card-actions justify-start pt-4">
                <button className="font-semibold text-[#9538E2] border-2 border-[#9538E2] px-5 py-3 rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-md p-5 rounded-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="pt-6">
              <h2 className="font-semibold text-2xl pb-3">Dell XPS 13</h2>
              <p className="font-medium text-xl text-gray-600">
                Price : 99.99 k
              </p>
              <div className="card-actions justify-start pt-4">
                <button className="font-semibold text-[#9538E2] border-2 border-[#9538E2] px-5 py-3 rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-md p-5 rounded-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="pt-6">
              <h2 className="font-semibold text-2xl pb-3">Dell XPS 13</h2>
              <p className="font-medium text-xl text-gray-600">
                Price : 99.99 k
              </p>
              <div className="card-actions justify-start pt-4">
                <button className="font-semibold text-[#9538E2] border-2 border-[#9538E2] px-5 py-3 rounded-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
