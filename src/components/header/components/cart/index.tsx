import clsx from "clsx";
import { useCart } from "../../../../hooks/use-cart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart(props: {
  openCart: boolean;
  setOpenCart: (status: boolean) => void;
}) {
  const { cart, setCart, increment, decrement } = useCart();
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let grandPrice = 0;
    cart.map((item) => {
      grandPrice += item.quantity * item.price;
    });
    setPrice(grandPrice);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div
      className={clsx(
        props.openCart ? "translate-x-0" : "translate-x-[40rem]",
        "lg:mr-[10rem] md:px-[2.5rem] md:mr-[2.5rem] bg-[#FFF] max-w-[23.5rem] w-full gap-[0.625rem] p-[2rem] mt-[2rem] mx-[1.5rem] rounded-lg z-30 fixed top-[6.75rem] right-0 transition-all duration-200"
      )}
    >
      <div className="flex justify-between gap-[0.5rem] mb-[2rem]">
        <h2 className="text-[1.125rem] leading-[1.5rem] tracking-[0.0625rem] font-[700] text-[#000]">
          CART ({`${cart.length}`})
        </h2>
        <button
          onClick={() => {
            setCart([]);
          }}
          className="text-[1rem] leading-[1.5rem] font-[400] text-[#000] opacity-[50%] underline"
        >
          Remove all
        </button>
      </div>
      <div className="h-[21rem] overflow-y-scroll custom-scrollbar">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex sm:flex-row sm:justify-between sm:items-center sm:gap-0 flex-col gap-[0.5rem] mb-[1.5rem]"
          >
            <div className="flex gap-[1rem]">
              <img
                className="w-[4rem] rounded-lg"
                src={item.image.mobile}
                alt={item.name}
              />
              <div className="flex flex-col items-start">
                <h1 className="text-[0.85rem] leading-[1.5rem] font-[700] text-[#000]">
                  {item.shortName.toUpperCase()}
                </h1>

                <h2 className="text-[0.9rem] leading-[1.5rem] font-[700] text-[#000] opacity-[50%]">
                  $ {new Intl.NumberFormat("en-US").format(item.price)}
                </h2>
              </div>
            </div>
            <div className="flex justify-between items-center p-[1rem] bg-[#F1F1F1] max-w-[6rem] w-full">
              <button
                onClick={() => {
                  decrement(item.id);
                }}
                className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] text-[#000] opacity-[25%] outline-none select-none"
              >
                -
              </button>
              <h2 className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#000]">
                {item.quantity}
              </h2>
              <button
                onClick={() => {
                  increment(item.id);
                }}
                className={clsx(
                  item.quantity > 999 && "cursor-default",
                  "text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] text-[#000] opacity-[25%] outline-none select-none"
                )}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-[0.5rem] mb-[1.5rem]">
        <h2 className="text-[1rem] leading-[1.5rem] font-400 text-[#000] opacity-[50%]">
          TOTAL
        </h2>
        <h2 className="text-[1.125rem] leading-[1.5rem] font-[700] text-[#000]">
          $ {new Intl.NumberFormat("en-US").format(price)}
        </h2>
      </div>
      {cart.length !== 0 ? (
        <Link to="/checkout">
          <button
            onClick={() => {
              props.setOpenCart(false);
            }}
            className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#D87D4A] px-[1rem] py-[0.9rem] w-full text-center outline-none hover:bg-[#FBAF85] transition-all duration-300"
          >
            CHECKOUT
          </button>
        </Link>
      ) : (
        <button className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#FBAF85] px-[1rem] py-[0.9rem] w-full text-center outline-none cursor-default">
          CHECKOUT
        </button>
      )}
    </div>
  );
}
export default Cart;
