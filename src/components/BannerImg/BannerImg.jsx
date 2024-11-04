import bgImg from "../../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="rounded-2xl absolute left-56 top-[400px]">
      <div className=" w-[800px] border-[12px]  bg-white/90 rounded-xl">
        <img src={bgImg} className=" h-96 w-full object-cover"></img>
      </div>
    </div>
  );
};

export default BannerImg;
