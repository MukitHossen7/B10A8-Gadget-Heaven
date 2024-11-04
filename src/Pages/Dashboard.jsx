import AddCart from "../components/AddCart/AddCart";
import AddWishlist from "../components/AddWishlist/AddWishlist";
import Heading from "../components/Heading/Heading";
import Navbar from "./../components/Navbar/Navbar";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-[#9538E2] rounded-xl mt-8 pt-7">
        <Heading
          title="Dashboard"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="flex flex-row justify-center gap-6 py-5">
          <button className=" border border-white px-10 py-2 rounded-full">
            Cart
          </button>
          <button className="border border-white px-10 py-2 rounded-full">
            Wishlist
          </button>
        </div>
      </div>

      <div className="flex justify-between py-10">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-xl">Total cost: 999.99</h3>
          <button className="border-2 border-[#9538E2] px-10 py-2 rounded-full flex items-center gap-2">
            Sort by Price <HiAdjustmentsVertical />
          </button>
          <button className="border-2 border-[#9538E2] px-10 py-2 rounded-full">
            Purchase
          </button>
        </div>
      </div>

      <AddCart></AddCart>
      <AddWishlist></AddWishlist>
    </div>
  );
};

export default Dashboard;
