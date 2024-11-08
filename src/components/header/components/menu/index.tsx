import headphonesImg from "/src/assets/product-xx99-mark-one-headphones/desktop/image-product-removebg-preview.png";
import speakerImg from "/src/assets/product-zx9-speaker/mobile/image-zx9-speaker-removebg-preview.png";
import earphoneImg from "/src/assets/product-yx1-earphones/mobile/image-category-page-preview-removebg-preview.png";
import arrowIcon from "/src/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import clsx from "clsx";

function Menu(props: {
  openMenu: boolean;
  setOpenMenu: (status: boolean) => void;
}) {
  return (
    <div
      className={clsx(
        props.openMenu ? "translate-y-0" : "translate-y-[-40rem]",
        "md:flex md:py-[5rem] bg-[#FFF] w-full gap-[0.625rem] pt-[4rem] pb-[2rem] px-[1.5rem] top-[6.85rem] z-30 fixed left-0 right-0 transition-all duration-200"
      )}
    >
      <Link
        to="/headphones"
        onClick={() => {
          props.setOpenMenu(false);
        }}
        className="w-full"
      >
        <div className="md:mb-0 flex flex-col items-center bg-[#F1F1F1] w-full rounded-lg mb-[5rem] pb-[1.5rem] pt-[5.4rem] relative hover:translate-y-[-0.3rem] transition-all duration-300 group">
          <img
            className="h-[8.646rem] absolute top-[-4rem] select-none"
            src={headphonesImg}
            alt="headphonesImg"
          />
          <span className="flex w-[5rem] translate-y-[-2rem] h-0 bg-[#0000002a] shadow-custom-shadow" />
          <div className="flex flex-col items-center gap-[1rem]">
            <h2 className="lg:text-[1.125rem] lg:leading-[1.5rem] text-[1rem] leading-[1.4rem] tracking-[0.0625rem] font-[700] text-[#000]">
              HEADPHONES
            </h2>
            <div className="flex items-center gap-[0.8rem]">
              <h3 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] group-hover:text-[#D87D4A] transition-all duration-300">
                SHOP
              </h3>
              <img src={arrowIcon} alt="arrowIcon" />
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/speakers"
        onClick={() => {
          props.setOpenMenu(false);
        }}
        className="w-full"
      >
        <div className="md:mb-0 flex flex-col items-center bg-[#F1F1F1] w-full rounded-lg mb-[5rem] pb-[1.5rem] pt-[5.4rem] relative hover:translate-y-[-0.3rem] transition-all duration-300 group">
          <img
            className="h-[8.646rem] absolute top-[-4rem] select-none"
            src={speakerImg}
            alt="speakerImg"
          />
          <span className="flex w-[5rem] translate-y-[-2rem] h-0 bg-[#0000002a] shadow-custom-shadow" />
          <div className="flex flex-col items-center gap-[1rem]">
            <h2 className="lg:text-[1.125rem] lg:leading-[1.5rem] text-[1rem] leading-[1.4rem] tracking-[0.0625rem] font-[700] text-[#000]">
              SPEAKERS
            </h2>
            <div className="flex items-center gap-[0.8rem]">
              <h3 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] group-hover:text-[#D87D4A] transition-all duration-300">
                SHOP
              </h3>
              <img src={arrowIcon} alt="arrowIcon" />
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/earphones"
        onClick={() => {
          props.setOpenMenu(false);
        }}
        className="w-full"
      >
        <div className="md:mb-0 flex flex-col items-center bg-[#F1F1F1] w-full rounded-lg mb-[5rem] pb-[1.5rem] pt-[5.4rem] relative hover:translate-y-[-0.3rem] transition-all duration-300 group">
          <img
            className="h-[8.646rem] absolute top-[-4rem] select-none"
            src={earphoneImg}
            alt="earphoneImg"
          />
          <span className="flex w-[5rem] translate-y-[-2.4rem] h-0 bg-[#0000002a] shadow-custom-shadow" />
          <div className="flex flex-col items-center gap-[1rem]">
            <h2 className="lg:text-[1.125rem] lg:leading-[1.5rem] text-[1rem] leading-[1.4rem] tracking-[0.0625rem] font-[700] text-[#000]">
              EARPHONES
            </h2>
            <div className="flex items-center gap-[0.8rem]">
              <h3 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] group-hover:text-[#D87D4A] transition-all duration-300">
                SHOP
              </h3>
              <img src={arrowIcon} alt="arrowIcon" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Menu;
