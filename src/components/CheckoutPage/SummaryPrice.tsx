import { DoubleArrowRight } from "../../assets/icons";
import { useCheckout } from "../../providers/CheckoutProvider";

export const SummaryPrice = () => {
  const { handleCreditCard, amount } = useCheckout();

  return (
    <div className="mt-[93px]">
      <div className="flex w-full justify-between text-[#F24035] text-22 font-bold py-[10px] border-b border-b-[#E7E7E7]">
        <div>Normal Price:</div>
        <div className="line-through">$39</div>
      </div>
      <div className="flex w-full justify-between text-[#212529] text-18 font-bold py-[10px] border-b border-b-[#E7E7E7]">
        <div>Your Price Today:</div>
        <div>US${amount}</div>
      </div>
      <div className="flex w-full justify-between text-[#212529] text-18 font-bold py-[10px] border-b border-b-[#E7E7E7]">
        <div>Subtotal:</div>
        <div>US$0.00</div>
      </div>
      <div className="flex w-full justify-between text-[#7E7E7E] text-18 font-bold py-[10px] border-b border-b-[#E7E7E7]">
        <div>Tax:</div>
        <div>US$0.00</div>
      </div>

      <div className="flex w-full justify-between text-[#212529] text-22 font-bold py-[10px]">
        <div>Total:</div>
        <div>US${amount}</div>
      </div>

      <div
        className="mt-[30px] bg-[#D92D20] py-[30px] italic text-26 font-black text-white text-center uppercase rounded-xl flex gap-[10px] items-center justify-center cursor-pointer"
        onClick={handleCreditCard}
      >
        <span>Click to continue</span>
        <DoubleArrowRight />
      </div>

      <div className="flex justify-center mt-10 flex-col items-center">
        <img
          src="/images/checkout-trusted.png"
          alt="trusted-checkout"
          className="w-[300px]"
        />
        <div className="mt-[10px] max-w-[265px] text-16 font-bold-450 text-center">
          We securely process payments with 256-bit security encryption
        </div>
      </div>
    </div>
  );
};
