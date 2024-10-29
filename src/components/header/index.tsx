import menuIcon from "/src/assets/shared/tablet/icon-hamburger.svg";
import logo from "/src/assets/shared/desktop/logo.svg";
import cartIcon from "/src/assets/shared/desktop/icon-cart.svg";
import Menu from "./components/menu";
import { useEffect, useState } from "react";
import clsx from "clsx";

function Header(props: {
  openMenu: boolean;
  setOpenMenu: (status: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

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
            props.setOpenMenu(!props.openMenu);
          }}
          className="outline-none"
        >
          <img
            className="lg:hidden select-none"
            src={menuIcon}
            alt="menuIcon"
          />
        </button>
        {props.openMenu && <Menu openMenu={props.openMenu} />}
        <img className="md:flex hidden select-none" src={logo} alt="logo" />
      </div>
      <div className="lg:flex hidden gap-[2rem]">
        <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
          HOME
        </button>
        <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
          HEADPHONES
        </button>
        <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
          SPEAKERS
        </button>
        <button className="text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
          EARPHONES
        </button>
      </div>
      <img className="md:hidden select-none" src={logo} alt="logo" />
      <button className="outline-none">
        <img className="select-none" src={cartIcon} alt="cartIcon" />
      </button>
    </div>
  );
}
export default Header;
