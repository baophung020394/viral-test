import SalesPageHeadLine from "./SalesPageHeadLine";
import { Heading } from "@chakra-ui/react";
import sampleImg from "./assets/sampleImg.png";
import SpotFormSection from "./SpotForm";

const EverythingYouNeed = () => {
  const featuresList = [
    {
      img: sampleImg,
      title: "THE 5-DAY FAST-START",
      description:
        "It's your chance to launch your faceless channel in just FIVE action-packed days; you will get jam-packed training, fired-up energy, and zero time wasted!",
    },
    {
      img: sampleImg,
      title: "100+ CHANNEL IDEAS",
      description:
        "You will get access to Jake's personal list of the untapped channel ideas that he's eyeballing right now. If Jake was to start over today, these would be the profitable channel ideas he would start because NO ONE is doing them ($97 value)",
    },
    {
      img: sampleImg,
      title: "CHANNEL PROFIT CALCULATOR",
      description:
        "This plug-and-play channel-profit calculator helps you predict how your channel will perform based on data from Jake's channels.",
    },
    {
      img: sampleImg,
      title: "CHANNEL LAUNCH CHECKLIST",
      description:
        "Make sure you don't miss any crucial elements from this 10+ step checklist (applies to every channel, regardless of niche), and don't leave any money on the table.",
    },
    {
      img: sampleImg,
      title: "YOUTUBE FLAG WORDS",
      description:
        "Few people are aware of them, but they do exist; avoid these niches and mentioning any of these words, as they could cause YouTube to stop sending you payments.",
    },
  ];

  return (
    <div className="my-[100px] flex flex-col w-screen px-6 md:-mt-0 -mt-6">
      <SalesPageHeadLine
        text="Here's everything you will get:"
        textAlign="center"
        mb="30"
        className="text-4xl"
      />

      {/* Container */}
      <div className="mx-[10%] flex flex-col gap-y-6">
        {/* Card */}

        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col justify-center items-center mb-[25px]"
          >
            <div className="md:hidden block w-full">
              <img
                src={feature.img}
                alt={feature.title}
                className="h-auto w-full rounded-[20px] mr-[28px]"
              />
            </div>
            <div className="md:block hidden">
              <img
                src={feature.img}
                alt={feature.title}
                className="h-auto max-h-[198px] w-auto max-w-[264px] rounded-[20px] mr-[28px]"
              />
            </div>
            <div className="md:mt-0 mt-5">
              <Heading fontSize="28px" fontWeight="700" mb="15px">
                {feature.title}
              </Heading>
              <p className="text-xl">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <SpotFormSection />
    </div>
  );
};

export default EverythingYouNeed;
