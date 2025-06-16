import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Optionsbar() {
  const CartProducts = useSelector((state) => state.cart.products);
  const LovableProducts = useSelector((state) => state.love.products);
  return (
    <div className="w-full  lg:hidden flex justify-center items-center gap-1 px-4 py-5 bg-gray-200 fixed top-[92vh] z-50 shadow-2xl rounded-t-full">
      <div className="flex justify-around items-center gap-10 text-black">
        <FaSearch className="text-gray-800 size-[20px] cursor-pointer hover:text-themepurpl dark:hover:text-purple-300 transition hover:scale-125" />
        <NavLink to={"/favorites"}>
          <div className="relative">
            <FaHeart className="text-gray-800 size-[20px] cursor-pointer  dark:hover:text-purple-300 hover:text-themepurple transition hover:scale-125" />
            {LovableProducts.length > 0 && (
              <div className="bg-purple-700  hover:bg-themeyellow hover:text-black text-white px-2 py-1 absolute top-[-15px] right-[-15px] text-[10px] font-bold rounded-full">
                {LovableProducts.length}
              </div>
            )}
          </div>
        </NavLink>
        <IoPerson className="text-gray-800 size-[20px] cursor-pointer hover:text-themepurple dark:hover:text-purple-300 transition hover:scale-125" />
        <NavLink to={"/cart"}>
          <div className="relative">
            <FaShoppingCart className="text-gray-800 size-[20px] cursor-pointer  dark:hover:text-purple-300 hover:text-themepurple transition hover:scale-125" />
            {CartProducts.length > 0 && (
              <div className="bg-purple-700  hover:bg-themeyellow hover:text-black text-white px-2 py-1 absolute top-[-15px] right-[-15px] text-[10px] font-bold rounded-full">
                {CartProducts.length}
              </div>
            )}
          </div>
        </NavLink>

        <ThemeToggle />
      </div>
    </div>
  );
}

export default Optionsbar;
