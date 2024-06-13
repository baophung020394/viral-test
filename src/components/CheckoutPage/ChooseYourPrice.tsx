import { LabelCheckbox } from "../ui/Checkbox";
import { GraySection } from "../ui";
import { YoutubeScreenIcon } from "../../assets/icons";
import { Tooltip } from "@chakra-ui/react";
import { checkoutPriceOption } from "../../constants";

export const ChooseYourPrice = ({
  getCheckboxProps,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getCheckboxProps: any;
}) => {
  return (
    <GraySection
      className="mt-5 md:mt-[25px]"
      label="Choose Your Price Option"
      icon={<YoutubeScreenIcon />}
    >
      <LabelCheckbox
        {...getCheckboxProps({ value: checkoutPriceOption["5_day_start"] })}
        alwayChecked
      >
        <div className="w-full flex justify-between">
          <span>5-Day Fast Start</span>
          <div className="flex items-center gap-[10px]">
            <span className="text-16 font-bold-450 line-through text-[#888888]">
              $39
            </span>
            <span className="text-16 font-bold">$3.00</span>
          </div>
        </div>
      </LabelCheckbox>

      <LabelCheckbox
        {...getCheckboxProps({
          value: checkoutPriceOption["5_day_start_endless"],
        })}
      >
        <Tooltip
          placement="top-start"
          hasArrow
          bg="white"
          textColor={"black"}
          width={"394px"}
          paddingY={"12px"}
          label={
            <>
              <div className="font-bold text-12 bg-[#FFFB19] px-[10px]">
                Get endless video ideas for your channel in 10 minutes
              </div>
              <div className="px-3 mt-[6px] text-xs">
                To keep earning, you need to stay creative and keep posting new
                videos. Jake’s system <b>automates</b> the brainstorming process
                with a proven formula for only <b>$27</b>
              </div>
            </>
          }
        >
          <div className="w-full flex justify-between flex-col md:flex-row">
            <span className="text-pretty md:text-balance">
              5-Day Fast Start + Endless Video Ideas System
            </span>
            <div className="flex items-start gap-[10px] mt-2 md:mt-0">
              <span className="text-16 font-bold-450 line-through text-[#888888]">
                $297
              </span>
              <span className="text-16 font-bold text-nowrap">
                Add for only $27 more
              </span>
            </div>
          </div>
        </Tooltip>
      </LabelCheckbox>
    </GraySection>
  );
};
