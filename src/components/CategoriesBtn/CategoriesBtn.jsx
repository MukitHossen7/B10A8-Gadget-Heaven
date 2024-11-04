/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const CategoriesBtn = ({ categories }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="pt-3">
        <NavLink
          to="/categories/all-products"
          className={({ isActive }) =>
            isActive
              ? " btn  rounded-full w-full  bg-[#9538E2] text-white"
              : "  btn bg-slate-100  w-full rounded-full  "
          }
        >
          All Products
        </NavLink>
      </div>
      <div className="flex flex-col gap-4 ">
        {categories.map((category) => (
          <NavLink
            to={`/categories/${category.category}`}
            key={category.id}
            className={({ isActive }) =>
              isActive
                ? "px-10 btn  rounded-full  mb-3 bg-[#9538E2] text-white"
                : "px-10 btn bg-slate-100 rounded-full  "
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBtn;
