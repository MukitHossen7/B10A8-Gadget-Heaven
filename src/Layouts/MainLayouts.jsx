import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export const ProductsData = createContext();

const MainLayouts = () => {
  const [products, setProducts] = useState();
  const [addCard, setAddCard] = useState([]);
  const [addWishlist, SetAddWishlist] = useState([]);
  const [history, setHistory] = useState([]);

  const handleAddCard = (cardObj) => {
    setAddCard([...addCard, cardObj]);
    toast.success("Successfully Add to Cart!");
  };
  const handleAddWishlist = (wishObj) => {
    const findWish = addWishlist.find(
      (item) => item.product_id === wishObj.product_id
    );
    if (findWish) {
      toast.error("Already Added to Wishlist!");
      return;
    } else {
      SetAddWishlist([...addWishlist, wishObj]);
      toast.success("Successfully Add to Wishlist!");
    }
  };
  useEffect(() => {
    fetch("../product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="">
      <ProductsData.Provider
        value={{
          products,
          handleAddCard,
          handleAddWishlist,
          addCard,
          addWishlist,
          setAddCard,
          history,
          setHistory,
        }}
      >
        <div className="min-h-[calc(100vh-458px)] w-11/12 md:w-11/12 lg:11/12 xl:container mx-auto ">
          <Outlet></Outlet>
        </div>
      </ProductsData.Provider>

      <div className="bg-gray-100">
        <Footer></Footer>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayouts;
