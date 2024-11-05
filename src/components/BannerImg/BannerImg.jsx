import bgImg from "../../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="rounded-2xl absolute left-0 right-0 mx-60 top-[400px] p-3  border-2  bg-white/30">
      <div className="rounded-2xl">
        <img
          src={bgImg}
          className=" h-96 w-full object-cover rounded-2xl"
        ></img>
      </div>
    </div>
  );
};

export default BannerImg;
