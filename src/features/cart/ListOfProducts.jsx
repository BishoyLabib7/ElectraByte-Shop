import Aos from "aos";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  removeCartProduct,
  increaseQuantity,
  decreaseQuantity,
} from "../../services/useCart";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ListOfProducts({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

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

  // Calculate total price
  const total = products.reduce(
    (sum, p) => sum + p.price * (p.quantity || 1),
    0
  );

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      className="bg-themewhite rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 ">Your Cart</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600  uppercase">
                Image
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600  uppercase">
                Category
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600  uppercase">
                Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600  uppercase">
                Price
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-600  uppercase">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="bg-themewhite  divide-y divide-gray-200 ">
            {products.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50  transition">
                <td className="px-4 py-3">
                  <img
                    src={product.img}
                    alt={product.name || "Product"}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                </td>
                <td className="px-4 py-3 text-gray-700 font-medium">
                  {product.category || "-"}
                </td>
                <td className="px-4 py-3 text-gray-900  font-semibold">
                  {product.name || "-"}
                </td>
                <td className="px-4 py-3 text-blue-600  font-bold">
                  ${product.price?.toFixed(2) || "-"}
                </td>
                <td className="px-4 py-3 text-center text-gray-900 font-semibold">
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      className={`bg-gray-200 ${
                        product.quantity <= 1 ? "opacity-20" : "cursor-pointer"
                      } text-gray-800 px-2 py-1 rounded hover:bg-gray-300 transition`}
                      onClick={() => handleDecrease(product.id)}
                      aria-label="Decrease quantity"
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>

                    <span>{product.quantity || 1}</span>
                    <button
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-300 transition cursor-pointer"
                      onClick={() => handleIncrease(product.id)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 flex items-center gap-2  justify-center">
                  <button
                    className="text-red-600 hover:text-red-800 transition cursor-pointer mt-6"
                    onClick={() => handleDelete(product.id)}
                    aria-label="Delete item"
                  >
                    <MdDelete size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <div className="text-xl font-bold text-gray-800">
          Total: <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
        <button
          className="bg-blue-800 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow transition-all text-lg"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default ListOfProducts;
