import { Image } from "@chakra-ui/react";

import JakePaul from "../../assets/images/jakepaul.png";
import JakePaulAvatar from "../../assets/images/jakepaula.png";
import MrBeast from "../../assets/images/mrbeast.png";
import MrBeastAvatar from "../../assets/images/mrbeasta.png";
import Ryan from "../../assets/images/ryan.png";
import RyanAvatar from "../../assets/images/ryans.png";

import JakeTranAvatar from "../../assets/images/jakeyt.png";
import JakeTran from "../../assets/images/yt2.png";

import Yt1Avatar from "../../assets/images/yt1_avatar.png";
import Yt1 from "../../assets/images/yt1.png";

import Yt2Avatar from "../../assets/images/yt2_avatar.png";
import Yt2 from "../../assets/images/yt3.png";
import { CountUpAnimation } from "../CountUpAnimation";

export const Card = ({
  name,
  backgroundUrl,
  avatarUrl,
  value,
}: {
  name: string;
  backgroundUrl: string;
  avatarUrl: string;
  value: string;
}) => {
  return (
    <div className="text-black flex flex-col justify-center items-center ">
      <p className="text-xl font-semibold mb-3">{name}</p>

      <div className="flex flex-col items-center justify-center bg-[#FAFAFA] w-64 h-64 rounded-2xl border-[#E7E7E7] border-[1.5px]">
        <div className="-mt-5 mb-5">
          <Image src={backgroundUrl} alt="Jake Paul" />
        </div>

        <div className="absolute z-40 w-24 h-24 flex justify-center -mt-6 mb-3">
          <Image src={avatarUrl} alt="Jake Paul" />
        </div>

        <div className="w-5/6 flex justify-center mt-14">
          <div className="mt-0.5 w-full flex justify-center border-white border-[2.5px] shadow-gray-300 bg-black h-12 rounded-xl shadow-xl ">
            <CountUpAnimation duration={1200} number={value} symbol="$" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card2 = ({
  backgroundUrl,
  avatarUrl,
  value,
}: {
  backgroundUrl: string;
  avatarUrl: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl">
      <div className="flex flex-col items-center justify-center bg-[#FAFAFA] w-64 h-60 rounded-2xl border-[#E7E7E7] border-[1.5px]">
        <div className="-mt-3.5 mb-8 ">
          <Image src={backgroundUrl} alt="Jake Paul" />
        </div>

        <div className="absolute z-40 w-24 h-24 flex justify-center -mt-7 mb-8 ">
          <Image src={avatarUrl} alt="Jake Paul" />
        </div>

        <div className="w-5/6 flex justify-center mt-14 ">
          <div className="mt-0.5 w-full flex flex-col items-center justify-center border-white border-[2.5px] shadow-gray-300 bg-black h-16 rounded-xl shadow-xl ">
            <CountUpAnimation duration={1200} number={value} />
            <p className="text-[#FDA29B] text-xs font-regular">Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesCard = ({ type }: { type: number }) => {
  return (
    <>
      {type === 1 ? (
        <div className="flex md:flex-row flex-col gap-y-8 gap-x-6 mb-16">
          <Card
            name="Mr. Beast"
            backgroundUrl={MrBeast}
            avatarUrl={MrBeastAvatar}
            value="50000000"
          />
          <Card
            name="Jake Paul"
            backgroundUrl={JakePaul}
            avatarUrl={JakePaulAvatar}
            value="45000000"
          />
          <Card
            name="Ryan's World"
            backgroundUrl={Ryan}
            avatarUrl={RyanAvatar}
            value="32000000"
          />
        </div>
      ) : (
        <div className="flex md:flex-row flex-col gap-y-8 gap-x-6 mb-16">
          <div className="mt-6">
            <Card2 backgroundUrl={Yt1} avatarUrl={Yt1Avatar} value="274000" />
          </div>
          <div>
            <Card2
              backgroundUrl={JakeTran}
              avatarUrl={JakeTranAvatar}
              value="1820000"
            />
          </div>
          <div className="mt-6">
            <Card2 backgroundUrl={Yt2} avatarUrl={Yt2Avatar} value="18100" />
          </div>
        </div>
      )}
    </>
  );
};

export default SalesCard;
