import { useState } from "react";
import { useLocation } from "react-router-dom";
import { setProductFeedback } from "../services/useProducts";
import { useSelector, useDispatch } from "react-redux";
import Starts from "../ui/Starts";
import { FaStar } from "react-icons/fa";

function Card() {
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products).find(
    (item) => item.id == id
  );

  const [myFeedback, setMyFeedback] = useState("");
  const [myRate, setMyRate] = useState(5);
  const [hoverRate, setHoverRate] = useState(null);
  const allFeedbacks = product?.feedbacks || [];

  // Calculate price after discount
  const priceAfterDiscount =
    product?.price - (product?.price * (product?.discout || 0)) / 100;

  const handleAddFeedback = (e) => {
    e.preventDefault();
    if (myFeedback.trim()) {
      dispatch(
        setProductFeedback({
          id: product.id,
          feedbacks: [
            ...allFeedbacks,
            { name: "You", rate: myRate, text: myFeedback },
          ],
        })
      );
      setMyFeedback("");
      setMyRate(5);
    }
  };

  return (
    <div className="w-[90%] mx-auto bg-themewhite rounded-lg shadow-lg overflow-hidden mt-10 mb-8">
      {/* First Box: Product Info */}
      <div className="flex flex-col md:flex-row p-6 gap-6 ">
        <img
          src={product.img}
          alt={product.name}
          className="w-full md:w-64 h-64 object-contain rounded-lg bg-gray-50"
        />
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2">
              Category:{" "}
              <span className="font-semibold">{product.category}</span>
            </p>
            <p className="text-gray-700 mb-4">
              {product.details || "No details provided."}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-lg text-gray-600 line-through">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-2xl font-bold text-purple-700">
              ${priceAfterDiscount.toFixed(2)}
            </span>
            {product.discout > 0 && (
              <span className="text-green-600 font-semibold">
                Save {product.discout}%
              </span>
            )}
          </div>
        </div>
      </div>
      <hr />
      {/* Second Box: Feedback */}
      <div className="p-6 bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Client Feedback</h3>
        <div className="flex flex-col gap-4 mb-6">
          {allFeedbacks.length === 0 && (
            <div className="text-gray-400">No feedback yet.</div>
          )}
          {allFeedbacks.map((fb, idx) => (
            <div key={idx} className="bg-themewhite rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-800">{fb.name}</span>
                <Starts rate={fb.rate} postion="start" />
              </div>
              <div className="text-gray-700 mb-2">{fb.text}</div>
            </div>
          ))}
        </div>{" "}
      </div>
      <hr />
      <div className="p-6 bg-gray-100 pt-4">
        <h4 className="font-semibold mb-2">Add Your Feedback</h4>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-700">Your Rate:</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((r) => (
              <span
                key={r}
                onMouseEnter={() => setHoverRate(r)}
                onMouseLeave={() => setHoverRate(null)}
                onClick={() => setMyRate(r)}
                className={`cursor-pointer transition-transform ${
                  (hoverRate || myRate) >= r
                    ? "text-yellow-400 scale-125    "
                    : "text-gray-300"
                }`}
              >
                <FaStar />
              </span>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">{myRate} / 5</span>
        </div>
        <textarea
          className="w-full border border-gray-50 hover:border-gray-30 bg-themewhite rounded p-2 mb-2"
          rows={2}
          placeholder="Write your feedback..."
          value={myFeedback}
          onChange={(e) => setMyFeedback(e.target.value)}
        />
        <button
          className="bg-themepurple text-white px-4 py-2 rounded cursor-pointer font-semibold hover:bg-themeyellow hover:text-black transition"
          onClick={handleAddFeedback}
        >
          Add Feedback
        </button>
      </div>
    </div>
  );
}

export default Card;
