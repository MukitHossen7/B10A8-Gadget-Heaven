import bgImg from "../../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="rounded-2xl absolute left-48 top-[400px] p-5 border-4  bg-white/30">
      <div className=" w-[800px]  rounded-2xl">
        <img
          src={bgImg}
          className=" h-96 w-full object-cover rounded-2xl"
        ></img>
      </div>
    </div>
  );
};

export default BannerImg;
