/* eslint-disable react/prop-types */
const Heading = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3">
      <h2 className="font-semibold text-2xl lg:text-3xl text-white ">
        {title}
      </h2>
      <p className="text-sm lg:text-base text-white w-full lg:w-[700px]">
        {description}
      </p>
    </div>
  );
};

export default Heading;
