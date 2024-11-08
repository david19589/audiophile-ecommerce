import menuIcon from "/src/assets/shared/tablet/icon-hamburger.svg";
import logo from "/src/assets/shared/desktop/logo.svg";
import cartIcon from "/src/assets/shared/desktop/icon-cart.svg";
import Menu from "./components/menu";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Cart from "./components/cart";
import { useCart } from "../../hooks/use-cart";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, finished } = useCart();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (openMenu || openCart || finished) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.height = "-webkit-fill-available";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "unset";
      document.body.style.top = "unset";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.position = "unset";
      document.body.style.height = "unset";
    };
  }, [openMenu, openCart, finished]);

  const resetStates = () => {
    setOpenMenu(false);
    setOpenCart(false);
  };

  return (
    <>
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
      <div
        className={clsx(
          scrolled && "shadow-2xl",
          "lg:px-[10rem] md:px-[2.5rem] fixed top-0 left-0 right-0 flex items-center justify-between gap-[0.5rem] bg-[#191919] px-[1.5rem] py-[2rem] border-b-[0.0625rem] border-[#FFF] border-opacity-[10.4%] z-30"
        )}
      >
        <div className="flex items-center gap-[3rem]">
          <button
            onClick={() => {
              setOpenMenu(!openMenu);
              setOpenCart(false);
            }}
            className="outline-none"
          >
            <img
              className="lg:hidden select-none"
              src={menuIcon}
              alt="menuIcon"
            />
          </button>
          <Link to="/">
            <img onClick={resetStates} className="md:flex hidden select-none" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="lg:flex hidden gap-[2rem]">
          <Link to="/">
            <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
              HOME
            </button>
          </Link>
          <Link to="/headphones">
            <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
              HEADPHONES
            </button>
          </Link>
          <Link to="/speakers">
            <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
              SPEAKERS
            </button>
          </Link>
          <Link to="/earphones">
            <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
              EARPHONES
            </button>
          </Link>
        </div>
        <img className="md:hidden select-none" src={logo} alt="logo" />
        <button
          onClick={() => {
            setOpenCart(!openCart);
            setOpenMenu(false);
          }}
          className="outline-none"
        >
          <img className="select-none" src={cartIcon} alt="cartIcon" />
          <span className="text-[#FFF] ">{cart.length}</span>
        </button>
      </div>
      <div
        onClick={resetStates}
        className={clsx(
          openMenu || openCart ? "opacity-1 z-10" : "opacity-0 z-[-10]",
          "fixed top-[6.75rem] bottom-0 left-0 right-0 h-[100vh] bg-[#000000c5] z-20 transition-all duration-200"
        )}
      />
    </>
  );
}
export default Header;
