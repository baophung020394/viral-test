import { Tooltip } from "@chakra-ui/react";
import { GraySection } from "../ui";

export const GuarantyDays = () => {
  return (
    <GraySection className="mt-[25px] ">
      <div className="flex items-center justify-center">
        <img src="/checkout/moneyback.svg" alt="365-day-money-back" />
      </div>
      <Tooltip
        bg={"#039855"}
        textColor={"white"}
        borderRadius={"8px"}
        paddingX="15px"
        paddingY="12px"
        placement="top"
        width={"372px"}
        label={
          <div className="text-14 font-bold">
            If you're not happy for any reason whatsoever let us know. We'll
            issue you a full refund - No Questions Asked!
          </div>
        }
      >
        <div className="text-16 font-bold-450 mt-5">
          Here's the deal: I'm so confident that you'll see the value in the
          Faceless Income Fast-Start that I'm giving you my 365-day,
          no-questions-asked guarantee. Yeah, you read that right - If you feel
          like you haven't gotten your money's worth, just shoot me an email any
          day of the year... Heck, even if it's day 364. You'll get a full
          refund, no questions asked.{" "}
          <span className="font-bold">
            You could literally watch everything, implement it, make money, keep
            the money, and still get your money back if you're not satisfied.
          </span>
        </div>
      </Tooltip>
    </GraySection>
  );
};
