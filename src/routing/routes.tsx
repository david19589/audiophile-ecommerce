import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Headphones from "../pages/headphones";
import { useEffect } from "react";
import Speakers from "../pages/speakers";
import Earphones from "../pages/earphones";
import Details from "../pages/details";
import Checkout from "../pages/checkout";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function PageRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/:slug" element={<Details />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default PageRoutes;
