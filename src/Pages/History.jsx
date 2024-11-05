import Heading from "../components/Heading/Heading";
import Navbar from "../components/Navbar/Navbar";

const History = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="bg-[#9538E2] py-8 rounded-xl mt-8">
        <Heading
          title="History"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
      </div>
      <div className="flex justify-between items-center pt-8">
        <h3 className="font-bold text-xl">Your Purchase History</h3>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-lg">Total cost:$(0)</h3>
          <h3 className="font-semibold text-lg">Count:(0)</h3>
        </div>
      </div>

      <div className="flex gap-8 mb-4 mt-8 flex-row items-center p-6 bg-gray-100 rounded-xl justify-between">
        <div className="flex gap-5 items-center">
          <div className="w-36 h-28  rounded-xl border-2 border-gray-600">
            <img src="" className="w-36 h-28 object-cover rounded-xl"></img>
          </div>
          <div className=" flex items-start">
            <div>
              <h3 className="font-semibold text-xl pb-2">
                Portable Charger 10000mAh
              </h3>
              <p className="text-gray-500 pb-2">
                Compact 10000mAh portable charger for fast, on-the-go charging.
              </p>
              <p className="font-medium text-lg text-gray-700">Price:$0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
