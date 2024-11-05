import { useContext, useEffect } from "react";
import Heading from "../components/Heading/Heading";
import Navbar from "../components/Navbar/Navbar";
import { ProductsData } from "../Layouts/MainLayouts";

const History = () => {
  const { history } = useContext(ProductsData);
  useEffect(() => {
    document.title = "History Page";
  }, []);
  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-[#9538E2] py-8 rounded-xl mt-8">
        <Heading
          title="History"
          description="Gadget Heaven’s purchase history feature allows users to track their orders, view transaction details, and manage past purchases effortlessly."
        ></Heading>
      </div>
      <div className="flex justify-between items-center pt-8">
        <h3 className="font-bold text-xl">Your Purchase History</h3>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg">Count:({history.length})</h3>
        </div>
      </div>

      {history.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-8 mb-4 mt-8 flex-row items-center p-6 bg-gray-100 rounded-xl justify-between"
        >
          <div className="flex gap-5 items-center">
            <div className="w-36 h-28  rounded-xl">
              <img
                src={item.product_image}
                className="w-36 h-28 object-cover rounded-xl"
              ></img>
            </div>
            <div className=" flex items-start">
              <div>
                <h3 className="font-semibold text-xl pb-2">
                  {item.product_title}
                </h3>
                <p className="text-gray-500 pb-2">{item.description}</p>
                <p className="font-medium text-lg text-gray-700">
                  Price:${item.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
