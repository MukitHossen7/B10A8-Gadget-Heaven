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
              ? "px-10 py-3 rounded-full w-full 2  bg-[#9538E2] text-white"
              : " px-10 bg-slate-100 py-3 rounded-full w-full "
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
                ? "px-10 py-3 rounded-full  mb-3 bg-[#9538E2] text-white"
                : "px-10 bg-slate-100 py-3 rounded-full  "
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
