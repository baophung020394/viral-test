import { Heading } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
import day1 from "./assets/sylalbus/Day1.png";
import day2 from "./assets/sylalbus/Day2.png";
import day3 from "./assets/sylalbus/Day3.png";
import day4 from "./assets/sylalbus/Day4.png";
import day5 from "./assets/sylalbus/Day5.png";

// import arrow1 from "./assets/arrows/Arrow1.png";
// import arrow2 from "./assets/arrows/Arrow2.png";
// import arrow3 from "./assets/arrows/Arrow3.png";
// import arrow4 from "./assets/arrows/Arrow4.png";
// import arrow5 from "./assets/arrows/Arrow5.png";

const DayCardOdd = ({
  imgUrl,
  day,
  content,
}: {
  imgUrl: string;
  day: number;
  content: string;
}) => {
  return (
    <div className=" flex md:flex-row flex-col gap-y-12 justify-between lg:w-4/5 w-full mb-[60px]">
      <div className="flex justify-center md:mr-8 ">
        <img
          src={imgUrl}
          alt="DAY 1"
          className="z-10 object-contain rounded-[20px]"
        />
      </div>
      <div className="w-full flex flex-col ">
        <Heading fontSize="28px" fontWeight="700" mb="15px">
          DAY {day}
        </Heading>
        <div className="text-xl flex flex-col">
          <p>{content}</p>
        </div>
      </div>
      {/* <div className="absolute ml-[31%] mt-[18%]">
            <Image src={arrow1} alt="" />
          </div> */}
    </div>
  );
};

const DayCardEven = ({
  imgUrl,
  day,
  content,
}: {
  imgUrl: string;
  day: number;
  content: string;
}) => {
  return (
    <div className=" flex md:flex-row flex-col gap-y-12 justify-between lg:w-4/5 w-full mb-[60px]">
      <div className="md:flex hidden w-full flex-col md:mr-8 ">
        <Heading fontSize="28px" fontWeight="700" mb="15px">
          DAY {day}
        </Heading>
        <div className="text-xl flex flex-col">
          <p>{content}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={imgUrl}
          alt="DAY 1"
          className="z-10 object-contain rounded-[20px]"
        />
      </div>
      <div className="md:hidden flex w-full flex-col ">
        <Heading fontSize="28px" fontWeight="700" mb="15px">
          DAY {day}
        </Heading>
        <div className="text-xl flex flex-col">
          <p>{content}</p>
        </div>
      </div>
      {/* <div className="absolute ml-[31%] mt-[15%]">
        <Image src={arrow2} alt="" />
      </div> */}
    </div>
  );
};
const Syllabus = () => {
  return (
    <div className="flex justify-center">
      {/* Container */}
      <div className="mx-[10%] flex flex-col justify-center items-center">
        <DayCardOdd
          imgUrl={day1}
          day={1}
          content="In the first video, you'll learn exactly how the system works, how
            to get the most out of this Fast Start, why YouTube is the best
            recession-proof source of income for the next decade, and how you
            can start earning from YouTube too!"
        />

        <DayCardEven
          imgUrl={day2}
          day={2}
          content="Once you understand how the system works, we'll dive into the most
              crucial aspect: finding your YouTube channel idea-that's where
              many beginners stumble unless they're following the right process.
              We'll tackle it together, and my team will be right there to hold
              your hand every step of the way."
        />

        <DayCardOdd
          imgUrl={day3}
          day={3}
          content={`This is where the magic happens— this is where we'll build your
              entire "profit factory" together. You'll learn how to turn your
              new videos into profit without having to create the videos
              yourself.`}
        />

        <DayCardEven
          imgUrl={day4}
          day={4}
          content="This is the part our students love the most-you'll discover how to
              earn your first paycheck from YouTube and how to implement my
              little-known income stream on your channel that allows you to get
              paid even before posting a video."
        />

        <DayCardOdd
          imgUrl={day5}
          day={5}
          content="On your last day, I'll show you how to take everything we've built
              over the past four days and transform it into a six-figure
              business that runs on autopilot, requiring no more than seven
              hours a week to manage."
        />
      </div>
    </div>
  );
};

export default Syllabus;
