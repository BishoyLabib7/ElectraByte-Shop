import { useSelector } from "react-redux";

import NoData from "../features/cart/NoData";

import ListOfProducts from "../features/cart/ListOfProducts";

function Cart() {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="container mx-auto px-4 py-8 min-h-96 md:px-16 lg:px-24">
      {products.length > 0 ? (
        <ListOfProducts products={products} />
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default Cart;
