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
  const [isDisabled, setIsDisabled] = useState(false);
  const { productId } = useParams();
  const { products: allProductsData } = useContext(ProductsData);
  const { handleAddCard, handleAddWishlist } = useContext(ProductsData);

  const handleWishlistBtn = (data) => {
    handleAddWishlist(data);
    setIsDisabled(true);
  };

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
    <div className="lg:h-screen mb-0 lg:mb-60">
      <Navbar />
      <div className="bg-[#9538E2] rounded-xl py-6 lg:py-20 px-4 lg:px-0 mt-6 lg:pb-64 lg:0">
        <Heading
          title="Product Details"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className="rounded-2xl mx-auto lg:mx-40 mt-14 bg-white shadow-xl lg:absolute left-0 right-0 lg:top-60 px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/5">
              <img
                src={product_image}
                alt="imag"
                className="rounded-xl h-60 lg:h-[450px] object-cover w-full"
              />
            </div>
            <div className="w-full lg:w-3/5 space-y-4">
              <h3 className="font-bold text-xl lg:text-3xl">{product_title}</h3>
              <h4 className="font-medium text-lg lg:text-2xl">
                Price: $ {price}
              </h4>
              <button
                className={`px-3 py-1 border-2 rounded-full text-sm lg:text-base ${
                  availability
                    ? "text-green-700 border-green-600 bg-green-100"
                    : "text-red-700 border-red-600 bg-red-100"
                }`}
              >
                {availability ? "In Stock" : "Out of Stock"}
              </button>
              <p className="text-gray-500">{description}</p>
              <h4 className="font-bold">Specification:</h4>
              <ul className="text-gray-500">
                {Array.isArray(Specification) &&
                  Specification.map((item, idx) => (
                    <li key={idx}>
                      {idx + 1}. {item}
                    </li>
                  ))}
              </ul>
              <h4 className="font-bold">Rating:</h4>
              <div className="flex items-center gap-4">
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  value={rating}
                />
                <span className="bg-gray-300 px-3 py-1 rounded-full">
                  {rating}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleAddCard(details)}
                  className="flex items-center gap-2 bg-[#9538E2] text-white text-sm lg:text-base px-5 py-2 rounded-full"
                >
                  Add to Cart <FaShoppingCart />
                </button>
                <button
                  disabled={isDisabled}
                  onClick={() => handleWishlistBtn(details)}
                  className={`${
                    isDisabled ? "bg-gray-300" : "bg-transparent"
                  } p-1 rounded-full`}
                >
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
