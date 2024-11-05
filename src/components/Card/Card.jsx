import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/details/${product.product_id}`);
  };
  const { product_image, price, product_title } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-lg p-6 rounded-xl">
        <div className="rounded-xl h-full">
          <img
            src={product_image}
            alt="product"
            className="h-60 w-full object-cover rounded-xl "
          />
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-xl pb-3">{product_title}</h2>
          <p className="font-medium text-gray-500">Price : ${price}</p>
          <div className="mt-4">
            <button
              onClick={handleDetails}
              className="border-2 border-[#9538E2] px-5 py-3 rounded-full font-semibold text-[#9538E2]"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
