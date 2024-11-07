import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./routing/routes";
import Header from "./components/header";
import Footer from "./components/footer";
import { CartProvider, useCart } from "./context/cartContext";

function CartWarning() {
  const { warning } = useCart();
  return (
    warning && (
      <span className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[600] fixed top-[9rem] right-[1rem] text-[#FFF] bg-[#000] p-[1rem] rounded-lg z-20">
        Item is already added in cart.
      </span>
    )
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Header />
          <CartWarning />
          <PageRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
