import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import Companies from "./Companies";
import Information from "./Information";
import ContactUs from "./ContactUs";
function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <Companies />
      <Information />
      <ContactUs />
      <div
        id="icon-box"
        className="lg:fixed hidden  bg-themepurple text-white p-3 rounded-full hover:bg-themepurple hover:text-black cursor-pointer bottom-6  right-6"
      >
        <Link to="home" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-[20px]" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
