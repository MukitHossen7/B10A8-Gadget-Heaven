import { useContext, useState } from "react";
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
  const { addCard, setAddCard } = useContext(ProductsData);
  const navigate = useNavigate();
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
    setAddCard([]);
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
            className="border-2 text-[#9538E2] border-[#9538E2] px-10 py-2 bg-gray-100 rounded-full flex items-center gap-2"
          >
            Sort by Price <HiAdjustmentsVertical />
          </button>
          <button
            onClick={handlePrice}
            className="border-2  bg-[#9538E2] px-10 py-2 rounded-full text-white"
          >
            Purchase
          </button>
        </div>
      </div>

      {!isCart ? <AddWishlist></AddWishlist> : <AddCart></AddCart>}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <img src={modalImg}></img>
          <h3 className="font-bold text-3xl mt-3">Payment Successfully</h3>
          <p className="pt-5 font-bold">Thanks for purchasing.</p>
          <p className="font-bold">{`Total cost: ${totalCost}.00`}</p>
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
