import { Link } from "react-router-dom";
import data from "../../data.json";
import CategoryTypes from "../../components/category-types";
import Info from "../../components/info";
import { imageSrc } from "../../models/imports";

function Earphones() {
  return (
    <>
      <h1 className="lg:pt-[6rem] md:pt-[6.5rem] md:pb-[6rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.09rem] text-[1.75rem] leading-[2.4rem] tracking-[0.125rem] font-[700] text-[#FFF] bg-[#191919] px-[1rem] py-[2rem] text-center relative right-0 left-0 top-[5.5rem]">
        EARPHONES
      </h1>
      <div className="lg:px-[10rem] md:px-[2.5rem] flex flex-col items-center px-[1.5rem] pt-[9rem] mb-[10rem] translate-y-[5rem] bg-[#FAFAFA]">
        {data
          .filter((item) => item.category === "earphones")
          .map((item, index) => {
            return (
              <div
                key={index}
                className={`lg:gap-[7.8125rem] md:mb-[10rem] flex flex-col items-center mb-[7.5rem] ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <img
                  className="md:hidden rounded-lg mb-[2rem]"
                  src={imageSrc[item.categoryImage.mobile]}
                  alt={item.name}
                />
                <img
                  className="lg:hidden md:flex hidden rounded-lg mb-[3.25rem] max-w-[42.5rem] w-full"
                  src={imageSrc[item.categoryImage.tablet]}
                  alt={item.name}
                />
                <img
                  className="lg:flex hidden rounded-lg max-w-[33.75rem]"
                  src={imageSrc[item.categoryImage.desktop]}
                  alt={item.name}
                />
                <div className="lg:items-start flex flex-col items-center">
                  <h2 className="md:mb-[1.5rem] text-[0.9rem] leading-[1.2rem] tracking-[0.625rem] font-[400] text-[#D87D4A] mb-[1rem]">
                    {item.new === true && " NEW PRODUCT"}
                  </h2>
                  <h1 className="lg:text-start md:text-[2.5rem] md:leading-[2.8rem] md:max-w-[18rem] text-[1.75rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] max-w-[13rem] w-full mb-[1.5rem] text-center">
                    {item.name.toUpperCase()}
                  </h1>
                  <p className="lg:text-start md:max-w-[24rem] text-[1rem] leading-[1.5rem] font-[400] text-[#000] max-w-[20rem] w-full opacity-[50%] mb-[1.5rem] text-center">
                    {item.description}
                  </p>
                  <Link to={`/${item.slug}`}>
                    <button className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#D87D4A] px-[1rem] py-[0.9rem] max-w-[10rem] w-full text-center outline-none hover:text-[#FFF] hover:bg-[#FBAF85] transition-all duration-300">
                      SEE PRODUCT
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        <CategoryTypes />
        <Info />
      </div>
    </>
  );
}
export default Earphones;
