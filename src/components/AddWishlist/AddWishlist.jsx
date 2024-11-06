import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { ProductsData } from "../../Layouts/MainLayouts";

const AddWishlist = () => {
  const { addWishlist } = useContext(ProductsData);
  console.log(addWishlist);
  return (
    <div>
      {addWishlist.map((wishValue, idx) => (
        <div
          key={idx}
          className="flex mb-4 gap-8 items-end lg:items-center p-5 bg-gray-100 rounded-xl justify-between"
        >
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-36 h-full lg:h-32 rounded-xl">
              <img
                src={wishValue.product_image}
                className="w-full lg:w-36 h-full lg:h-32 object-cover rounded-xl"
              ></img>
            </div>
            <div className=" flex items-start">
              <div>
                <h3 className="font-semibold text-lg lg:text-xl pb-2">
                  {wishValue.product_title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base pb-2">
                  {wishValue.description}
                </p>
                <p className="font-medium text-base lg:text-lg text-gray-700">
                  Price:${wishValue.price}
                </p>
                <button className="px-6 py-2 text-xs lg:text-sm bg-[#9538E2] rounded-full  mt-2">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
          <TiDelete className="text-9xl lg:text-4xl text-red-600" />
        </div>
      ))}
    </div>
  );
};

export default AddWishlist;
