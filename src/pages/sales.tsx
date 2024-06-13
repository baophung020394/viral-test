import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Optin1 from "../assets/images/optin-1.png";
import Flash from "../assets/images/flash.png";
import Money from "../assets/images/money.png";
import Shield from "../assets/images/shield.png";
import SaleDog from "../assets/images/sale-dog.png";
import Optin2 from "../assets/images/optin-2.png";
import SalesReport from "../assets/images/sales_report.png";
import SalesYt from "../assets/images/salesYt.png";
import Photo from "../assets/images/photo.png";
import SalesAlgo from "../assets/images/salesAlgo.png";
import SalesMrB from "../assets/images/salesMrB.png";
import SalesRv from "../assets/images/salesrv.png";
import SalesFAQ from "../components/SalesFAQ";
import Footer from "../components/shared/Footer";
// import VideoPlayer from "../components/VideoPlayer";
// import VideoPlaceholder from "../components/VideoPlayer/placeholder";
import SalesTextHeading from "../components/SalesTextHeading";
import SalesCard from "../components/SalesCard";
import EverythingYouNeed from "../components/SalesPageComponents/EverythingYouNeed";
import SyllabusNSpeaks from "../components/SalesPageComponents/SyllabusNSpeaks";
import LeftWing from "../assets/images/sales_left.png";
import RightWing from "../assets/images/sales_right.png";
import SalesSub from "../assets/images/salesTitle.png";
import SalesPhoto1 from "../assets/images/sales1.png";
import SalesPhoto2 from "../assets/images/sales2.png";
import SalesPhoto3 from "../assets/images/sales3.png";
import SalesPhoto4 from "../assets/images/sales4.png";
import SalesTitlePC from "../assets/images/salesTitlePC.png";
import CountDown from "../components/CountDown";
import { SalesButton } from "../components/SalesButton";

const avatars = [
  {
    src: "/images/avatar-1.png",
    alt: "Avatar 1",
  },
  {
    src: "/images/avatar-2.png",
    alt: "Avatar 2",
  },
  {
    src: "/images/avatar-3.png",
    alt: "Avatar 3",
  },
  {
    src: "/images/avatar-4.png",
    alt: "Avatar 4",
  },
  {
    src: "/images/avatar-5.png",
    alt: "Avatar 5",
  },
  {
    src: "/images/avatar-6.png",
    alt: "Avatar 6",
  },
  {
    src: "/images/avatar-7.png",
    alt: "Avatar 7",
  },
];

