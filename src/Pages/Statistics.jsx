import Heading from "../components/Heading/Heading";
import Navbar from "../components/Navbar/Navbar";

const Statistics = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#9538E2] mt-8 py-7 rounded-xl">
        <Heading
          title="Statistics"
          description="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
      </div>
      <h1 className="font-bold text-5xl text-[#9538E2] text-center pt-10">
        No Data To Show Statistics
      </h1>
    </div>
  );
};

export default Statistics;
