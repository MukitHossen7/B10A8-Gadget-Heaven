import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleShowDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="pt-12 ">
      <div className="flex flex-col items-center justify-center text-center w-full mx-auto lg:w-[1000px]">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl text-white">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-white pt-6 pb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button
          onClick={handleShowDashboard}
          className="px-7 py-3 text-[#9538E2] font-bold bg-white rounded-full"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