const SalesPage = () => {
  return (
    <>
      <CountDown />
      <div className="flex flex-col justify-center items-center h-screen w-screen object-bottom-left">
        {/* Hero Section */}
        <div>
          <div className="-z-10">
            <Image
              src={Optin2}
              alt="Opt In Top"
              position="absolute"
              top="0"
              right="0"
            />
          </div>
          <div className="absolute -z-10 inset-0 h-screen w-screen">
            <Image
              src={Optin1}
              alt="Opt In Bottom"
              position="absolute"
              bottom="0"
              left="0"
            />
          </div>
          <div className="z-40 lg:mt-8 md:mt-20 mt-36">
            <Box
              width={{
                base: "90%",
                md: "max-content",
              }}
              margin="0 auto"
              className="flex justify-center items-center flex-col"
            >
              <div className="flex justify-center items-center w-4/5 z-40 px-10 -mb-5">
                <Image
                  src={SalesTitlePC}
                  className="md:flex hidden ml-3 md:mb-0 mb-5"
                />
                <p className="md:hidden block text-center text-2xl font-bold mb-14 mt-0">
                  Please watch this important <br /> video with your results
                  below
                </p>
              </div>

              <Box
                width={{
                  base: "100%",
                  md: "max-content",
                }}
                className="flex justify-center items-center w-4/5"
                margin="0 auto"
              >
                <div className="flex w-full h-full">
                  <iframe className="" src="https://iframe.mediadelivery.net/embed/185727/d13df80f-54e9-4cd9-af93-23f34f3946ad?autoplay=true&loop=false&muted=false&preload=true&responsive=true" />
                  {/* <Box className="flex" height="300px" width="480px" mt="-18px">
                    <VideoPlayer
                      url={"https://files.vidstack.io/sprite-fight/720p.mp4"}
                      placeholder={(onClick) => (
                        <VideoPlaceholder onClick={onClick} />
                      )}
                    />
                  </Box> */}
                </div>
              </Box>

              <div className=" mt-8">
                <SalesButton />
              </div>

              <div className="flex justify-center mt-5">
                <Flex m="0 auto">
                  {avatars.map((avatar) => (
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      key={avatar.alt}
                      h="42px"
                      w="42px"
                      ml="-12px"
                    />
                  ))}
                  <Flex
                    h="42px"
                    w="42px"
                    borderRadius="50%"
                    border="1px solid #CFCFCF"
                    justifyContent="center"
                    alignItems="center"
                    bg="#fff"
                    ml="-12px"
                  >
                    <Text
                      color="primary"
                      fontWeight="450"
                      fontSize="12px"
                      lineHeight="15.18px"
                    >
                      451+
                    </Text>
                  </Flex>
                </Flex>
              </div>
            </Box>

            <div className="flex lg:flex-row flex-col justify-between mt-5  gap-x-1">
              <div className="flex justify-center gap-x-1">
                <div>
                  <Image src={Flash} alt="" h="18px" w="18px" mt="3px" />
                </div>
                <p className="text-sm p-0.5">Instant Access</p>
              </div>
              <div className="flex justify-center gap-x-1">
                <div>
                  <Image src={Money} alt="" h="18px" w="18px" mt="3px" />
                </div>
                <p className="text-sm p-0.5">365-Day Money-Back Guarantee</p>
              </div>
              <div className="flex justify-center gap-x-1">
                <div>
                  <Image src={Shield} alt="" h="18px" w="18px" mt="3px" />
                </div>
                <p className="text-sm p-0.5">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Section */}
      </div>
      {/* Body */}
      <div className="flex flex-col justify-center items-center bg-white">
        <Image src={SaleDog} alt="" h="325px" w="400px" />
        <SalesTextHeading
          header="Five years ago, I was just like you…"
          data={[
            ` <p>
            I was just a regular student, went to college, and eventually
            dropped out…
          </p>
          <p>Then I got stuck in a 9-5 job...</p>
          <p>I had no free time</p>
          <p>And I was desperately looking for ways to make more money</p>
          <p>
            Back then, I had no idea how much money you could make from
            YouTube...
          </p>
          <p>I had never created a successful YouTube channel before...</p>
          <p>
            But I was determined, so I pushed through and cracked the code in
            just a few months.
          </p>`,
          ]}
        />

        <SalesTextHeading
          header="The reason I could make a full-time income from YouTube in months is
          because…"
          data={[
            `<p>
          <mark>
            YouTube has been paying its creators $63 million daily for the last
            three years…
          </mark>
        </p>
        <p>
          <mark>
            And everyone on YouTube right now can get a piece of the pie.
          </mark>
        </p>
        <p>Mr. Beast makes over $50 million a year from YouTube…</p>
        <p>Jake Paul makes over $45 million a year…</p>
        <p>
          And Ryan, who's just a 12 year old kid, pulls in $32 million a year!
        </p>`,
          ]}
        />

        <SalesCard type={1} />

        <SalesTextHeading
          header="These are the top players. But in total it's only about 0.04% of
            what YouTube has actually paid out…"
          data={[
            ` <p>
            <mark>
              The remaining 99.96% go to people like me, running
              behind-the-scenes faceless channels.
            </mark>
          </p>

          <p>
            I mean, look at the graph that shows YouTube's growth over the last
            13 years…
          </p>`,
          ]}
        />

        <div className="flex mb-16">
          <Image src={SalesReport} alt="" />
        </div>

        <SalesTextHeading
          data={[
            ` 
          <p>It's been steadily growing every single year…</p>
          <p>…And as it grows further, your income will grow with it.</p>
          <p>Just like mine has with the 3 channels I own:</p>`,
          ]}
        />

        <SalesCard type={2} />

        <div className="z-10 flex -mt-8 mb-12">
          <Image src={Photo} alt="" className="md:block hidden" />
        </div>

        <div className="md:hidden flex flex-col w-full px-16">
          <Image src={SalesSub} className="px-12" alt="" />
          <Image src={SalesPhoto1} className="-mb-20" alt="" />
          <Image src={SalesPhoto2} className="-mb-20" alt="" />
          <Image src={SalesPhoto3} className="-mb-20" alt="" />
          <Image src={SalesPhoto4} className="mb-3" alt="" />
        </div>

        <SalesTextHeading
          data={[
            ` 
          <p>
            Now, I get to buy whatever I want, travel the world, and be my own
            boss…
          </p>
          <p>All without ever working a 9-5 again.</p>
          <p>
            And that's exactly what I help people like you to achieve every
            single day.
          </p>
          <p>The truth is that YouTube gave me the key to financial freedom.</p>`,
          ]}
        />

        <SalesTextHeading
          header="It's is the world's biggest video platform…"
          data={[
            ` 
          <p>
            And more people open YouTube daily than Facebook, Instagram, or
            TikTok…
          </p>
          `,
          ]}
        />

        <div className="flex mb-16">
          <Image src={SalesYt} alt="" />
        </div>

        <SalesTextHeading
          data={[
            `
          <p>
            But here's the thing: even though it may seem like there are a lot
            of YouTube channels already…
          </p>
          <p>YouTube actually has a desperate need for new channels.</p>
          <p>
            <mark>
              That's why YouTube is promoting and boosting new channels now more
              than ever before!
            </mark>
          </p>
          <p>
            And they're willing to pay top dollar for high-quality channels and
            content.
          </p>`,
          ]}
        />

        <SalesTextHeading
          header="And that's where you come in."
          data={[
            `
          <p>
            See, contrary to popular belief, you don't need hundreds of millions
            of views like Mr. Beast or Jake Paul…
          </p>
          <p>
            Or to show your face, use your voice, or even create the videos
            yourself…
          </p>
          <p>But of course, you can if you want to; it's up to you.</p>
          <p>
            But <i>if</i> your goal is to chill and just have enough money to do
            whatever you want…
          </p>
          <p>
            Then the
            <mark>
              only thing you need is the right channel idea that people will
              watch over and over again.
            </mark>
          </p>
          <p>
            Once you have the right channel idea and the right system,
            everything else falls into place.
          </p>
          <p>
            Everything becomes easy. Even things like creating a video you can
            get paid for...
          </p>
          <p>Or figuring out what to say in that video.</p>
          <p>All of that will fall into place if you nail the channel idea.</p>
          <p>Think of the channel idea as your “direction”.</p>
          <p>Now, finding the right channel idea sounds simple enough…</p>`,
          ]}
        />

        <SalesTextHeading
          header="But this is actually where all beginners mess up…"
          data={[
            ` 
          <p>
            See, if finding the right channel idea was intuitive, then everyone
            would have a profitable channel…
          </p>
          <p>But they don't.</p>
          <p>Thankfully, after launching 3 successful channels from scratch…</p>
          <p>
            Spending over half a million dollars testing to see what actually
            works…
          </p>
          <p>Being known for “breaking the YouTube algorithm</p>
          `,
          ]}
        />

        <div className="flex mb-5 -mt-12">
          <Image src={SalesAlgo} alt="" />
        </div>

        <SalesTextHeading
          data={[
            ` 
          <p>
            …And going behind the scenes of the biggest channels in the world…
          </p>
          `,
          ]}
        />

        <div className="flex -mt-12 mb-5">
          <Image src={SalesMrB} alt="" />
        </div>

        <SalesTextHeading
          data={[
            ` 
          <p>
            <mark>
              I discovered the formula for choosing the right channel idea.
            </mark>
          </p>
          <p>
            <mark>It's easy, repeatable, and works every single time.</mark>
          </p>
          <p>Unfortunately, it's not something I can explain in 5 minutes…</p>
          `,
          ]}
        />

        <SalesTextHeading
          header="And the devil is in the details…"
          data={[
            ` 
          <p>So that's why I created the Faceless Income Fast-Start…</p>
          <p>
            It will show you how to use the exact same same system as I do to
            run all my profitable faceless channels…
          </p>
          <p>That generate a stable income for me each and every month.</p>
          <p>All without making the videos myself,</p>
          <p>Without showing my face,</p>
          <p>Or even being on camera.</p>
          <p>
            Using this exact system, I was able to make $429,000 last year from
            <i>just</i> YouTube ads.
          </p>
          <p>
            And this is not even including my other income streams from these
            videos, like sponsors, which would bring that figure to
            <mark>well over $1m.</mark>
          </p>`,
          ]}
        />

        <div className="flex -mt-6 mb-3">
          <Image src={SalesRv} alt="" />
        </div>

        <SalesTextHeading
          data={[
            ` 
          <p>
            <mark>
              This system allows me to get paid while I sleep, travel, and truly
              enjoy life…
            </mark>
          </p>
          <p>
            <mark>
              Without ever having to wake up to a job I hate just to “afford
              life.”
            </mark>
          </p>
          <p>It's the same system that could give you the life you want…</p>
          <p>
            And the same system you could be using in just a few minutes because
            I'm giving you <strong>everything</strong>.
          </p>`,
          ]}
        />

        <div className="-mt-5 mb-5">
          <SalesButton />
        </div>

        <SalesTextHeading
          header="I took everything from my 5 years of experience on YouTube and
            turned it into a 5 Day Fast-Start…"
          data={[
            ` 
          <p>
            It's a 5-day step-by-step guide that walks you through each step and
            gets you going.
          </p>
          <p>
            But most importantly, it will get you going in the right direction.
          </p>
          <p>
            Once you're inside, you'll discover the secret to how to find your
            channel idea…
          </p>
          <p>How to outsource the video creation process…</p>
          <p>How to “hack” the algorithm for views…</p>
          <p>How to scale your income…</p>
          <p>And much more.</p>
          <p>I didn't hold anything back.</p>
          <p>
            I literally turned 5 years of my experience into 5 days for you…
          </p>
          <p>So you can stop dreaming and start living.</p>`,
          ]}
        />

        {/*   Jakes video  */}
        <SyllabusNSpeaks />

        <SalesTextHeading
          headerHtml={[
            `Here's why I'm giving everything away for <mark>only $3</mark>`,
          ]}
          data={[
            ` 
          <p>
            The reason you're getting this bargain is because I'm not doing it for the money…
          </p>
          <p>
            As you saw, YouTube pays my bills more than generously.
          </p>
          <p>So that's not changing.</p>
          <p>
            The real reason is my mission.
          </p>
          <p><strong>My mission is to help over 500 people create successful faceless channels this year and achieve their goals…</strong></p>
          <p>Whether it's replacing their jobs, retiring their parents, or just traveling around the world.</p>
          <p>You'll find yourself living the dream, not just chasing it…</p>
          <p>
            Once you use everything you'll get in these 5 days...
          </p>
          <p>Being able to buy whatever you want without looking at the price tag…</p>
          <p>Providing for your family without ever feeling the pinch, and not just scraping by but truly living on your terms.</p>
          <p>
            Or even traveling, walking on the beach, feeling the warm sand underneath your feet as you sip pinacoladas with your friends.
          </p>`,
          ]}
        />

        <div className="-mt-5 mb-5">
          <SalesButton />
        </div>

        {/* Here's everything you will get: */}
        <EverythingYouNeed />

        <div className="award-leaves md:w-2/3 w-full lg:px-20 px-14 -mt-16 mb-16">
          <img
            width={55}
            height={60}
            src={LeftWing}
            className="left-leaf"
            alt=""
            loading="lazy"
            sizes="(max-width: 297px) 100vw, 297px"
          />{" "}
          <h2 className="text-center text-3xl font-semibold">
            Try the Faceless Income Fast-Start with The 365-Day Money-Back
            Guarantee!
          </h2>
          <img
            width={55}
            height={60}
            src={RightWing}
            className="right-leaf"
            alt=""
            loading="lazy"
            sizes="(max-width: 297px) 100vw, 297px"
          />{" "}
        </div>

        <SalesTextHeading
          // header="Try the Faceless Income Fast-Start with The 365-Day Money-Back Guarantee!"
          data={[
            ` 
          <p>
            Here's the deal:
          </p>
          <p>
            Im so confident that you'll see the value in the Faceless Income Fast-Start that I'm giving you my <strong>365-day, no-questions-asked guarantee.</strong>
          </p>
          <p>Yeah, you read that right - If you feel like you haven't gotten your money's worth, just shoot me an email any day of the year... Heck, even if it's day 364.</p>
          <p>
            You'll get a full refund, no questions asked.
          </p>
          <p><You could literally watch everything, implement it, make money, keep the money, and still get your money back if you're not satisfied.</p>
          `,
          ]}
        />

        <div className="-mt-5 mb-5">
          <SalesButton />
        </div>
        <SalesFAQ />
      </div>

      <Footer />
    </>
  );
};

export default SalesPage;
