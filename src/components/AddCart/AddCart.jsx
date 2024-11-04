import { TiDelete } from "react-icons/ti";
const AddCart = () => {
  return (
    <div>
      <div className="flex gap-8 flex-row items-center p-8 bg-gray-100 rounded-xl justify-between">
        <div className="flex gap-5">
          <div className="w-36 h-28 border-2 border-gray-600 rounded-xl">
            <img src=""></img>
          </div>
          <div className=" flex items-start">
            <div>
              <h3 className="font-semibold text-xl pb-3">
                Samsung Galaxy S23 Ultra
              </h3>
              <p className="text-gray-500 pb-3">
                Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
                display.
              </p>
              <p className="font-medium text-lg text-gray-700">Price:$999.99</p>
            </div>
          </div>
        </div>
        <TiDelete className="text-4xl text-red-600" />
      </div>
    </div>
  );
};

export default AddCart;
