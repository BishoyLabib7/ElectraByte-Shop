import Aos from "aos";
import { useEffect } from "react";
import cat1 from "../../assets/cat1.jpg";
import cat2 from "../../assets/cat2.jpg";
import cat3 from "../../assets/cat3.jpg";
import cat4 from "../../assets/cat4.jpg";
import cat5 from "../../assets/cat5.jpg";

const categorysData = [
  { name: "Popular Category", image: cat1 },
  { name: "Air Conditioners", image: cat2 },
  { name: "EV Charging cable", image: cat3 },
  { name: "DVD Player slot", image: cat4 },
  { name: "360 Camera", image: cat5 },
];

function Category() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

  return (
    <div
      id="category"
      className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center  items-center gap-[50px]"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="lg:w-[15%] w-full flex flex-col  justify-center lg:items:start items-center gap-[20px]"
      >
        <h3 className="text-blue-950 font-semibold text-[30px] leading-[50px] text-center">
          Popular Category
        </h3>
        <button className="bg-themepurple hover:bg-themeyellow hover:text-black  border-0 rounded-lg text-white font-semibold  py-3 px-8 uppercase cursor-pointer transition-all">
          View more
        </button>
      </div>
      {/* Items */}
      <div className="lg:w-[85%] w-[60%] grid lg:grid-cols-5  grid-cols-1 justify-center items-start gap-10">
        {categorysData.map((category) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="flex flex-col justify-center items-center gap-6 cursor-pointer "
          >
            <img
              src={category.image}
              alt={`${category} category`}
              className=" rounded-full transition-all duration-300 hover:scale-110"
            />
            <h4 className="text-gray-900 text-xl font-semibold hover:text-themepurple">
              {category.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
