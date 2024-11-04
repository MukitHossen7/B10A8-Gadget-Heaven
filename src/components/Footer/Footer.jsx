const Footer = () => {
  return (
    <div className="mt-28 py-14">
      <div className="flex flex-col items-center justify-center gap-3 ">
        <h1 className="text-3xl font-bold f">Gadget Heaven</h1>
        <p className="font-medium text-base text-gray-400">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider w-11/12 mx-auto"></div>
      <footer className="footer w-11/12 auto flex flex-col lg:flex-row justify-around  items-center gap-8 ">
        <div className=" flex flex-col">
          <h6 className="text-lg font-bold">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </div>
        <div className="flex flex-col ">
          <h6 className="text-lg font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div className="flex flex-col ">
          <h6 className="text-lg font-bold">Legal</h6>

          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
