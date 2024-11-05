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
          className="flex gap-8 flex-row items-center p-8 bg-gray-100 rounded-xl justify-between"
        >
          <div className="flex gap-5">
            <div className="w-36 h-32 rounded-xl">
              <img
                src={wishValue.product_image}
                className="w-36 h-28 object-cover rounded-xl"
              ></img>
            </div>
            <div className=" flex items-start">
              <div>
                <h3 className="font-semibold text-xl pb-2">
                  {wishValue.product_title}
                </h3>
                <p className="text-gray-500 pb-2">{wishValue.description}</p>
                <p className="font-medium text-lg text-gray-700">
                  Price:${wishValue.price}
                </p>
                <button className="px-6 py-2 bg-[#9538E2] rounded-full text-sm mt-2">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
          <TiDelete className="text-4xl text-red-600" />
        </div>
      ))}
    </div>
  );
};

export default AddWishlist;
