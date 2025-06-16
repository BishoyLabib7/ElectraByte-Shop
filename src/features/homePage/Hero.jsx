import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import headset from "../../assets/headset.jpg";
import earbuds from "../../assets/earbuds.jpg";
import dslr from "../../assets/dslr.jpg";
import { useEffect } from "react";
import Aos from "aos";

const Offers = [
  {
    discount: "80",
    description: ["DSLR 360", "Camera"],
    image: dslr,
  },
  {
    discount: "50",
    description: ["Wireless", "Earbuds"],
    image: earbuds,
  },
  {
    discount: "75",
    description: ["Wireless", "headset"],
    image: headset,
  },
];
function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

  return (
    <div
      id="home"
      className="w-full flex justify-center items-center lg:h-[700px] h-[600px]"
    >
      <Slider className="w-full" {...settings}>
        {Offers.map((product) => (
          <div>
            {" "}
            <div
              className="w-full lg:h-[700px] h-[600px] lg:px-20 px-5 flex flex-col justify-center gap-10 items-start bg-cover bg-center bg-no-repeat  "
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <h1
                data-aos="zoom-in"
                data-aos-delay="50"
                className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl"
              >
                Get upto Discounts {product.discount}% Off
              </h1>
              <h2
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
              >
                {product.description[0]} <br /> {product.description[1]}
              </h2>
              <h3
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white text-2xl"
              >
                100% trusted{" "}
                <span className="text-themeyellow font-semibold">
                  Electronices Gadgets
                </span>
              </h3>
              <button
                data-aos="zoom-in"
                data-aos-delay="100"
                className="btn shadow-[0_9px_0_#f5e60d90] hover:shadow-[0_4px_0px_#f5e60d90] ease-out hover:translate-y-1 transition-all uppercase px-6 py-3 font-semibold text-black border border-themeyellow rounded-lg bg-themeyellow cursor-pointer"
              >
                online collections
              </button>
            </div>{" "}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
