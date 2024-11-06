import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { ProductsData } from "../../Layouts/MainLayouts";
const AddCart = () => {
  const { addCard } = useContext(ProductsData);

  return (
    <div className="">
      {addCard.map((cardValue, idx) => (
        <div
          key={idx}
          className="flex gap-8 mb-4 flex-row items-end lg:items-center p-8 bg-gray-100 rounded-xl justify-between"
        >
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-36 h-full lg:h-28  rounded-xl">
              <img
                src={cardValue.product_image}
                className="w-full lg:w-36 h-full lg:h-28 object-cover rounded-xl"
              ></img>
            </div>
            <div className=" flex items-start">
              <div>
                <h3 className="font-semibold text-lg lg:text-xl pb-3">
                  {cardValue.product_title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base pb-3">
                  {cardValue.description}
                </p>
                <p className="font-medium text-base lg:text-lg text-gray-700">
                  Price:${cardValue.price}
                </p>
              </div>
            </div>
          </div>
          <TiDelete className="text-9xl lg:text-4xl text-red-600" />
        </div>
      ))}
    </div>
  );
};

export default AddCart;
