import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div className="w-11/12 lg:w-11/12 xl:w-11/12 xl:container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-336px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
