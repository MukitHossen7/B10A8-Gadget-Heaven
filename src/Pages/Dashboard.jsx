import { useContext, useState } from "react";
import AddCart from "../components/AddCart/AddCart";
import AddWishlist from "../components/AddWishlist/AddWishlist";
import Heading from "../components/Heading/Heading";
import Navbar from "./../components/Navbar/Navbar";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { ProductsData } from "../Layouts/MainLayouts";

const Dashboard = () => {
  const [isCart, setIsCart] = useState(true);
  const [isSortPrice, setIsSortPrice] = useState([]);
  const { addCard } = useContext(ProductsData);
  const totalCost = addCard.reduce((acc, cur) => {
    return parseInt(acc + cur.price);
  }, 0);
  const handleCart = () => {
    setIsCart(true);
  };
  const handleWishlist = () => {
    setIsCart(false);
  };
  const handleSortPrice = () => {
    const sortPrice = addCard.sort((a, b) => b.price - a.price);
    setIsSortPrice(sortPrice);
  };
  const handlePrice = () => {
    isSortPrice;
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-[#9538E2] rounded-xl mt-8 pt-7 ">
        <Heading
          title="Dashboard"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="flex flex-row justify-center gap-6 py-5">
          <button
            onClick={handleCart}
            className={`border border-white  px-10 py-2 rounded-full ${
              isCart ? "bg-white text-[#9538E2]" : "text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={handleWishlist}
            className={`border  border-white px-10 py-2 rounded-full ${
              !isCart ? "bg-white text-[#9538E2]" : "text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="flex justify-between py-10">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-xl">Total cost: ${totalCost}</h3>
          <button
            onClick={handleSortPrice}
            className="border-2 border-[#9538E2] px-10 py-2 bg-gray-100 rounded-full flex items-center gap-2"
          >
            Sort by Price <HiAdjustmentsVertical />
          </button>
          <button
            onClick={handlePrice}
            className="border-2 border-[#9538E2] px-10 py-2 rounded-full"
          >
            Purchase
          </button>
        </div>
      </div>

      {!isCart ? <AddWishlist></AddWishlist> : <AddCart></AddCart>}
    </div>
  );
};

export default Dashboard;
