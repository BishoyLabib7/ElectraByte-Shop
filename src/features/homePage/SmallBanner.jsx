import Aos from "aos";
import { useEffect } from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const BannerData = [
  {
    offer: "60",
    name: "Wireless Device",
    image: banner1,
  },
  {
    offer: "30",
    name: "Wired Earbuds",
    image: banner2,
  },
  {
    offer: "80",
    name: "Smart Watches",
    image: banner3,
  },
];

function SmallBanner() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

  return (
    <div
      id="services"
      className="w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10"
    >
      {BannerData.map((banner) => (
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          key={banner.name}
          className="bg-cover bg-center p-10 rounded-lg flex flex-col justify-center items-end gap-6"
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <h3 className="px-6 py-2 text-themeyellow  rounded-lg border border-themeyellow">
            {banner.offer}% offer
          </h3>
          <h3 className=" text-white text-4xl font-semibold text-end">
            {banner.name.split(" ")[0]} <br />
            {banner.name.split(" ")[1]}
          </h3>
          <button className="bg-themeyellow px-6 py-3 rounded-lg text-black uppercase font-semibold">
            Shop now
          </button>
        </div>
      ))}
    </div>
  );
}

export default SmallBanner;
