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
    </div>
  );
};

export default History;
