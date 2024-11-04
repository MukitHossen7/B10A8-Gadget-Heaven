import { Link, NavLink, useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import Heading from "../Heading/Heading";
import { useContext, useEffect, useState } from "react";
import { ProductsData } from "../../Layouts/MainLayouts";
import ReactStars from "react-rating-stars-component";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const { productId } = useParams();
  const allProductsData = useContext(ProductsData);
  useEffect(() => {
    if (Array.isArray(allProductsData)) {
      const findData = allProductsData.find(
        (data) => data.product_id === productId
      );
      setDetails(findData);
    }
  }, [allProductsData, productId]);

  const {
    product_title,
    product_image,
    price,
    availability,
    description,
    Specification,
    rating,
  } = details;
  console.log(Specification);
  return (
    <div>
      <div className="navbar bg-base-100 pt-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold ">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-11 px-1 ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <TiShoppingCart className="text-xl" />

          <CiHeart className="text-xl" />
        </div>
      </div>
      <div className="bg-[#9538E2] rounded-xl pb-56 pt-4 mt-6 mb-80">
        <Heading
          title="Product Details"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="rounded-2xl absolute left-0 right-0 mx-60 top-60   bg-white shadow-xl ">
          <div className="p-6 flex flex-row gap-6 ">
            <div className="w-[40%] ">
              <img
                src={product_image}
                alt="imag"
                className="rounded-xl h-[450px] object-cover w-full"
              />
            </div>
            <div className="w-[60%] space-y-3">
              <h3 className="font-medium text-3xl">{product_title}</h3>
              <h4 className="font-medium text-xl">Price:$ {price}</h4>
              <button
                className={`px-3 py-1 border-2 rounded-full text-sm ${
                  availability
                    ? "text-green-700  border-green-600 bg-green-100 "
                    : "text-red-700  border-red-600 bg-red-100"
                }`}
              >
                In Stock
              </button>
              <p className="text-gray-500">{description}</p>
              <h4 className="font-bold">Specification:</h4>
              <ul className="text-gray-500 mr-2">
                {Array.isArray(Specification)
                  ? Specification.map((item, idx) => (
                      <p key={idx}>
                        {idx + 1}. {item}
                      </p>
                    ))
                  : ""}
              </ul>
              <h4 className="font-bold">Rating:</h4>
              <div className="flex items-center gap-4">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={rating}
                />
                <span className="bg-gray-300 p-2 rounded-full">{rating}</span>
              </div>
              <div className="flex items-center gap-8">
                <button className="flex items-center gap-2 bg-[#9538E2] text-white px-5 py-2 rounded-full ">
                  {" "}
                  Add to Card <FaShoppingCart />
                </button>
                <button>
                  <CiHeart className="text-3xl border-2 border-gray-400 rounded-full p-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
