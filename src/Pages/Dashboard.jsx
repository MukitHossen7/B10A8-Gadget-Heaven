import { useContext, useEffect, useState } from "react";
import AddCart from "../components/AddCart/AddCart";
import AddWishlist from "../components/AddWishlist/AddWishlist";
import Heading from "../components/Heading/Heading";
import Navbar from "./../components/Navbar/Navbar";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { ProductsData } from "../Layouts/MainLayouts";
import modalImg from "../../src/assets/Group.png";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [isCart, setIsCart] = useState(true);
  const [isSortPrice, setIsSortPrice] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [disable, setDisable] = useState(0);
  const { addCard, setAddCard, setHistory } = useContext(ProductsData);
  const navigate = useNavigate();
  const totalCost = addCard.reduce((acc, cur) => {
    return parseInt(acc + cur.price);
  }, 0);
  useEffect(() => {
    setDisable(totalCost);
    document.title = "Dashboard Page";
  }, []);
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
    setAddCard([]);
    setHistory((prev) => [...prev, ...addCard]);
    setTotalMoney(totalCost);
    document.getElementById("my_modal_1").showModal();
  };
  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-[#9538E2] rounded-xl mt-8 pt-7 ">
        <Heading
          title="Dashboard"
          description="The Gadget Heaven dashboard provides a detailed overview of all gadgets, highlighting trending products, recent additions, and tailored recommendations. Effortlessly browse categories, manage stock, and track user activity for streamlined operations"
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

      <div className="flex flex-col lg:flex-row justify-between py-10">
        <h2 className="font-bold text-2xl">{isCart ? "Cart" : "Wishlist"}</h2>

        <div className="flex flex-col lg:flex-row items-center gap-3">
          <h3 className="font-bold text-xl">Total cost: ${totalCost}</h3>
          <button
            onClick={handleSortPrice}
            disabled={disable === 0 ? true : false}
            className={` text-[#9538E2]  px-10 py-2 bg-gray-100 rounded-full flex items-center gap-2 ${
              disable === 0
                ? "bg-gray-300 text-slate-700"
                : "border-2 border-[#9538E2]"
            }`}
          >
            Sort by Price <HiAdjustmentsVertical />
          </button>
          <button
            onClick={handlePrice}
            disabled={disable === 0 ? true : false}
            className={`border-2  bg-[#9538E2] px-10 py-2 rounded-full text-white ${
              disable === 0 ? "bg-gray-300 text-slate-700" : ""
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      {!isCart ? <AddWishlist></AddWishlist> : <AddCart></AddCart>}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <img src={modalImg}></img>
          <h3 className="font-bold text-3xl mt-3">Payment Successfully</h3>
          <p className="pt-5 font-bold">Thanks for purchasing.</p>
          <p className="font-bold">{`Total cost: ${totalMoney}.00`}</p>
          <div className="modal-action w-full">
            <form method="dialog" className="w-full">
              <button onClick={handleNavigateHome} className="btn w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
