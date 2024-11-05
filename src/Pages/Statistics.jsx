import { useEffect } from "react";
import Heading from "../components/Heading/Heading";
import Navbar from "../components/Navbar/Navbar";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics Page";
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#9538E2] mt-8 py-7 rounded-xl">
        <Heading
          title="Statistics"
          description="Gadget Heaven offers in-depth statistics on the latest gadgets, analyzing user ratings, market trends, and device performance. Discover insights to guide your tech purchases confidently"
        ></Heading>
      </div>
      <h1 className="font-bold text-5xl text-[#9538E2] text-center pt-10">
        No Data To Show Statistics
      </h1>
    </div>
  );
};

export default Statistics;
