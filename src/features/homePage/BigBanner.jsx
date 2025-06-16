import Aos from "aos";
import { useEffect } from "react";
import deal from "../../assets/deal-bg.jpg";
function BigBanner() {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);
  return (
    <div className="w-full lg:px-20 px-5 py-[80px]">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="h-[300px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4"
        style={{ backgroundImage: `url(${deal})` }}
      >
        <p className="text-themeyellow text-lg font-semibold">
          Every day shopping
        </p>
        <h4 className="text-white text-[42px] leading-[50px] font-bold">
          Deal of the Day
        </h4>
        <button className="mt-5 btn shadow-[0_9px_0_#f5e60d90] hover:shadow-[0_4px_0px_#f5e60d90] ease-out hover:translate-y-1 transition-all uppercase px-6 py-3 font-semibold text-black border border-themeyellow rounded-lg bg-themeyellow cursor-pointer">
          Shop now
        </button>
      </div>
    </div>
  );
}

export default BigBanner;
