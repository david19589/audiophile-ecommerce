import headphonesImg from "/src/assets/product-xx99-mark-one-headphones/desktop/image-product-removebg-preview.png";
import speakerImg from "/src/assets/product-zx9-speaker/mobile/image-zx9-speaker-removebg-preview.png";
import earphoneImg from "/src/assets/product-yx1-earphones/mobile/image-category-page-preview-removebg-preview.png";
import arrowIcon from "/src/assets/shared/desktop/icon-arrow-right.svg";

function CategoryTypes() {
  return (
    <div className="lg:mb-[10rem] lg:gap-[1.875rem] md:flex md:max-w-[69.375rem] md:mb-[6rem] mb-[7.5rem] max-w-[22rem] w-full gap-[0.625rem]">
      <div className="md:mb-0 flex flex-col items-center bg-[#F1F1F1] w-full rounded-lg mb-[5rem] pb-[1.5rem] pt-[5.4rem] relative hover:translate-y-[-0.3rem] transition-all duration-300">
        <img
          className="h-[8.646rem] absolute top-[-4rem]"
          src={headphonesImg}
          alt="headphonesImg"
        />
        <span className="flex w-[5rem] translate-y-[-2rem] h-0 bg-[#0000002a] shadow-custom-shadow" />
        <div className="flex flex-col items-center gap-[1rem]">
          <h2 className="lg:text-[1.125rem] lg:leading-[1.5rem] text-[1rem] leading-[1.4rem] tracking-[0.0625rem] font-[700] text-[#000]">
            HEADPHONES
          </h2>
          <div className="flex items-center gap-[0.8rem] cursor-pointer group">
            <h3 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] group-hover:text-[#D87D4A] transition-all duration-300">
              SHOP
            </h3>
            <img src={arrowIcon} alt="arrowIcon" />
          </div>
        </div>
      </div>
      <div className="md:mb-0 flex flex-col items-center bg-[#F1F1F1] w-full rounded-lg mb-[5rem] pb-[1.5rem] pt-[5.4rem] relative hover:translate-y-[-0.3rem] transition-all duration-300">
        <img
          className="h-[8.646rem] absolute top-[-4rem]"
          src={speakerImg}
          alt="speakerImg"
        />
        <span className="flex w-[5rem] translate-y-[-2rem] h-0 bg-[#0000002a] shadow-custom-shadow" />
        <div className="flex flex-col items-center gap-[1rem]">
          <h2 className="lg:text-[1.125rem] lg:leading-[1.5rem] text-[1rem] leading-[1.4rem] tracking-[0.0625rem] font-[700] text-[#000]">
            SPEAKERS
          </h2>
          <div className="flex items-center gap-[0.8rem] cursor-pointer group">
            <h3 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] group-hover:text-[#D87D4A] transition-all duration-300">
              SHOP
            </h3>
            <img src={arrowIcon} alt="arrowIcon" />
          </div>
        </div>
      </div>
      <div className="md:mb-0 flex flex-col items-center bg-[#F1F1F1] w-full rounded-lg mb-[5rem] pb-[1.5rem] pt-[5.4rem] relative hover:translate-y-[-0.3rem] transition-all duration-300">
        <img
          className="h-[8.646rem] absolute top-[-4rem]"
          src={earphoneImg}
          alt="earphoneImg"
        />
        <span className="flex w-[5rem] translate-y-[-2.4rem] h-0 bg-[#0000002a] shadow-custom-shadow" />
        <div className="flex flex-col items-center gap-[1rem]">
          <h2 className="lg:text-[1.125rem] lg:leading-[1.5rem] text-[1rem] leading-[1.4rem] tracking-[0.0625rem] font-[700] text-[#000]">
            EARPHONES
          </h2>
          <div className="flex items-center gap-[0.8rem] cursor-pointer group">
            <h3 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000] group-hover:text-[#D87D4A] transition-all duration-300">
              SHOP
            </h3>
            <img src={arrowIcon} alt="arrowIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryTypes;
