import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { createContext, useEffect, useState } from "react";
export const ProductsData = createContext();

const MainLayouts = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("../product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="">
      <ProductsData.Provider value={{ products }}>
        <div className="min-h-[calc(100vh-336px)] w-11/12 md:w-11/12 lg:11/12 xl:container mx-auto ">
          <Outlet></Outlet>
        </div>
      </ProductsData.Provider>

      <div className="bg-gray-100">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
