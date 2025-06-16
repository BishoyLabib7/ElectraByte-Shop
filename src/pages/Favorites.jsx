import NoData from "../features/Favorites/NoData";
import ListOfProducts from "../features/Favorites/ListOfProducts";
import { useSelector } from "react-redux";

function Favorites() {
  const products = useSelector((state) => state.love.products);

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

export default Favorites;
