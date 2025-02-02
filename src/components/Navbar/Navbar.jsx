import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { ProductsData } from "../../Layouts/MainLayouts";

const Navbar = () => {
  const { addCard } = useContext(ProductsData);
  const { addWishlist } = useContext(ProductsData);
  return (
    <div className="navbar bg-base-100 pt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "underline text-black font-bold" : ""
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "underline text-black font-bold" : ""
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? "underline text-black font-bold" : ""
              }
            >
              History
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-lg lg:text-xl font-bold ">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-11 px-1 ">
          <NavLink to="/">Home</NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "underline text-black font-bold" : ""
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "underline text-black font-bold" : ""
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "underline text-black font-bold" : ""
            }
          >
            History
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="p-2 lg:p-3 rounded-full relative border border-gray-300">
          <TiShoppingCart className="text-xl text-black" />
          <span className="bg-[#9538E2] text-white border border-white px-2  rounded-full absolute -top-3 -right-1">
            <span className="text-sm">{addCard.length}</span>
          </span>
        </div>
        <div className=" p-2 lg:p-3 rounded-full relative border border-gray-300">
          <CiHeart className="text-xl text-black" />
          <span className="bg-[#9538E2] text-white border border-white px-2  rounded-full absolute -top-3 -right-1">
            <span className="text-sm">{addWishlist.length}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
