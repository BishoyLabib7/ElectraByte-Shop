import Aos from "aos";
import { useEffect } from "react";
import logo from "../assets/electraLogo.png";
import logoDark from "../assets/electraLogo-dark.png";
import { useTheme } from "../context/ThemeContext";
function Information() {
  const { theme } = useTheme();

  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);
  return (
    <div className="w-full lg:px-20 px-5 py-[60px] by-gray-100 grid lg:grid-cols-5  grid-cols-1 justify-between items-center gap-10">
      <div data-aos="zoom-in" data-aos-delay="100">
        <div className="flex flex-col justify-center items-start gap-5 ">
          {" "}
          <img
            src={theme === "dark" ? logoDark : logo}
            alt=""
            className="w-[250px]"
          />
          <p className="text-gray-500 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam
            facilis atque ullam pariatur.Nemo eligendi officiis exercitationem
            officia reprehenderit.
          </p>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="ml-[80px] lg:block hidden"
      >
        <h4 className="text-black text-xl font-semibold capitalize">
          Useful links
        </h4>
        <ul className="mt-8 flex flex-col justify-center items-start gap-2">
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Home
          </li>

          <li className="text-gray-500 cursor-pointer hover:text-black">
            About
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Services
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Blogs
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Contact
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className="lg:block hidden">
        <h4 className="text-black text-xl font-semibold capitalize">
          Information
        </h4>
        <ul className="mt-8 flex flex-col justify-center items-start gap-2">
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Return Policy
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Privacy Policy
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Refund Policy
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Agreement
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            We Our Brand
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className="lg:block hidden">
        <h4 className="text-black text-xl font-semibold capitalize">
          Top Category
        </h4>
        <ul className="mt-8 flex flex-col justify-center items-start gap-2">
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Wireless headphone
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Bluetooth speakers
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Portable devices
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Monio live camera
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Movie projector T6
          </li>
        </ul>
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className="lg:block hidden">
        <h4 className="text-black text-xl font-semibold capitalize">
          Contact Info
        </h4>
        <ul className="mt-8 flex flex-col justify-center items-start gap-2">
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Phone: +201070400104
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            Email: info@domain.com
          </li>
          <li className="text-gray-500 cursor-pointer hover:text-black">
            90 ahmed Qamha street, ALASEEL Tower, Bab Sharq, Alexandria
            Governorate
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Information;
