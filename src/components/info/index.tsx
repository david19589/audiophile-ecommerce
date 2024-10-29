import manWithHeadphoneImg from "/src/assets/shared/mobile/image-best-gear.jpg";
import manWithHeadphoneImgTablet from "/src/assets/shared/tablet/image-best-gear.jpg";
import manWithHeadphoneImgDesktop from "/src/assets/shared/desktop/image-best-gear.jpg";

function Info() {
  return (
    <div className="lg:flex-row-reverse flex flex-col items-center max-w-[69.375rem] w-full ">
      <img
        className="md:hidden w-full rounded-lg mb-[2.5rem]"
        src={manWithHeadphoneImg}
        alt="manWithHeadphoneImg"
      />
      <img
        className="lg:hidden md:flex hidden w-full rounded-lg mb-[4rem]"
        src={manWithHeadphoneImgTablet}
        alt="manWithHeadphoneImgTablet"
      />
      <img
        className="lg:flex hidden max-w-[33.75rem] w-full rounded-lg"
        src={manWithHeadphoneImgDesktop}
        alt="manWithHeadphoneImgDesktop"
      />
      <div className="lg:items-start flex flex-col items-center w-full">
        <h1 className="lg:text-start lg:max-w-[30rem] md:text-[2.5rem] md:leading-[2.75rem] md:max-w-[31rem] text-[1.5rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] mb-[2rem] max-w-[15rem] text-center break-world">
          BRINGING YOU THE
          <span className="text-[#D87D4A] w-max"> BEST </span>
          AUDIO GEAR
        </h1>
        <p className="lg:text-start lg:max-w-[29rem] md:max-w-[37rem] text-[1rem] leading-[1.5rem] font-[400] text-[#000] max-w-[21rem] w-full opacity-[50%] text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
export default Info;
