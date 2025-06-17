import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Optionsbar({ setAuth }) {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  function handleAuth(path) {
    if (user.valid) {
      navigate(path);
      return;
    }
    setAuth((Auth) => !Auth);
    return;
  }

  const CartProducts = useSelector((state) => state.cart.products);
  const LovableProducts = useSelector((state) => state.love.products);

  return (
    <div className="w-full  lg:hidden flex justify-center items-center gap-1 px-4 py-3 bg-gray-200 fixed top-[94dvh] z-50 shadow-2xl rounded-t-full">
      <div className="flex justify-around items-start gap-6 text-black">
        <div className="relative py-1" onClick={() => handleAuth("/favorites")}>
          <FaHeart className="text-gray-800 size-[20px] cursor-pointer dark:hover:text-purple-300 hover:text-themepurple transition hover:scale-125" />
          {LovableProducts.length > 0 && (
            <div className="bg-purple-700  hover:bg-themeyellow hover:text-black text-white px-2 py-1 absolute top-[-10px] right-[-10px] text-[8px] font-bold rounded-full">
              {LovableProducts.length}
            </div>
          )}
        </div>

        <div className="relative py-1" onClick={() => handleAuth("/cart")}>
          <FaShoppingCart className="text-gray-800 size-[20px] cursor-pointer  dark:hover:text-purple-300 hover:text-themepurple transition hover:scale-125" />
          {CartProducts.length > 0 && (
            <div className="bg-purple-700  hover:bg-themeyellow hover:text-black text-white px-2 py-1 absolute top-[-10px] right-[-10px] text-[8px] font-bold rounded-full">
              {CartProducts.length}
            </div>
          )}
        </div>
        <div
          onClick={() => handleAuth("/")}
          className="flex justify-center items-center gap-1 bg-themepurple py-1 px-2 rounded-full transition hover:scale-105"
        >
          <IoPerson className="text-[#fff] size-[20px] cursor-pointer hover:text-themepurple dark:hover:text-purple-300 " />
          {user?.name && (
            <span className="text-[#fff]  font-semibold">
              {user?.name.split(" ")[0]}
            </span>
          )}
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}

export default Optionsbar;
