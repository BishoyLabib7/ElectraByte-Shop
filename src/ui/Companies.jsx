import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

import Aos from "aos";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

const CompaniesData = [client1, client2, client3, client4, client5, client6];
function Companies() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="100"
      className="w-full bg-themepurple lg:px-20 px-3 py-5 m-auto"
    >
      <Slider className="w-full" {...settings}>
        <div>
          <img
            src={client1}
            className="w-[150px] opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110"
          />
        </div>
        <div>
          <img
            src={client2}
            className="w-[150px] opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110"
          />
        </div>{" "}
        <div>
          <img
            src={client3}
            className="w-[150px] opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110"
          />{" "}
        </div>
        <div>
          <img
            src={client4}
            className="w-[150px] opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110"
          />{" "}
        </div>
        <div>
          <img
            src={client5}
            className="w-[150px] opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Companies;
