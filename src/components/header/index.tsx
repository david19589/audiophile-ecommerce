import menuIcon from "/src/assets/shared/tablet/icon-hamburger.svg";
import logo from "/src/assets/shared/desktop/logo.svg";
import cartIcon from "/src/assets/shared/desktop/icon-cart.svg";
import Menu from "./components/menu";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Cart from "./components/cart";
import { useCart } from "../../context/cartContext";

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
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openMenu, openCart, finished]);

  return (
    <div
      className={clsx(
        scrolled && "shadow-2xl",
        "lg:px-[10rem] md:px-[2.5rem] fixed left-0 right-0 flex items-center justify-between gap-[0.5rem] bg-[#191919] px-[1.5rem] py-[2rem] border-b-[0.0625rem] border-[#FFF] border-opacity-[10.4%] z-20"
      )}
    >
      <div className="flex items-center gap-[3rem]">
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          className="outline-none"
        >
          <img
            className="lg:hidden select-none"
            src={menuIcon}
            alt="menuIcon"
          />
        </button>
        {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
        {openCart && <Cart setOpenCart={setOpenCart} />}
        <Link to="/">
          <img className="md:flex hidden select-none" src={logo} alt="logo" />
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
        }}
        className={clsx(openCart && "lg:mr-[1.06rem]", "outline-none")}
      >
        <img className="select-none" src={cartIcon} alt="cartIcon" />
        <span className="text-[#FFF] ">{cart.length}</span>
      </button>
    </div>
  );
}
export default Header;
