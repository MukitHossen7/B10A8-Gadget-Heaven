import { TiDelete } from "react-icons/ti";

const AddWishlist = () => {
  return (
    <div>
      <div className="flex gap-8 flex-row items-center p-8 bg-gray-100 rounded-xl justify-between">
        <div className="flex gap-5">
          <div className="w-36 h-32 border-2 border-gray-600 rounded-xl">
            <img src=""></img>
          </div>
          <div className=" flex items-start">
            <div>
              <h3 className="font-semibold text-xl pb-2">
                Samsung Galaxy S23 Ultra
              </h3>
              <p className="text-gray-500 pb-2">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <p className="font-medium text-lg text-gray-700">Price:$999.99</p>
              <button className="px-6 py-2 bg-[#9538E2] rounded-full text-sm mt-2">
                Add to Card
              </button>
            </div>
          </div>
        </div>
        <TiDelete className="text-4xl text-red-600" />
      </div>
    </div>
  );
};

export default AddWishlist;
