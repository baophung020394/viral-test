import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

const SalesFAQ = () => {
  return (
    <div className="bg-[#FFF8F8] w-full flex flex-col items-center justify-center">
      <div className="text-black md:w-1/2 w-ful lg:px-20 px-12">
        <div className="mt-12 -mb-10">
          <Heading
            mb={{ base: "45px", md: "50px" }}
            fontWeight={900}
            textAlign="center"
            fontSize={{ base: "22px", md: "38px" }}
            letterSpacing="-1%"
            fontFamily="CircularStd"
          >
            Are you trying to look for more answers?
          </Heading>
        </div>
        <Accordion className="w-full" allowMultiple>
          <AccordionItem className="mt-3 border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold">WHO IS THIS FOR?</span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2 " pb={4}>
              It doesn't really matter whether you're working a 9-5, studying,
              freelancing, or even running a business. What truly matters is
              this - if you're someone who's looking for more ways to improve
              your life, this is the right choice for you. You're going to get
              new tools that will allow you to start your own faceless channel,
              improve financially and spark a wildfire of passion and excitement
              in your life.
            </AccordionPanel>
          </AccordionItem>{" "}
          <div className="px-3">
            <hr className="w-full h-0.5 border-0 rounded bg-black" />
          </div>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold">
                  WILL THIS WORK FOR ME?
                </span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2">
              I discovered this system when I had nothing but a laptop and a dog
              pissing all over my place. I didn't have much time, or any
              knowledge about YouTube at all. But I had the most important thing
              - a burning desire to change my life. I used it as fuel to achieve
              my goals, and well - it paid off. What I wanna say is if your life
              story is at least in some way similar to mine - you have at least
              30 - 60 minutes a day, a computer, and the desire - then you can
              make this work.{" "}
              <span className="underline font-semibold text-[#F40000]">
                <HashLink smooth to="/sales#resultspeak">
                  Check out the results above
                </HashLink>
              </span>{" "}
              and take the jump. Damn it's only three bucks!
            </AccordionPanel>
          </AccordionItem>{" "}
          <div className="px-3">
            <hr className="w-full h-0.5 border-0 rounded bg-black" />
          </div>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold uppercase">
                  How Does Your System Work?
                </span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2">
              The Faceless Income System works by leveraging YouTube's algorithm
              for your own financial advantage. Using my tools, templates, and
              formulas, you'll be able to automate the whole process, “cheat”
              the algorithm, get thousands of views on your videos, and turn
              them into profit. Inside the fast-start, you'll discover multiple
              ways to turn views into profit - and it's up to you which one you
              choose as your primary source of income. Each of them works, as
              I've been using them all for over 5 years on my own channels.{" "}
            </AccordionPanel>
          </AccordionItem>{" "}
          <div className="px-3">
            <hr className="w-full h-0.5 border-0 rounded bg-black" />
          </div>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold">
                  WHAT IS INCLUDED IN THE FAST-START?
                </span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2">
              Inside the fast-start, you'll discover 5 short but valuable videos
              that will get your new faceless channel off the ground. Along with
              all the bonuses, such as the{" "}
              <strong>
                Channel Launch Checklist, 100+ Channel Ideas, and Channel Profit
                Calculator
              </strong>
              , you'll be able to plug my entire system into your new channel
              and turn it to a new income source for yourself. You're getting
              all the tools that have helped me make over $1 million from
              YouTube just in the last year.
            </AccordionPanel>
          </AccordionItem>{" "}
          <div className="px-3">
            <hr className="w-full h-0.5 border-0 rounded bg-black" />
          </div>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold">
                  DO I HAVE TO CREATE VIDEOS ON MY OWN?
                </span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2">
              You can if you want to, it's easy, but you're also getting a
              blueprint for automating the whole process using my outsourcing
              method. Once you use my outsourcing method, you'll be able to
              automate the whole video creation process - all the way from
              generating an idea to the realization - without even moving a
              finger and doing the work yourself.
            </AccordionPanel>
          </AccordionItem>{" "}
          <div className="px-3">
            <hr className="w-full h-0.5 border-0 rounded bg-black" />
          </div>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold">
                  IS THIS FAST-START COVERED BY A 100% MONEY-BACK GUARANTEE?
                </span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2">
              Yes, it truly is. As I said earlier, if you feel like you haven't
              gotten your money's worth, just email us at{" "}
              <span className="underline font-semibold text-[#F40000]">
                hello@viralprofits.yt
              </span>{" "}
              within 365 days of your purchase, and you will get a full refund!
            </AccordionPanel>
          </AccordionItem>{" "}
          <div className="px-3">
            <hr className="w-full h-0.5 border-0 rounded bg-black" />
          </div>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold">
                  CAN'T I JUST FIND IT ANYWHERE ELSE, JAKE?
                </span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2">
              You can, if you're willing to spend over five years trying to
              piece together free tutorials on YouTube, figure it out on your
              own, spend half a million dollars on testing what works and fail
              multiple times like I did. My battle-tested, proven-to-work
              tactics are your shortcut to what's working right now. I spent the
              last 5 years going through every obstacle and learning from each
              setback so you don't have to.
            </AccordionPanel>
          </AccordionItem>{" "}
          <div className="px-3">
            <hr className="w-full h-0.5 border-0 rounded bg-black" />
          </div>
          <AccordionItem className="border-b border-gray-200 py-[17px] dark:!border-white/10">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold">
                  DO I NEED PAST EXPERIENCE WITH YOUTUBE?
                </span>
                <AccordionIcon className="text-left " />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-left text-medium mt-2">
              Nope, the entire fast-start is designed to get your new channel
              going, no matter your experience level. If you've never made a
              YouTube video, or a YouTube channel… heck if you barely ever open
              YouTube… this is for you. All you need to do is follow the steps I
              show you inside the fast-start, and you're good to go.
            </AccordionPanel>
          </AccordionItem>{" "}
        </Accordion>
      </div>
    </div>
  );
};

export default SalesFAQ;
