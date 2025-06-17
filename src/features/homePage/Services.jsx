import { useEffect } from "react";
import Aos from "aos";
import payment from "../../assets/payment.png";
import shopping from "../../assets/shipping.png";
import returnn from "../../assets/return.png";
import gift from "../../assets/gift.png";

const ServicesData = [
  {
    name: "Worldwide Shipping",
    description: "Delivering your order, globally, fast.",
    image: shopping,
  },
  {
    name: "Secure Payment",
    description: "Safe, encrypted, easy transactions.",
    image: payment,
  },
  {
    name: "Return",
    description: "Hassle-free returns, money back.",
    image: returnn,
  },
  {
    name: "Best Gift Voucher",
    description: "Perfect present, instant delight.",
    image: gift,
  },
];

function Services() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);
  return (
    <div className="w-full lg:px-20 px-3 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10">
      {ServicesData.map((service) => (
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="flex flex-col justify-center items-center gap-3"
        >
          <img
            loading="lazy"
            src={service.image}
            alt=""
            className="w-[60px] mb-[20px]"
          />
          <h3 className="font-semibold text-xl">{service.name}</h3>
          <p className="text-[17px] text-gray-500">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
