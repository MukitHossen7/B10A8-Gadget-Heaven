import { useParams } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import Heading from "../Heading/Heading";
import { useContext, useEffect, useState } from "react";
import { ProductsData } from "../../Layouts/MainLayouts";
import ReactStars from "react-rating-stars-component";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const ProductDetails = () => {
  const [details, setDetails] = useState({});
  const { productId } = useParams();
  const { products: allProductsData } = useContext(ProductsData);
  const { handleAddCard } = useContext(ProductsData);
  const { handleAddWishlist } = useContext(ProductsData);
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
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#9538E2] rounded-xl pb-56 pt-4 mt-6 mb-96">
        <Heading
          title="Product Details"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
        <div className="rounded-2xl absolute left-0 right-0 mx-60 top-60  bg-white shadow-xl ">
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
                <button
                  onClick={() => handleAddCard(details)}
                  className="flex items-center gap-2 bg-[#9538E2] text-white px-5 py-2 rounded-full "
                >
                  {" "}
                  Add to Card <FaShoppingCart />
                </button>
                <button onClick={() => handleAddWishlist(details)}>
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
