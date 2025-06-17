import { useEffect } from "react";
import Aos from "aos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Starts from "../../ui/Starts";
import { FaQuoteLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
function Reviews() {
  const reviewdata = useSelector((state) => state.review.reviews);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      id="reviews"
      className="w-full bg-gray-100 lg:px-20 px-5 py-[80px] flex flex-col justify-center items-center gap-10"
    >
      <h4
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple font-semibold text-xl"
      >
        1300+ Customer reviews
      </h4>
      <p
        data-aos="zoom-in"
        data-aos-delay="50"
        className="text-black font-semibold text-[42px] leading-[40px]"
      >
        Our Customer Love
      </p>
      <Slider className="w-full" {...settings}>
        {reviewdata.map((review, index) => (
          <div>
            <div
              data-aos="zoom-in"
              data-aos-delay="50"
              key={index}
              className="w-full lg:p-10 px-3 flex flex-col justify-center gap-3 items-center "
            >
              <img
                loading="lazy"
                src={review.img}
                alt=""
                className="rounded-full w-[100px] m-auto"
              />
              <Starts rate={5} postion={"center"} />
              <p className="text-center text-gray-500 text-lg">{review.para}</p>
              <div className="flex justify-center items-center gap-5">
                <FaQuoteLeft className="fill-themepurple size-12" />
                <div className="mt-5">
                  <h4 className="capitalize text-black text-xl font-semibold leading-1">
                    {review.name}
                  </h4>
                  <p className=" capitalize mt-4 text-gray-500">
                    {review.post}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Reviews;
