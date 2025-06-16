import Aos from "aos";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeloveProduct } from "../../services/useLove";
import { IoIosHeartDislike } from "react-icons/io";

function ListOfProducts({ products }) {
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({ offset: 100, duration: 500, easing: "ease-in-out" });
    Aos.refresh();
  }, []);

  // Add handler for delete
  const handleDelete = (id) => {
    dispatch(removeloveProduct(id));
  };

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

                <td className="px-4 py-3">
                  <button
                    className="ml-2 text-red-600 hover:text-red-800 transition cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                    aria-label="Delete item"
                  >
                    <IoIosHeartDislike size={22} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListOfProducts;
