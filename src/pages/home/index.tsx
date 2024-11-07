import CategoryTypes from "../../components/category-types";
import SpeakerImg from "/src/assets/product-zx9-speaker/mobile/image-zx9-speaker-removebg-preview.png";
import SpeakerImgDesktop from "/src/assets/product-zx9-speaker/desktop/image-product-removebg-preview1.jpg";
import earphonesImg from "/src/assets/home/mobile/image-earphones-yx1.jpg";
import earphonesImgTablet from "/src/assets/home/tablet/image-earphones-yx1.jpg";
import earphonesImgDesktop from "/src/assets/home/desktop/image-earphones-yx1.jpg";
import Info from "../../components/info";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA]">
      <div className="lg:px-[10rem] lg:bg-[url('/src/assets/home/desktop/image-hero.jpg')] lg:mb-[10rem] md:px-[2.5rem] md:bg-[url('/src/assets/home/tablet/image-header.jpg')] md:mb-[6rem] flex flex-col items-center bg-[#191919] w-full bg-[url('/src/assets/home/mobile/image-header.jpg')] bg-cover bg-bottom px-[1.5rem] py-[2rem] mb-[5.8rem]">
        <div className="lg:items-start lg:w-full flex flex-col items-center mb-[7rem] pt-[9rem] h-full">
          <h2 className="md:mb-[1.5rem] text-[0.9rem] leading-[1.2rem] tracking-[0.625rem] font-[400] text-[#FFF] opacity-[49.64%] mb-[1rem]">
            NEW PRODUCT
          </h2>
          <h1 className="lg:text-start md:text-[3.5rem] md:leading-[3.5rem] md:max-w-[25rem] text-[2.25rem] leading-[2.5rem] tracking-[0.125rem] font-[700] text-[#FFF] max-w-[17rem] w-full mb-[1.5rem] break-all text-center">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="lg:text-start md:max-w-[23rem] text-[1rem] leading-[1.5rem] font-[400] text-[#FFF] max-w-[18rem] w-full opacity-[70%] mb-[1.5rem] text-center">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/xx99-mark-two-headphones" className="max-w-[10rem] w-full">
            <button className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#D87D4A] px-[1rem] py-[0.9rem] max-w-[10rem] w-full text-center outline-none hover:text-[#FFF] hover:bg-[#FBAF85] transition-all duration-300">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:px-[10.25rem] md:px-[2.5rem] flex flex-col items-center px-[1.5rem] w-full">
        <CategoryTypes />
        <div className="lg:flex lg:items-center lg:px-[6rem] lg:pt-[7rem] lg:pb-0 lg:mb-[3rem] bg-[#D87D4A] rounded-lg px-[1.5rem] pb-[3.5rem] mb-[1.5rem] max-w-[69.375rem] w-full bg-[url('/src/assets/home/desktop/pattern-circles.svg')] bg-bottom bg-cover bg-no-repeat group">
          <div className="flex justify-center w-full">
            <img
              className="lg:hidden select-none md:group-hover:translate-x-[-1rem] transition-all duration-300"
              src={SpeakerImg}
              alt="SpeakerImg"
            />
            <img
              className="lg:flex w-[26rem] translate-y-[0.3rem] translate-x-[-2rem] hidden select-none group-hover:translate-x-[-3rem] transition-all duration-300"
              src={SpeakerImgDesktop}
              alt="SpeakerImgDesktop"
            />
          </div>
          <div className="lg:items-start flex flex-col items-center md:group-hover:translate-x-[1rem] transition-all duration-300">
            <h1 className="lg:text-start md:text-[3.5rem] md:leading-[3.5rem] text-[2rem] leading-[2.5rem] tracking-[0.125rem] font-[700] text-[#FFF] max-w-[16.5rem] mb-[1.5rem] break-world text-center">
              ZX9 SPEAKER
            </h1>
            <p className="lg:text-start lg:max-w-[33rem] text-[1rem] leading-[1.5rem] font-[400] text-[#FFF] max-w-[18rem] w-full opacity-[70%] mb-[1.5rem] text-center">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/zx9-speaker" className="max-w-[10rem] w-full">
              <button className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#000] px-[1rem] py-[0.9rem] max-w-[10rem] w-full text-center outline-none hover:text-[#FFF] hover:bg-[#4C4C4CFF] transition-all duration-300">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:px-[6rem] lg:mb-[3rem] lg:bg-[url('/src/assets/home/desktop/image-speaker-zx7.jpg')] md:bg-[url('/src/assets/home/tablet/image-speaker-zx7.jpg')] bg-[#F1F1F1] rounded-lg px-[1.5rem] py-[6.5rem] mb-[1.5rem] max-w-[69.375rem] w-full bg-[url('/src/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-right bg-no-repeat group">
          <div className="md:group-hover:translate-x-[1rem] transition-all duration-300">
            <h1 className="text-[1.5rem] leading-[2.4rem] tracking-[0.125rem] font-[700] text-[#000] mb-[2rem] break-world">
              ZX7 SPEAKER
            </h1>
            <Link to="/zx7-speaker">
              <button className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] bg-transparent border-[0.15rem] border-[#000] px-[1rem] py-[0.9rem] max-w-[10rem] w-full text-center outline-none hover:text-[#FFF] hover:bg-[#000] transition-all duration-300">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:mb-[12.5rem] lg:gap-[1.875rem] md:flex-row md:gap-[0.6875rem] md:mb-[6rem] flex flex-col items-center gap-[1.5rem] max-w-[69.375rem] w-full mb-[7.5rem]">
          <img
            className="md:hidden w-full rounded-lg"
            src={earphonesImg}
            alt="earphonesImg"
          />
          <img
            className="lg:hidden md:flex md:max-w-[21.1875rem] hidden w-full rounded-lg"
            src={earphonesImgTablet}
            alt="earphonesImgTablet"
          />
          <img
            className="lg:flex hidden max-w-[33.75rem] w-full rounded-lg"
            src={earphonesImgDesktop}
            alt="earphonesImgDesktop"
          />
          <div className="lg:px-[6rem] md:px-[2.5rem] md:py-[6.25rem] w-full px-[1.5rem] py-[2.5rem] bg-[#F1F1F1] rounded-lg group">
            <div className="md:group-hover:translate-x-[1rem] transition-all duration-300">
              <h1 className="text-[1.5rem] leading-[2.352rem] tracking-[0.125rem] font-[700] text-[#000] mb-[2rem] break-world ">
                YX1 EARPHONES
              </h1>
              <Link to="/yx1-earphones">
                <button className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] bg-transparent border-[0.15rem] border-[#000] px-[1rem] py-[0.9rem] max-w-[10rem] w-full text-center outline-none hover:text-[#FFF] hover:bg-[#000] transition-all duration-300">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Info />
      </div>
    </div>
  );
}
export default Home;
