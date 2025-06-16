import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

import logo from "../assets/electraLogo.png";
import logoDark from "../assets/electraLogo-dark.png";
function Sidebar({ close }) {
  const { theme } = useTheme();
  const navItems = [
    { name: "Home", link: "home" },
    { name: "Products", link: "products" },
    { name: "Services", link: "services" },
    { name: "Reviews", link: "reviews" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="5"
      className="w-64 flex flex-col justify- items-center gap-1 px-1  py-1 bg-gray-200 fixed h-full z-100"
    >
      <img
        src={theme === "dark" ? logoDark : logo}
        alt=""
        className="w-[200px]"
      />
      <nav className="flex flex-col justify-start items-start gap-8 mt-8">
        {navItems.map(({ name, link }) => (
          <Link
            key={name}
            to={link}
            offset={-100}
            smooth={true}
            spy={true}
            onClick={close}
            duration={500}
            className="text-gray-800 text-sm uppercase font-semibold cursor-pointer px-4 py-2  hover:text-white hover:bg-themepurple transition-all duration-300 rounded-lg dark:hover:bg-purple-400 hover:scale-110"
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
