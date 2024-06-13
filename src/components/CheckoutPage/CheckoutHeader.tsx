import { PhoneIcon, DiamondIcon, MailIcon } from "../../assets/icons";
import { FlagDetection } from "../ui/FlagDetection";

export const CheckoutHeader = () => {
  return (
    <div className="bg-[#D92D20] w-full p-4">
      <div className="container-1200 flex items-center justify-between text-white font-medium uppercase flex-col lg:flex-row">
        <div className="flex gap-2">
          <PhoneIcon />
          <div className="text-xs min-w-[393px]:text-14">
            ORDER BY PHONE: +1 888 472 1030
          </div>
          <FlagDetection className="lg:!hidden" />
        </div>
        <div className=" items-center gap-2 hidden lg:flex">
          <DiamondIcon />
          EXCLUSIVE OFFER FOR:
          <FlagDetection className="hidden lg:flex" />
        </div>
        <div className="flex items-center text-xs min-w-[393px]:text-14 gap-2 mt-3 lg:mt-0">
          <MailIcon />
          <span>
            NEED HELP?{" "}
            <span className="border-b-2">CLICK HERE TO CONTACT US</span>
          </span>
        </div>
      </div>
    </div>
  );
};
