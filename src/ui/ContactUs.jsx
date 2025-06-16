import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import Aos from "aos";
import { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);
  return (
    <div id="contact" className="w-full lg:px-20 px-5 py-[40px]">
      <hr className="border-t py-3" />
      <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:gap-4 gap-10 mt-10">
        <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
          <img src={pay1} alt="" className="w-[50px] rounded-lg" />
          <img src={pay2} alt="" className="w-[50px] rounded-lg" />
          <img src={pay3} alt="" className="w-[50px] rounded-lg" />
          <img src={pay4} alt="" className="w-[50px] rounded-lg" />
        </div>
        <div className="lg:w-[60%] w-full flex flex-col justify-center items-center gap-4 flex-grow">
          <h5 className="text-2xl text-black font-semibold">
            Subscribe Newsletter
          </h5>
          <div>
            <input
              type="email"
              placeholder="Enter vaild email"
              className="lg:w-auto w-full capitalize px-6 py-[11px] rounded-l-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-themepurple transition-all"
            />
            <button className="bg-themepurple lg:w-auto w-full text-white hover:bg-themeyellow hover:text-black px-6 py-3 rounded-r-lg font-semibold">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="lg:w-[20%] w-full">
          <p className="lg:text-end text-center text-gray-500 ">
            &copy;2025 Power by Bishoy Labib
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
