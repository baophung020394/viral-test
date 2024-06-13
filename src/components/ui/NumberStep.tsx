import { Step, StepSeparator } from "@chakra-ui/react";
import { cn } from "../../utils/utils";

export const NumberStep = ({
  index,
  isActive,
  title,
}: {
  index: number;
  isActive?: boolean;
  title: string;
}) => {
  return (
    <Step key={index} className="!gap-0">
      <div className="relative">
        <div
          className={cn(
            " w-[30px] h-[30px] rounded-full text-center text-white font-medium text-sm flex items-center justify-center",
            isActive ? "bg-[#D92D20]" : "bg-[#C9C9C9]",
          )}
        >
          {++index}
        </div>

        <div
          className={cn(
            `absolute bottom-0 left-[50%] translate-y-full -translate-x-2/4 text-center w-fit text-nowrap text-xs md:text-base ${
              isActive ? "font-bold text-black" : "font-normal text-[#888888]"
            }`,
          )}
        >
          {title}
        </div>
      </div>
      <StepSeparator className="!ml-0" />
    </Step>
  );
};
