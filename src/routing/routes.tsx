import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Headphones from "../pages/headphones";
import Speakers from "../pages/speakers";
import Earphones from "../pages/earphones";
import Details from "../pages/details";
import Checkout from "../pages/checkout";
import { ScrollToTop } from "../utils/scroll-to-top";

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
