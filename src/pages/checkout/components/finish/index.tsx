import { Link } from "react-router-dom";
import confirmationIcon from "../../../../assets/checkout/icon-order-confirmation.svg";
import { useCart } from "../../../../hooks/use-cart";
import { useState } from "react";
import clsx from "clsx";
import { imageSrc } from "../../../../models/imports";

function Finish(props: { price: number }) {
  const { cart, setCart, setFinished } = useCart();
  const [viewList, setViewList] = useState(false);

  const reset = () => {
    setCart([]);
    setFinished(false);
  };
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-30 bg-[#000000c5] px-[1.5rem]">
      <div className="md:px-[3rem] bg-[#FFF] p-[2rem] rounded-lg max-w-[40rem] w-full">
        <img
          src={confirmationIcon}
          alt="confirmationIcon"
          className="mb-[1.5rem]"
        />
        <h2 className="md:text-[2rem] md:leading-[2.25rem] md:max-w-[18rem] text-[1.5rem] leading-[1.75rem] tracking-[0.0550rem] font-[700] text-[#000] mb-[1rem]">
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="text-[1rem] leading-[1.5rem] font-[400] text-[#000] opacity-[50%] mb-[1.5rem]">
          You will receive an email confirmation shortly.
        </p>
        <div className="md:flex md:mb-[2.5rem]">
          <div
            className={clsx(
              viewList && "overflow-y-scroll h-[11.75rem] custom-scrollbar",
              "md:w-full md:rounded-l-lg md:rounded-r-none bg-[#F1F1F1] p-[1.5rem] rounded-t-lg h-[11.75rem]"
            )}
          >
            {viewList ? (
              <>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-[1.5rem] w-full"
                  >
                    <div className="flex gap-[1rem]">
                      <img
                        className="w-[4rem] rounded-lg"
                        src={imageSrc[item.image.mobile]}
                        alt={item.name}
                      />
                      <div className="flex flex-col items-start">
                        <h1 className="text-[1rem] leading-[1.5rem] font-[700] text-[#000]">
                          {item.shortName.toUpperCase()}
                        </h1>
                        <h2 className="text-[1rem] leading-[1.5rem] font-[700] text-[#000] opacity-[50%]">
                          ${new Intl.NumberFormat("en-US").format(item.price)}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000]">
                        x{item.quantity}
                      </h2>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="md:items-start flex justify-between items-center mb-[0.75rem] w-full">
                <div className="md:items-start flex items-center gap-[1rem]">
                  <img
                    className="sm:w-[4rem] sm:h-[4rem] w-[2rem] h-[2rem] rounded-lg"
                    src={imageSrc[cart[0].image.mobile]}
                    alt={cart[0].name}
                  />
                  <div className="flex flex-col items-start">
                    <h1 className="text-[1rem] leading-[1.5rem] font-[700] text-[#000]">
                      {cart[0].shortName.toUpperCase()}
                    </h1>
                    <h2 className="text-[1rem] leading-[1.5rem] font-[700] text-[#000] opacity-[50%]">
                      $ {new Intl.NumberFormat("en-US").format(cart[0].price)}
                    </h2>
                  </div>
                </div>
                <div>
                  <h2 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000]">
                    x{cart[0].quantity}
                  </h2>
                </div>
              </div>
            )}
            {cart.length > 1 && (
              <div>
                {!viewList && (
                  <span className="flex bg-[#000] opacity-[8%] h-[0.0625rem] w-[full] mb-[0.75rem]"></span>
                )}
                {viewList ? (
                  <h3
                    onClick={() => {
                      setViewList(false);
                    }}
                    className="text-[0.75rem] leading-[1rem] font-[700] tracking-[-0.015rem] text-[#000] opacity-[50%] text-center cursor-pointer"
                  >
                    View less
                  </h3>
                ) : (
                  <h3
                    onClick={() => {
                      setViewList(true);
                    }}
                    className="text-[0.75rem] leading-[1rem] font-[700] tracking-[-0.015rem] text-[#000] opacity-[50%] text-center cursor-pointer"
                  >
                    {`and ${cart.length - 1} other item(s)`}
                  </h3>
                )}
              </div>
            )}
          </div>
          <div className="md:w-full md:rounded-r-lg md:rounded-l-none md:mb-0 md:justify-center flex flex-col gap-[0.5rem] bg-[#000] p-[1.5rem] rounded-b-lg mb-[1.5rem]">
            <h2 className="text-[1rem] leading-[1.5rem] font-400 text-[#FFF] opacity-[50%]">
              GRAND TOTAL
            </h2>
            <h2 className="text-[1.125rem] leading-[1.5rem] font-[700] text-[#FFF]">
              $ {new Intl.NumberFormat("en-US").format(props.price + 50)}
            </h2>
          </div>
        </div>
        <Link to="/">
          <button
            onClick={reset}
            className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#D87D4A] px-[1rem] py-[0.9rem] w-full text-center outline-none hover:bg-[#FBAF85] transition-all duration-300"
          >
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Finish;
