import { products } from "../data/export";
import { reviewdata } from "../data/export";
import { lazy, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../services/useProducts";
import { setReviews } from "../services/useReview";

import Hero from "../features/homePage/Hero";
const SmallBanner = lazy(() => import("../features/homePage/SmallBanner"));
const BigBanner = lazy(() => import("../features/homePage/BigBanner"));
const Category = lazy(() => import("../features/homePage/Category"));
const ProductsGrid = lazy(() => import("../features/homePage/ProductsGrid"));
const Reviews = lazy(() => import("../features/homePage/Reviews"));
const Services = lazy(() => import("../features/homePage/Services"));
const Popup = lazy(() => import("../features/homePage/Popup"));

function Home() {
  const [Auth, setAuth] = useState(false);
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
      <ProductsGrid setAuth={setAuth} />
      <BigBanner />
      <Reviews />
      {Auth && <Popup orderPopup={Auth} setOrderPopup={setAuth} />}
    </>
  );
}

export default Home;
