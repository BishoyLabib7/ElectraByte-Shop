import { useSelector } from "react-redux";

import Payment from "../features/checkout/Payment";
import OrderSummary from "../features/checkout/OrderSummary";

function Checkout() {
  // Get cart products from Redux
  const products = useSelector((state) => state.cart.products);

  return (
    <div className=" flex flex-col md:flex-row gap-8 p-4 md:p-12 bg-gray-200">
      {/* Left: Steps */}
      <Payment />
      {/* Right: Order Summary */}
      <OrderSummary products={products} />
    </div>
  );
}

export default Checkout;
