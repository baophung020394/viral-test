import { Image } from "@chakra-ui/react";

import GroupSpeak from "./assets/Group.png";
import SalesPageHeadLine from "./SalesPageHeadLine";

import Speak1 from "./assets/Speak1.png";
import Speak2 from "./assets/Speak2.png";
import Speak3 from "./assets/Speak3.png";
import Speak4 from "./assets/Speak4.png";

import SalesGroup1 from "../../assets/images/sales_group1.png";

const ResultSpeak = () => {
  return (
    <div id="resultspeak" className="">
      <SalesPageHeadLine
        text="The results speak <br> for themselves…"
        textAlign="center"
      />

      <div className="md:hidden flex flex-col ">
        <Image src={Speak1} className="mr-5 -mb-10" alt="" />
        <Image src={Speak2} className="ml-5 -mb-10" alt="" />
        <Image src={Speak3} className="mr-5 -mb-10" alt="" />
        <Image src={Speak4} className="ml-5 -mb-10" alt="" />
      </div>

      <div className="md:block hidden relative h-[1000px]">
        <img
          className="lg:left-[35%] md:left-[9%] left-[5%] absolute"
          src={Speak1}
        />
        <img
          className="top-[20%] lg:left-[15%] left-[5%] absolute"
          src={Speak2}
        />
        <img
          className="lg:left-[35%] md:left-[9%] top-[400px] absolute"
          src={Speak3}
        />
        <img
          className="lg:left-[15%] left-[5%] top-[600px] absolute"
          src={Speak4}
        />
      </div>

      <div className="md:hidden flex flex-col w-full px-5 -mt-8 justify-center">
        <img src={SalesGroup1} alt="" className="object-cover border-2" />
      </div>
      <div className="md:block hidden">
        <img src={GroupSpeak} className="mx-auto" />
      </div>
    </div>
  );
};

export default ResultSpeak;
