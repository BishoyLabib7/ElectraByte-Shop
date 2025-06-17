import ThemeToggle from "./ThemeToggle";
import logo from "../assets/electraLogo.png";
import logoDark from "../assets/electraLogo-dark.png";
import { useTheme } from "../context/ThemeContext";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaXmark, FaBars, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Optionsbar from "./Optionsbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Popup from "../features/homePage/Popup";

function Header() {
  const CartProducts = useSelector((state) => state.cart.products);
  const LovableProducts = useSelector((state) => state.love.products);
  const user = useSelector((state) => state.user.user);
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

  const [open, setOpen] = useState(false);
  const [Auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setOpen(!open);
  };
  function handleAuth(path) {
    if (user.valid) {
      navigate(path);
      return;
    }
    setAuth((Auth) => !Auth);
    return;
  }
  const navHomeItems = [
    { name: "Products", link: "products" },
    { name: "Services", link: "services" },
    { name: "Reviews", link: "reviews" },
    { name: "Contact", link: "contact" },
  ];
  const navItems = [{ name: "Contact", link: "contact" }];
  return (
    <>
      {" "}
      {open && <Sidebar close={toggleMenu} />}
      <div className="w-full lg:flex hidden justify-between items-center lg:px-16 px-5 py-2 bg-themeyellow">
        <h1 className="text-sm text-black font-semibold flex justify-center items-center gap-2">
          <FaPhoneVolume className="size-[18px]" />
          <span>+201070400104</span>
        </h1>
        <h1 className="text-sm text-black font-semibold flex justify-center items-center gap-2">
          <FaMapMarkedAlt className="size-[18px]" />
          <span>ALASEEL Tower, Bab Sharq, Alexandria Governorate</span>
        </h1>
        <h1 className="text-sm text-black font-semibold flex justify-center items-center gap-2">
          <MdEmail className="size-[18px]" />
          <span>electrabyte@company.com</span>
        </h1>
      </div>
      <div className="w-full  flex justify-between items-center gap-1 lg:px-16 px-4 lg:py-5 py-3 bg-gray-100 sticky top-0 z-50 shadow-2xl">
        <img
          src={theme === "dark" ? logoDark : logo}
          alt=""
          className="w-[200px]"
        />
        <nav className="lg:flex hidden justify-center items-center gap-8">
          <NavLink
            to="/"
            className="text-gray-800 text-sm uppercase font-semibold cursor-pointer px-4 py-2  hover:text-white hover:bg-themepurple transition-all duration-300 rounded-lg dark:hover:bg-purple-400 hover:scale-110"
          >
            Home
          </NavLink>
          {location.pathname === "/"
            ? navHomeItems.map(({ name, link }) => (
                <Link
                  key={`/${name}`}
                  to={link}
                  offset={-100}
                  smooth={true}
                  spy={true}
                  duration={500}
                  className="text-gray-800 text-sm uppercase font-semibold cursor-pointer px-4 py-2  hover:text-white hover:bg-themepurple transition-all duration-300 rounded-lg dark:hover:bg-purple-400 hover:scale-110"
                >
                  {name}
                </Link>
              ))
            : navItems.map(({ name, link }) => (
                <Link
                  key={`/${name}`}
                  to={link}
                  offset={-100}
                  smooth={true}
                  spy={true}
                  duration={500}
                  className="text-gray-800 text-sm uppercase font-semibold cursor-pointer px-4 py-2  hover:text-white hover:bg-themepurple transition-all duration-300 rounded-lg dark:hover:bg-purple-400 hover:scale-110"
                >
                  {name}
                </Link>
              ))}
        </nav>
        <div className="lg:flex hidden justify-center items-center gap-6 text-black">
          <div className="relative" onClick={() => handleAuth("/favorites")}>
            <FaHeart className="text-gray-800 size-[20px] cursor-pointer dark:hover:text-purple-300 hover:text-themepurple transition hover:scale-125" />
            {LovableProducts.length > 0 && (
              <div className="bg-purple-700  hover:bg-themeyellow hover:text-black text-white px-2 py-1 absolute top-[-15px] right-[-15px] text-[10px] font-bold rounded-full">
                {LovableProducts.length}
              </div>
            )}
          </div>

          <div className="relative" onClick={() => handleAuth("/cart")}>
            <FaShoppingCart className="text-gray-800 size-[20px] cursor-pointer  dark:hover:text-purple-300 hover:text-themepurple transition hover:scale-125" />
            {CartProducts.length > 0 && (
              <div className="bg-purple-700  hover:bg-themeyellow hover:text-black text-white px-2 py-1 absolute top-[-15px] right-[-15px] text-[10px] font-bold rounded-full">
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
        <div
          className="flex justify-center items-center lg:hidden mt-2 "
          onClick={toggleMenu}
        >
          <div>
            {open ? (
              <FaXmark className="text-purple-800 text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-purple-800 text-3xl cursor-pointer" />
            )}
          </div>{" "}
        </div>
      </div>
      <Optionsbar />
      {Auth && <Popup orderPopup={Auth} setOrderPopup={setAuth} />}
    </>
  );
}

export default Header;
