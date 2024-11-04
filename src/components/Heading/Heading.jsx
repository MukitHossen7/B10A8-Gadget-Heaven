/* eslint-disable react/prop-types */
const Heading = ({ title, description }) => {
  return (
    <div>
      <h2 className="font-semibold text-3xl text-white">{title}</h2>
      <p className="text-base text-white">{description}</p>
    </div>
  );
};

export default Heading;
