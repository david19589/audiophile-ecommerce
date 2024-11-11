import { Link, useParams } from "react-router-dom";
import data from "../../data.json";
import { imageSrc } from "../../models/imports";
import CategoryTypes from "../../components/category-types";
import Info from "../../components/info";
import clsx from "clsx";
import { useCart } from "../../hooks/use-cart";
import { useState } from "react";

function Details() {
  const { cart, handleClick } = useCart();
  const { slug } = useParams();
  const itemObj = data.find((item) => item.slug === slug);
  const isAdded = cart.some((product) => product.id === itemObj?.id);

  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (!isAdded && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    if (!isAdded && quantity < 999) {
      setQuantity(quantity + 1);
    }
  };
  const addItem = () => {
    if (itemObj) {
      handleClick({ ...itemObj, quantity });
    }
    setQuantity(1);
  };

  return (
    <div className="lg:pt-[10rem] md:pt-[9rem] flex flex-col items-center pt-[7rem] lg:px-[10rem] md:px-[2.5rem] px-[1.5rem] bg-[#FAFAFA]">
      <div className="max-w-[69.375rem] w-full">
        <Link to="/">
          <button className="text-[1rem] leading-[1.5rem] font-[400] text-[#000] mb-[1.5rem] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
            Go Back
          </button>
        </Link>
      </div>
      {itemObj && (
        <div className="lg:w-full md:mb-[10rem] flex flex-col items-center mb-[7.5rem] max-w-[69.375rem]">
          <div className="lg:gap-[8rem] md:flex-row md:gap-[4rem] md:mb-[7.5rem] flex flex-col items-start w-full">
            <img
              className="md:hidden rounded-lg mb-[2rem]"
              src={imageSrc[itemObj.image.mobile]}
              alt={itemObj.name}
            />
            <img
              className="lg:hidden lg:max-w-[42.5rem] md:flex md:max-w-[17.5rem] hidden rounded-lg mb-[3.25rem] w-full"
              src={imageSrc[itemObj.image.tablet]}
              alt={itemObj.name}
            />
            <img
              className="lg:flex hidden rounded-lg max-w-[33.75rem]"
              src={imageSrc[itemObj.image.desktop]}
              alt={itemObj.name}
            />
            <div className="flex flex-col items-start w-full">
              <h2 className="md:mb-[1.5rem] text-[0.9rem] leading-[1.2rem] tracking-[0.625rem] font-[400] text-[#D87D4A] mb-[1rem]">
                {itemObj.new === true && " NEW PRODUCT"}
              </h2>
              <h1 className="md:text-[2.5rem] md:leading-[2.8rem] md:max-w-[18rem] text-[1.75rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] max-w-[13rem] w-full mb-[1.5rem] text-start">
                {itemObj.name.toUpperCase()}
              </h1>
              <p className="md:max-w-[25rem] text-[1rem] leading-[1.5rem] font-[400] text-[#000] max-w-[20rem] w-full opacity-[50%] mb-[1.5rem] text-start">
                {itemObj.description}
              </p>
              <h2 className="text-[1.125rem] leading-[1.5rem] tracking-[0.0625rem] font-[700] text-[#000] mb-[2rem] text-start">
                $ {new Intl.NumberFormat("en-US").format(itemObj.price)}
              </h2>
              <div className="w-full flex gap-[1rem] mb-[5rem]">
                <div className="flex justify-between p-[1rem] bg-[#F1F1F1] max-w-[7.5rem] w-full">
                  <button
                    onClick={decrease}
                    className={clsx(
                      quantity < 2 && "cursor-default",
                      isAdded && "cursor-default",
                      "text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] text-[#000] opacity-[25%] outline-none select-none"
                    )}
                  >
                    -
                  </button>
                  <h2 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] text-[#000]">
                    {quantity}
                  </h2>
                  <button
                    onClick={increase}
                    className={clsx(
                      quantity > 999 && "cursor-default",
                      isAdded && "cursor-default",
                      "text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] text-[#000] opacity-[25%] outline-none select-none"
                    )}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addItem}
                  className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#D87D4A] px-[1rem] py-[0.9rem] max-w-[10rem] w-full text-center outline-none hover:text-[#FFF] hover:bg-[#FBAF85] transition-all duration-300"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-[7.5rem] w-full">
            <div className="md:mb-[7.5rem] flex flex-col items-start mb-[5rem] w-full">
              <h1 className="md:text-[2rem] md:leading-[2.25rem] text-[1.5rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] mb-[1.5rem] text-start">
                FEATURES
              </h1>
              <p className="md:max-w-[42.5rem] text-[1rem] leading-[1.5rem] font-[400] text-[#000] max-w-[20rem] w-full opacity-[50%] mb-[1.5rem] text-start">
                {itemObj.features}
              </p>
            </div>
            <div className="lg:flex-col lg:gap-[2rem] lg:max-w-[22rem] md:flex-row md:gap-[8rem] flex flex-col items-start mb-[5rem] w-full">
              <h1 className="md:text-[2rem] md:leading-[2.25rem] text-[1.5rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] mb-[1.5rem] text-start">
                IN THE BOX
              </h1>
              <div>
                {itemObj.includes.map((include, index) => (
                  <div key={index} className="flex gap-[1.5rem] mb-[0.5rem]">
                    <span className="text-[1rem] leading-[1.5rem] font-[700] text-[#D87D4A] w-[1.5rem]">
                      {include.quantity}x
                    </span>
                    <h2 className="text-[1rem] leading-[1.5rem] font-[400] text-[#000] opacity-[50%]">
                      {include.item}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:gap-[1.9rem] md:flex md:gap-[1.15rem] mb-[7.5rem]">
            <div className=" md:flex md:flex-col">
              <img
                className="md:hidden rounded-lg mb-[1.25rem]"
                src={imageSrc[itemObj.gallery.first.mobile]}
                alt={itemObj.name}
              />
              <img
                className="lg:hidden md:flex hidden rounded-lg mb-[1.25rem] max-w-[17.5rem] w-full"
                src={imageSrc[itemObj.gallery.first.tablet]}
                alt={itemObj.name}
              />
              <img
                className="lg:flex lg:mb-[2rem] hidden rounded-lg max-w-[33.75rem]"
                src={imageSrc[itemObj.gallery.first.desktop]}
                alt={itemObj.name}
              />
              <img
                className="md:hidden rounded-lg mb-[1.25rem]"
                src={imageSrc[itemObj.gallery.second.mobile]}
                alt={itemObj.name}
              />
              <img
                className="lg:hidden md:flex hidden rounded-lg max-w-[17.5rem] w-full"
                src={imageSrc[itemObj.gallery.second.tablet]}
                alt={itemObj.name}
              />
              <img
                className="lg:flex hidden rounded-lg max-w-[33.75rem]"
                src={imageSrc[itemObj.gallery.second.desktop]}
                alt={itemObj.name}
              />
            </div>
            <img
              className="md:hidden rounded-lg mb-[1.25rem]"
              src={imageSrc[itemObj.gallery.third.mobile]}
              alt={itemObj.name}
            />
            <img
              className="lg:hidden md:flex hidden rounded-lg max-w-[24.5rem] w-full"
              src={imageSrc[itemObj.gallery.third.tablet]}
              alt={itemObj.name}
            />
            <img
              className="lg:flex hidden rounded-lg max-w-[39.75rem]"
              src={imageSrc[itemObj.gallery.third.desktop]}
              alt={itemObj.name}
            />
          </div>
          <div>
            <h1 className="md:text-[2rem] md:leading-[2.25rem] md:mb-[3.5rem] text-[1.5rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] mb-[1.5rem] text-center">
              YOU MAY ALSO LIKE
            </h1>
            <div className="lg:gap-[2rem] md:flex md:gap-[0.7rem]">
              {itemObj.others.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center mb-[3.5rem]"
                >
                  <img
                    className="md:hidden rounded-lg mb-[1.25rem]"
                    src={imageSrc[item.image.mobile]}
                    alt={item.name}
                  />
                  <img
                    className="lg:hidden md:flex hidden rounded-lg max-w-[14rem] w-full mb-[2.5rem]"
                    src={imageSrc[item.image.tablet]}
                    alt={item.name}
                  />
                  <img
                    className="lg:flex hidden rounded-lg max-w-[22rem] mb-[2.5rem]"
                    src={imageSrc[item.image.desktop]}
                    alt={item.name}
                  />
                  <h2 className="md:text-[2rem] md:leading-[2.25rem] md:mb-[2rem] text-[1.5rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] mb-[1.5rem] text-start">
                    {item.name}
                  </h2>
                  <Link to={`/${item.slug}`}>
                    <button className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#D87D4A] px-[1rem] py-[0.9rem] max-w-[10rem] w-full text-center outline-none hover:text-[#FFF] hover:bg-[#FBAF85] transition-all duration-300">
                      SEE PRODUCT
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <CategoryTypes />
      <Info />
    </div>
  );
}
export default Details;
