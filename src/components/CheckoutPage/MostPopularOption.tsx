import { Tooltip } from "@chakra-ui/react";
import { PointerIcon } from "../../assets/icons";
import { LabelCheckbox } from "../ui/Checkbox";
import { checkoutPriceOption } from "../../constants";

export const MostPopularOption = ({
  getCheckboxProps,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
}) => {
  return (
    <div className="mt-5 md:mt-[25px]">
      <div className="w-full flex gap-5 items-center justify-center">
        <span className="text-28">🔥</span>
        <div className="uppercase bg-[#D92D20] rounded-lg py-3 px-10 text-16 md:text-20 font-bold text-white inline-block">
          MOST POPULAR OPTION
        </div>
        <span className="text-28">🔥</span>
      </div>

      <div className="mt-[21px]">
        <div
          className=" rounded-lg p-[25px] relative bg-[#FFFBFA]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23D92D20FF' stroke-width='1' stroke-dasharray='10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
        >
          <div className="flex justify-center items-start">
            <div className="animate-text-move-bottom-up relative w-14 mt-2">
              <img
                src="/images/red-arrow-right.png"
                alt="red-arrow"
                width="30"
                height="12"
              />
            </div>

            <LabelCheckbox
              className="mt-0 flex !items-start"
              {...getCheckboxProps({
                value: checkoutPriceOption["5_day_start_endless"],
              })}
            >
              <Tooltip
                placement="top-start"
                hasArrow
                bg="white"
                textColor={"black"}
                width={"383px"}
                paddingY={"12px"}
                label={
                  <>
                    <div className="font-bold text-sm bg-[#FFFB19] px-[10px]">
                      74% of our members choose this upgrade
                    </div>
                    <div className="px-3 mt-[6px] text-xs">
                      This is only for those want to{" "}
                      <b>INSTANTLY find new & unique video ideas</b> that are
                      proven to go big.{" "}
                      <b>Usually $197, but today only $27 ($170 savings)</b>
                    </div>
                  </>
                }
              >
                <span className="text-[#D92D20] font-black :text-22 text-balance">
                  YES UPGRADE MY ORDER WITH “ENDLESS VIDEO IDEAS” SYSTEM ($297
                  VALUE)
                </span>
              </Tooltip>
            </LabelCheckbox>
          </div>

          <p className="mb-[71px] mt-[15px] md:mt-[34px] text-16 font-bold-450">
            <span className="font-bold">Save yourself time</span> and{" "}
            <span className="font-bold">generate unique video ideas</span> for
            your channel in just <span className="font-bold">10 minutes.</span>{" "}
            To keep earning, you need to stay creative and keep posting new
            videos. Jake’s system <span className="font-bold">automates</span>{" "}
            the brainstorming process with a proven formula.{" "}
            <span className="font-bold">Over 97% of our users</span> say they
            wish they’d had this system earlier. Grab instant access now for
            just <span className="font-bold">$27</span> (a $170 savings). The
            price goes up to $197 later.{" "}
            <span className="font-bold">
              Check the box above to get instant access!
            </span>
          </p>
          <Tooltip
            placement="top-start"
            hasArrow
            bg="white"
            textColor={"black"}
            width={"383px"}
            paddingY={"12px"}
            label={
              <>
                <div className="font-bold text-sm bg-[#FFFB19] px-[10px]">
                  74% of our members choose this upgrade
                </div>
                <div className="px-3 mt-[6px] text-xs">
                  This is only for those want to{" "}
                  <b>INSTANTLY find new & unique video ideas</b> that are proven
                  to go big.{" "}
                  <b>Usually $197, but today only $27 ($170 savings)</b>
                </div>
              </>
            }
          >
            <div className="italic font-black text-20 md:text-26 py-5 md:py-[30px] px-[42px] bg-[#21B209] text-white text-center absolute bottom-0 left-1/2 -translate-x-2/4 translate-y-2/4 text-nowrap rounded-xl flex gap-4 cursor-pointer">
              <span className="uppercase">Yes, Add To My Order</span>{" "}
              <PointerIcon />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
