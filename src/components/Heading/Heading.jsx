/* eslint-disable react/prop-types */
const Heading = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-3">
      <h2 className="font-semibold text-3xl text-white ">{title}</h2>
      <p className="text-base text-white w-[700px]">{description}</p>
    </div>
  );
};

export default Heading;
