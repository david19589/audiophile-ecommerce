import { Link } from "react-router-dom";
import logo from "/src/assets/shared/desktop/logo.svg";
import FacebookSvg from "../../assets/icons/facebook-svg";
import TwitterSvg from "../../assets/icons/twitter-svg";
import InstagramSvg from "../../assets/icons/instagram-svg";

function Footer() {
  return (
    <div className="lg:px-[10rem] md:items-start md:px-[2.5rem] md:pb-[3rem] flex flex-col items-center w-full bg-[#101010] px-[1.5rem] pb-[2.4rem]">
      <div className="lg:flex lg:justify-between lg:w-full mb-[3rem]">
        <div className="lg:mb-0 md:items-start md:gap-[3.5rem] flex flex-col items-center gap-[3rem] mb-[3rem]">
          <span className="flex w-[6.3125rem] h-[0.25rem] bg-[#D87D4A]" />
          <img className="select-none" src={logo} alt="logo" />
        </div>
        <div className="md:flex-row md:gap-[2rem] flex flex-col items-center gap-[1rem]">
          <Link to="/">
            <button className="md:hover:translate-x-[0.2rem] md:hover:translate-y-[-0.2rem] text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] w-max hover:text-[#D87D4A] hover:translate-x-[-0.2rem] transition-all duration-300 outline-none select-none">
              HOME
            </button>
          </Link>
          <Link to="/headphones">
            <button className="md:hover:translate-x-[0.2rem] md:hover:translate-y-[-0.2rem] text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] w-max hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
              HEADPHONES
            </button>
          </Link>
          <Link to="/speakers">
            <button className="md:hover:translate-y-[-0.2rem] text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] w-max hover:text-[#D87D4A] hover:translate-x-[0.2rem] transition-all duration-300 outline-none select-none">
              SPEAKERS
            </button>
          </Link>
          <Link to="/earphones">
            <button className="md:hover:translate-x-[0.2rem] md:hover:translate-y-[-0.2rem] text-[0.8125rem] leading-[1.5rem] tracking-[0.125rem] text-[#FFF] w-max hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
              EARPHONES
            </button>
          </Link>
        </div>
      </div>
      <p className="lg:text-start lg:max-w-[35.5rem] md:max-w-[44rem] md:text-start md:mb-[5rem] text-[1rem] leading-[1.5rem] font-[400] text-[#FFF] max-w-[21rem] w-full opacity-[50%] text-center mb-[3rem]">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <div className="md:flex-row md:justify-between md:w-full flex flex-col items-center gap-[3rem]">
        <h3 className="text-[1rem] leading-[1.5rem] font-[400] text-[#FFF] max-w-[17rem] w-full opacity-[50%]">
          {`Copyright ${new Date().getFullYear()}. All Rights Reserved`}
        </h3>
        <div className="lg:gap-[2rem] flex gap-[1rem]">
          <FacebookSvg />
          <TwitterSvg />
          <InstagramSvg />
        </div>
      </div>
    </div>
  );
}
export default Footer;
