import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import FastStartVideos from "../components/FastStartVideos";
import FastStartMainVideo from "../components/FastStartMainVideo";
import FastStartProducts from "../components/FastStartProducts";
import SuccessStory from "../components/SuccessStory";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import gettingStarted from "../assets/images/getting-started.png";
import winning from "../assets/images/winning.png";

import Footer from "../components/shared/Footer";
import AvatarIcon from "../components/AvatarIcon";
import { useState } from "react";
import LogoutIcon from "../components/LogoutIcon";
import { useNavigate } from "react-router-dom";

export type FastStartProductType = {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLockedText?: string;
  buttonOnClick: () => void;
  badge: string;
};

export type VideoType = {
  imageUrl: string;
  title: string;
  src: string;
};

const FastStartPage = () => {
  const navigate = useNavigate();

  const [isHoveredAvatar, setIsHoveredAvatar] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const purchaseProducts: FastStartProductType[] = [
    {
      imageUrl: product1,
      title: "Endless Video Idea System",
      description:
        "Jake’s endless video idea system is the ultimate shortcut to finding new, unique and proven video ideas for any faceless channel",
      buttonText: "Find proven video ideas in minutes",
      buttonLockedText: "Unlock Endless Video Ideas System",
      buttonOnClick: () => {
        console.log("Find proven video ideas in minutes");
      },
      badge: "Locked",
    },
    {
      imageUrl: product2,
      title: "7-Figure Launchpad",
      description:
        "Skip the learning and get straight to earning: With the 7-Figure Launchpad, you get access to proven tools, scripts, templates, systems, and more, all refined over my 5 years on YouTube. It allows you to create viral videos on command, attract sponsors & mulitply your income. Over 91% of our students got their 7-Figure Launchpad because to skip months of trial end error.",
      buttonText: "Use the 7-Figure Launchpad",
      buttonLockedText: "Unlock 7-Figure Launchpad",
      buttonOnClick: () => {
        navigate("/blueprint");
      },
      badge: "Purchased",
    },
  ];

  const freeBonuses: FastStartProductType[] = [
    {
      imageUrl: product1,
      title: "100+ Channel Ideas",
      description:
        "Jake’s personal list of the untapped channel ideas that he’s eyeballing right now. If Jake was to start over today, these would be the profitable channel ideas he would start because NO ONE is doing them.",
      buttonText: "Download 100+  CHANNEL IDEAS",
      buttonOnClick: () => {},
      badge: "Free Bonus",
    },
    {
      imageUrl: product1,
      title: "CHANNEL PROFIT CALCULATOR",
      description:
        "This plug-and play channel profit calculator helps you predict how your channel will perform based on data from Jake’s channels.",
      buttonText: "Use Calculator",
      buttonOnClick: () => {},

      badge: "Free Bonus",
    },
    {
      imageUrl: product1,
      title: "CHANNEL LAUNCH CHECKLIST",
      description:
        "Make sure you don’t miss any crucial elements from this 10+ step checklist (applies to every channel, regardless of niche), and don’t leave any money on the table.",
      buttonText: "Download Checklist",
      buttonOnClick: () => {},

      badge: "Free Bonus",
    },
    {
      imageUrl: product1,
      title: "YOUTUBE FLAG WORDS",
      description:
        "Few people are aware of them, but they do exist; avoid these niches and mentioning any of these words, as they could lead to YouTube stop sending you payouts.",
      buttonText: "Download Checklist",
      buttonOnClick: () => {},
      badge: "Free Bonus",
    },
  ];

  const videos: VideoType[] = [
    {
      imageUrl: gettingStarted,
      title: "How I Make Over $1,000,000 Per Year With YouTube",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      imageUrl: winning,
      title: "The Key Component Of Your Million-Dollar YouTube Channel",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      imageUrl: winning,
      title: "Your Profit Factory",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      imageUrl: winning,
      title: "Getting Your First Paycheck: $0 to $10,000",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      imageUrl: winning,
      title: "From $10,000 to $100,000",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      imageUrl: winning,
      title: "Scaling Beyond 6-Figures",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
  ];

  return (
    <>
      <Flex
        as="nav"
        borderBottom="1px solid #EAECF0"
        height="60px"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          color="#740505"
          fontSize="16px"
          fontWeight="700"
          lineHeight="17.31px"
          fontFamily="Switzer"
        >
          Viral Profits
        </Heading>
        <Box
          border="1px solid #d9d9d9"
          mx="18px"
          display="inline-block"
          height="29px"
          mb="-5px"
        />
        <Box
          p="6px 10px"
          background="#FEF3F2"
          color="#D92D20"
          fontSize="14px"
          fontWeight="500"
          lineHeight="17.31px"
          height="29px"
          borderRadius="9px"
        >
          Five day fast start
        </Box>

        <Flex
          position="absolute"
          right="20px"
          height="60px"
          alignItems="center"
          onMouseOver={() => setIsHoveredAvatar(true)}
          onMouseOut={() => setIsHoveredAvatar(false)}
        >
          <Flex
            position="relative"
            height="40px"
            alignItems="center"
            p="8px 12px"
            borderRadius="12px"
            cursor="pointer"
            background={isHoveredAvatar ? "#f2f4f7" : "transparent"}
          >
            <AvatarIcon />
            <Box
              ml="8px"
              fontSize="16px"
              fontWeight="450"
              lineHeight="20.24px"
              color="#9b9b9b"
            >
              Welcome,{" "}
              <Box as="span" color="#000" fontWeight="500">
                Daniel
              </Box>
            </Box>

            {isHoveredAvatar && (
              <Flex
                position="absolute"
                top="calc(100% + 6px)"
                right="0"
                alignItems="center"
                p="8px 29px 8px 12px"
                background="#fff"
                border="1px solid #eaecf0"
                borderRadius="7px"
              >
                <LogoutIcon />{" "}
                <Text
                  ml="5px"
                  fontSize="14px"
                  lineHeight="17.31px"
                  fontWeight="500"
                >
                  Logout
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Box backgroundColor="#F9FAFB">
        <Box width="1110px" margin="0 auto" pt="30px">
          <FastStartVideos
            videos={videos}
            activeVideoIndex={activeVideoIndex}
            setActiveVideoIndex={setActiveVideoIndex}
          />

          <FastStartMainVideo selectedVideo={videos[activeVideoIndex]} />

          <FastStartProducts
            headline="Your purchased products"
            products={purchaseProducts}
          />

          <FastStartProducts
            headline="Your free bonuses"
            products={freeBonuses}
          />

          <SuccessStory />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default FastStartPage;
