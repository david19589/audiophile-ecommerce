import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/use-cart";
import Finish from "./components/finish";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, FormData } from "../../models/schema";
import deliveryIcon from "../../assets/checkout/icon-cash-on-delivery.svg";
import { imageSrc } from "../../models/imports";

function Checkout() {
  const { cart, finished, setFinished } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("eMoney");
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema(selectedMethod)),
  });

  const onSubmit = (data: FormData) => {
    setFinished(true);
    return data;
  };

  return (
    <div className="lg:pt-[10rem] md:pt-[9rem] flex flex-col items-center pt-[7rem] lg:px-[10rem] md:px-[2.5rem] px-[1.5rem] bg-[#FAFAFA]">
      <div className="lg:max-w-[69.375rem] md:max-w-[43.0625rem] max-w-[69.375rem] w-full">
        <Link to="/">
          <button className="text-[1rem] leading-[1.5rem] font-[400] text-[#000] mb-[1.5rem] hover:text-[#D87D4A] hover:translate-y-[-0.2rem] transition-all duration-300 outline-none select-none">
            Go Back
          </button>
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:max-w-[69.375rem] md:max-w-[43.0625rem] w-full"
      >
        <div className="lg:flex lg:max-w-[69.375rem] lg:gap-[1.875rem] md:max-w-[43.0625rem] w-full">
          <div className="md:items-start flex flex-col items-center bg-[#FFF] p-[1.5rem] mb-[6rem] w-full rounded-lg">
            <h1 className="text-[1.75rem] leading-[2.4rem] tracking-[0.0625rem] font-[700] text-[#000] max-w-[19.3125rem] w-full mb-[2rem] ">
              CHECKOUT
            </h1>
            <div className="md:max-w-full max-w-[17.5rem] w-full">
              <h2 className="text-[0.85rem] leading-[1.5rem] tracking-[0.0625rem] font-[700] text-[#D87D4A] mb-[1rem]">
                BILLING DETAILS
              </h2>
              <div className="md:flex md:gap-[1rem] md:max-w-[39.80rem] md:w-full">
                <div className="w-full mb-[1.5rem]">
                  <div className="flex justify-between gap-[0.5rem]">
                    <h3
                      className={clsx(
                        errors.name ? "text-[#CD2C2C]" : "text-[#000]",
                        "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] mb-[0.5625rem]"
                      )}
                    >
                      Name
                    </h3>
                    {errors.name && (
                      <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                        {errors.name?.message}
                      </span>
                    )}
                  </div>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    autoComplete="name"
                    placeholder="Alexei Ward"
                    className={clsx(
                      errors.name
                        ? "border-[#CD2C2C]"
                        : "border-[#CFCFCF] hover:border-[#D87D4A]",
                      "text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem]  max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                    )}
                  />
                </div>
                <div className="w-full mb-[1.5rem]">
                  <div className="flex justify-between gap-[0.5rem]">
                    <h3
                      className={clsx(
                        errors.email ? "text-[#CD2C2C]" : "text-[#000]",
                        "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                      )}
                    >
                      Email Address
                    </h3>
                    {errors.email && (
                      <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                        {errors.email?.message}
                      </span>
                    )}
                  </div>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="alexei@mail.com"
                    className={clsx(
                      errors.email
                        ? "border-[#CD2C2C]"
                        : "border-[#CFCFCF] hover:border-[#D87D4A]",
                      "text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                    )}
                  />
                </div>
              </div>
              <div className="w-full mb-[1.5rem]">
                <div className="flex justify-between gap-[0.5rem] max-w-[19.3125rem]">
                  <h3
                    className={clsx(
                      errors.phone_number ? "text-[#CD2C2C]" : "text-[#000]",
                      "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                    )}
                  >
                    Phone Number
                  </h3>
                  {errors.phone_number && (
                    <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                      {errors.phone_number?.message}
                    </span>
                  )}
                </div>
                <input
                  {...register("phone_number")}
                  type="tel"
                  id="number"
                  maxLength={15}
                  placeholder="+1 202-555-0136"
                  className={clsx(
                    errors.phone_number
                      ? "border-[#CD2C2C]"
                      : "border-[#CFCFCF] hover:border-[#D87D4A]",
                    "appearance-none text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                  )}
                />
              </div>
            </div>
            <div className="md:max-w-full max-w-[17.5rem] w-full">
              <h2 className="text-[0.85rem] leading-[1.5rem] tracking-[0.0625rem] font-[700] text-[#D87D4A] mb-[1rem]">
                SHIPPING INFO
              </h2>
              <div className="w-full mb-[1.5rem]">
                <div className="flex justify-between gap-[0.5rem]">
                  <h3
                    className={clsx(
                      errors.your_address ? "text-[#CD2C2C]" : "text-[#000]",
                      "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                    )}
                  >
                    Your Address
                  </h3>
                  {errors.your_address && (
                    <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                      {errors.your_address?.message}
                    </span>
                  )}
                </div>
                <input
                  {...register("your_address")}
                  type="text"
                  id="address"
                  autoComplete="address"
                  placeholder="1137 Williams Avenue"
                  className={clsx(
                    errors.your_address
                      ? "border-[#CD2C2C]"
                      : "border-[#CFCFCF] hover:border-[#D87D4A]",
                    "md:max-w-[39.80rem] text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem]  w-full rounded-lg outline-none transition-all duration-200"
                  )}
                />
              </div>
              <div className="md:flex md:gap-[1rem] md:max-w-[39.80rem] md:w-full">
                <div className="w-full mb-[1.5rem]">
                  <div className="flex justify-between gap-[0.5rem]">
                    <h3
                      className={clsx(
                        errors.zip_code ? "text-[#CD2C2C]" : "text-[#000]",
                        "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                      )}
                    >
                      ZIP Code
                    </h3>
                    {errors.zip_code && (
                      <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                        {errors.zip_code?.message}
                      </span>
                    )}
                  </div>
                  <input
                    {...register("zip_code")}
                    type="tel"
                    id="zip-code"
                    maxLength={15}
                    placeholder="10001"
                    className={clsx(
                      errors.zip_code
                        ? "border-[#CD2C2C]"
                        : "border-[#CFCFCF] hover:border-[#D87D4A]",
                      "text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                    )}
                  />
                </div>
                <div className="w-full mb-[1.5rem]">
                  <div className="flex justify-between gap-[0.5rem]">
                    <h3
                      className={clsx(
                        errors.city ? "text-[#CD2C2C]" : "text-[#000]",
                        "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                      )}
                    >
                      City
                    </h3>
                    {errors.city && (
                      <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                        {errors.city?.message}
                      </span>
                    )}
                  </div>
                  <input
                    {...register("city")}
                    type="text"
                    id="city"
                    placeholder="New York"
                    className={clsx(
                      errors.city
                        ? "border-[#CD2C2C]"
                        : "border-[#CFCFCF] hover:border-[#D87D4A]",
                      "text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                    )}
                  />
                </div>
              </div>
              <div className="w-full mb-[1.5rem]">
                <div className="flex justify-between gap-[0.5rem] max-w-[19.3125rem]">
                  <h3
                    className={clsx(
                      errors.country ? "text-[#CD2C2C]" : "text-[#000]",
                      "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                    )}
                  >
                    Country
                  </h3>
                  {errors.country && (
                    <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                      {errors.country?.message}
                    </span>
                  )}
                </div>
                <input
                  {...register("country")}
                  type="text"
                  id="country"
                  autoComplete="country"
                  placeholder="United States"
                  className={clsx(
                    errors.country
                      ? "border-[#CD2C2C]"
                      : "border-[#CFCFCF] hover:border-[#D87D4A]",
                    "text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                  )}
                />
              </div>
            </div>
            <div className="md:max-w-full max-w-[17.5rem] w-full">
              <h2 className="text-[0.85rem] leading-[1.5rem] tracking-[0.0625rem] font-[700] text-[#D87D4A] mb-[1rem]">
                PAYMENT DETAILS
              </h2>
              <div className="w-full mb-[1.5rem]">
                <h3 className="text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]">
                  Payment Method
                </h3>
                <div className="md:flex md:flex-col md:items-end md:max-w-[39.80rem] md:w-full">
                  <label
                    className={clsx(
                      selectedMethod === "eMoney"
                        ? "border-[#D87D4A]"
                        : " border-[#CFCFCF]",
                      "flex px-[1.5rem] py-[1rem] border-[0.0625rem] max-w-[19.3125rem] w-full rounded-lg cursor-pointer outline-none mb-[1rem] hover:border-[#D87D4A] transition-all duration-200"
                    )}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="e-money"
                      value="eMoney"
                      className="mr-3 text-[#D87D4A] focus:ring-0"
                      checked={selectedMethod === "eMoney"}
                      onChange={() => setSelectedMethod("eMoney")}
                    />
                    <span className="text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] select-none">
                      e-Money
                    </span>
                  </label>
                  <label
                    className={clsx(
                      selectedMethod === "cashOnDelivery"
                        ? "border-[#D87D4A]"
                        : " border-[#CFCFCF]",
                      "flex px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg cursor-pointer outline-none hover:border-[#D87D4A] transition-all duration-200"
                    )}
                  >
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      className="mr-3 text-[#FFF] focus:ring-0"
                      checked={selectedMethod === "cashOnDelivery"}
                      onChange={() => setSelectedMethod("cashOnDelivery")}
                    />
                    <span className="text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] select-none">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
              </div>
              {selectedMethod === "eMoney" ? (
                <div className="md:flex md:gap-[1rem] md:max-w-[39.80rem] md:w-full">
                  <div className="w-full mb-[1.5rem]">
                    <div className="flex justify-between gap-[0.5rem]">
                      <h3
                        className={clsx(
                          errors.e_money_number
                            ? "text-[#CD2C2C]"
                            : "text-[#000]",
                          "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                        )}
                      >
                        e-Money Number
                      </h3>
                      {errors.e_money_number && (
                        <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                          {errors.e_money_number?.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register("e_money_number")}
                      type="tel"
                      id="e-money-number"
                      maxLength={15}
                      placeholder="238521993"
                      className={clsx(
                        errors.e_money_number
                          ? "border-[#CD2C2C]"
                          : "border-[#CFCFCF] hover:border-[#D87D4A]",
                        "text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                      )}
                    />
                  </div>
                  <div className="w-full mb-[1.5rem]">
                    <div className="flex justify-between gap-[0.5rem]">
                      <h3
                        className={clsx(
                          errors.e_money_pin ? "text-[#CD2C2C]" : "text-[#000]",
                          "text-[0.75rem] leading-[1rem] tracking-[-0.0125rem] font-[700] text-[#000] mb-[0.5625rem]"
                        )}
                      >
                        e-Money PIN
                      </h3>
                      {errors.e_money_pin && (
                        <span className="text-[0.7rem] leading-[1rem] font-[700] text-[#CD2C2C] pr-[0.5rem]">
                          {errors.e_money_pin?.message}
                        </span>
                      )}
                    </div>
                    <input
                      {...register("e_money_pin")}
                      type="tel"
                      id="e-money-pin"
                      maxLength={15}
                      placeholder="6891"
                      className={clsx(
                        errors.e_money_pin
                          ? "border-[#CD2C2C]"
                          : "border-[#CFCFCF] hover:border-[#D87D4A]",
                        "text-[0.9rem] leading-[1.2rem] tracking-[-0.015rem] font-[700] px-[1.5rem] py-[1rem] border-[0.0625rem] border-[#CFCFCF] max-w-[19.3125rem] w-full rounded-lg outline-none transition-all duration-200"
                      )}
                    />
                  </div>
                </div>
              ) : (
                <div className="md:flex-row md:max-w-full flex flex-col items-center gap-[2rem] max-w-[19.3125rem]">
                  <img
                    src={deliveryIcon}
                    alt="deliveryIcon"
                    className="self-start"
                  />
                  <p className="text-[1rem] leading-[1.5rem] font-[400] text-[#000] opacity-[50%]">
                    The "Cash on Delivery" option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:max-w-[21.875rem] lg:h-max md:items-start flex flex-col items-center bg-[#FFF] p-[1.5rem] mb-[6rem] w-full rounded-lg">
            <div className="md:max-w-full max-w-[17.5rem] w-full">
              <h1 className="text-[1.15rem] leading-[1.5rem] tracking-[0.0625rem] font-[700] text-[#000] mb-[2rem] max-w-[19.3125rem] w-full">
                SUMMARY
              </h1>
              <div className="w-full h-[21.5rem] overflow-y-scroll custom-scrollbar pr-[0.5rem]">
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
                          $ {new Intl.NumberFormat("en-US").format(item.price)}
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
              </div>
              <div className="w-full">
                <div className="flex justify-between w-full mb-[0.5rem]">
                  <h2 className="text-[1rem] leading-[1.5rem] font-400 text-[#000] opacity-[50%]">
                    TOTAL
                  </h2>
                  <h2 className="text-[1.125rem] leading-[1.5rem] font-[700] text-[#000]">
                    $ {new Intl.NumberFormat("en-US").format(price)}
                  </h2>
                </div>
                <div className="flex justify-between w-full mb-[0.5rem]">
                  <h2 className="text-[1rem] leading-[1.5rem] font-400 text-[#000] opacity-[50%]">
                    SHIPPING
                  </h2>
                  <h2 className="text-[1.125rem] leading-[1.5rem] font-[700] text-[#000]">
                    $ 50
                  </h2>
                </div>
                <div className="flex justify-between w-full mb-[1.5rem]">
                  <h2 className="text-[1rem] leading-[1.5rem] font-400 text-[#000] opacity-[50%]">
                    VAT (INCLUDED)
                  </h2>
                  <h2 className="text-[1.125rem] leading-[1.5rem] font-[700] text-[#000]">
                    $ 1,079
                  </h2>
                </div>
                <div className="flex justify-between w-full mb-[2rem]">
                  <h2 className="text-[1rem] leading-[1.5rem] font-400 text-[#000] opacity-[50%]">
                    GRAND TOTAL
                  </h2>
                  <h2 className="text-[1.125rem] leading-[1.5rem] font-[700] text-[#D87D4A]">
                    $ {new Intl.NumberFormat("en-US").format(price + 50)}
                  </h2>
                </div>
                {cart.length !== 0 ? (
                  <button
                    type="submit"
                    onClick={() => {
                      handleSubmit(onSubmit);
                    }}
                    className="text-[0.9rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#D87D4A] px-[1rem] py-[0.9rem] w-full text-center outline-none hover:bg-[#FBAF85] transition-all duration-300"
                  >
                    CONTINUE & PAY
                  </button>
                ) : (
                  <button className="text-[0.8rem] leading-[1.1rem] tracking-[0.0625rem] font-[700] text-[#FFF] bg-[#FBAF85] px-[1rem] py-[0.9rem] w-full text-center outline-none cursor-default">
                    CONTINUE & PAY
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
      {finished && <Finish price={price} />}
    </div>
  );
}
export default Checkout;
