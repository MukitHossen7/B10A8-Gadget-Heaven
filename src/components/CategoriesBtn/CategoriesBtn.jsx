import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const CategoriesBtn = ({ categories }) => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-10 py-3 rounded-full w-full lg:w-52 mb-3 bg-[#9538E2]"
            : " px-10 bg-slate-100 py-3 rounded-full w-full lg:w-52"
        }
      >
        All Products
      </NavLink>
      <div className="flex flex-col gap-3 mt-5">
        {categories.map((category) => (
          <NavLink
            to={`/categories/${category.category}`}
            key={category.id}
            className="px-10 bg-slate-100 py-3 rounded-full w-full lg:w-52"
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

CategoriesBtn.propTypes = {
  categories: PropTypes.object,
};
export default CategoriesBtn;
