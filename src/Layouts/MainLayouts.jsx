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
    <div className="w-11/12 lg:w-11/12 xl:w-11/12 xl:container mx-auto">
      <ProductsData.Provider value={products}>
        <div className="min-h-[calc(100vh-336px)]">
          <Outlet></Outlet>
        </div>
      </ProductsData.Provider>

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
