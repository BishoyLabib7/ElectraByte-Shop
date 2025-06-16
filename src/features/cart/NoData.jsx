import { Link } from "react-router-dom";
import emptyCart from "../../assets/empty-cart.png";
function NoData() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br text-gray-400 transition-colors">
      <img src={emptyCart} alt="Empty cart" className="w-[30%]" />
      <h3 className="text-black font-semibold text-xl mb-3">
        No favorites content
      </h3>
      <p>Explore more and shortlist some items</p>
      <Link
        to={"/"}
        className="mt-5 bg-themepurple hover:bg-themeyellow hover:text-black border-0 rounded-lg text-white font-semibold py-3 px-8 uppercase cursor-pointer transition-all"
      >
        Add favorites
      </Link>
    </div>
  );
}

export default NoData;
