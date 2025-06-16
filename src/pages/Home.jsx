import SmallBanner from "../features/homePage/SmallBanner";
import BigBanner from "../features/homePage/BigBanner";
import Category from "../features/homePage/Category";
import Hero from "../features/homePage/Hero";
import ProductsGrid from "../features/homePage/ProductsGrid";
import Reviews from "../features/homePage/Reviews";
import Services from "../features/homePage/Services";
import { products } from "../data/export";
import { reviewdata } from "../data/export";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../services/useProducts";
import { setReviews } from "../services/useReview";

function Home() {
  const dispation = useDispatch();
  useEffect(() => {
    dispation(setProducts(products));
    dispation(setReviews(reviewdata));
  }, [dispation]);

  return (
    <>
      <Hero />
      <Category />
      <SmallBanner />
      <Services />
      <ProductsGrid />
      <BigBanner />
      <Reviews />
    </>
  );
}

export default Home;
