import { MdDelete } from "react-icons/md";
import {
  removeCartProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../../services/useCart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Aos from "aos";
function OrderSummary({ products }) {
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

  // Calculate total price
  const total = products.reduce(
    (sum, p) => sum + p.price * (p.quantity || 1),
    0
  );
  const dispatch = useDispatch();
  // Add handler for delete
  const handleDelete = (id) => {
    dispatch(removeCartProduct(id));
  };
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="w-full md:w-[400px] bg-themewhite rounded-lg shadow-lg p-8 h-fit"
    >
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div>
        {products.map((product, idx) => (
          <div key={product.id}>
            <div
              key={idx}
              className="flex items-center justify-between py-2 gap-2"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-15 h-20 object-contain"
                />
                <div className="flex flex-col justify-start  items-start gap-5 ">
                  <span className="font-medium truncate">{product.name}</span>
                  <span className="text-purple-800 text-sm font-semibold">
                    ${(product.price * (product.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-end  items-end gap-5 ">
                <button
                  className="text-gray-300 hover:text-gray-800 transition cursor-pointer mt-6"
                  aria-label="Delete item"
                  onClick={() => handleDelete(product.id)}
                >
                  <MdDelete size={22} />
                </button>{" "}
                <span className="text-gray-400 font-semibold">
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      className={`bg-gray-200 ${
                        product.quantity <= 1 ? "opacity-20" : "cursor-pointer"
                      } text-gray-800 px-[5px] py-[0.5px] rounded-full hover:bg-gray-300 transition`}
                      onClick={() => handleDecrease(product.id)}
                      aria-label="Decrease quantity"
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>

                    <span className="text-gray-800">
                      {product.quantity || 1}
                    </span>
                    <button
                      className="bg-gray-200 text-gray-800 px-[5px] py-[0.5px] rounded-full hover:bg-gray-300 transition cursor-pointer"
                      onClick={() => handleIncrease(product.id)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </span>
              </div>
            </div>
            <hr />
          </div>
        ))}{" "}
      </div>
      <div className="flex justify-between items-center mt-6 text-lg font-bold">
        <span>Total Price:</span>
        <span className="text-purple-800">${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default OrderSummary;
