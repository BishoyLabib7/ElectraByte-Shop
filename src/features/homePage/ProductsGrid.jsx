import { useEffect } from "react";
import Aos from "aos";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import Starts from "../../ui/Starts";
import { useDispatch, useSelector } from "react-redux";
import { addCartProduct } from "../../services/useCart";
import { addLoveProduct } from "../../services/useLove";

function ProductsGrid() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  function handelAddCart(e, item) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addCartProduct(item));
  }
  function handelLovable(e, item) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addLoveProduct(item));
  }
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

  return (
    <div
      id="products"
      className="w-full lg:px-20 px-5 py-[80px] flex flex-col justify-center items-center bg-gray-100"
    >
      <h3
        data-aos="zoom-in"
        data-aos-delay="100"
        className="font-semibold text-gray-800   text-xl"
      >
        Browse Collection
      </h3>
      <h4
        data-aos="zoom-in"
        data-aos-delay="100"
        className="font-semibold text-center text-black text-[42px] leading-[50px]"
      >
        Trending Products
      </h4>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10 "
      >
        {products.map((item, index) => (
          <div
            id="product-box"
            key={index}
            className="flex flex-col justify-center items-center gap-2 bg-white p-2   rounded-lg cursor-pointer relative transition-all duration-300 hover:scale-110"
          >
            <div
              id="icons"
              className="flex flex-row gap-3 justify-center items-center absolute top-[15px]"
            >
              <div className="bg-themepurple hover:bg-themeyellow hover:text-black text-white rounded-full p-3 ">
                <MdOutlineRemoveRedEye />
              </div>{" "}
              <div
                onClick={(e) => handelLovable(e, item)}
                className="bg-themepurple hover:bg-themeyellow hover:text-black text-white rounded-full p-3 "
              >
                <FaRegHeart />
              </div>
              <div
                onClick={(e) => handelAddCart(e, item)}
                className="bg-themepurple hover:bg-themeyellow hover:text-black text-white rounded-full p-3 "
              >
                <MdAddShoppingCart />
              </div>
            </div>

            <img src={item.img} alt="" />

            <h4 className="text-lg text-gray-100 font-semibold">
              {item.category}
            </h4>

            <p className="text-2xl text-[#232426] font-semibold">{item.name}</p>

            <p className="text-themepurple text-xl font-semibold">
              ${item.price}
            </p>
            <div className="w-full mt-2">
              <hr />
              <div className="flex justify-between items-center mt-3 gap-6">
                <Starts rate={item.rate} />
                <button className="text-[15px] font-semibold text-white bg-green-500 py-2 px-5 rounded-lg uppercase cursor-pointer ">
                  sale {item.discout} %
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="100"
        className="mt-8 bg-themepurple hover:bg-themeyellow hover:text-black  border-0 rounded-lg text-white font-semibold  py-3 px-8 uppercase cursor-pointer transition-all"
      >
        View more
      </button>
    </div>
  );
}

export default ProductsGrid;
