import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Collapse,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import LogoutIcon from "../components/LogoutIcon";
import AvatarIcon from "../components/AvatarIcon";
import ArrowLeftIcon from "../components/ArrowLeftIcon";
import VideoPlayer from "../components/VideoPlayer";
import VideoPlaceholder from "../components/VideoPlayer/placeholder";
import ThreeDotsIcon from "../components/ThreeDotsIcon";
import { useNavigate } from "react-router-dom";
import { ArrowDownToLine } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";

const DownloadCard = ({ num }: { num: number }) => {
  return (
    <div>
      <button className=" rounded-xl px-4 py-1 bg-[#EAECF5]">
        <div className="flex gap-x-1 font-semibold text-sm">
          <span className="mt-0.5">
            <ArrowDownToLine size={14} />{" "}
          </span>
          Download Material #{num}
        </div>
      </button>
    </div>
  );
};

const BluePrint = () => {
  const [isHoveredAvatar, setIsHoveredAvatar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const bluePrintCourseContent = [
    {
      title: "How to use the Virality Formulas",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      title: "The hot take",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      title: "Unknown interesting story",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      title: "Cool sounding title",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      title: "Something people are already familiar with",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      title: "Explaining something everyone is wonder",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
    {
      title: "You've been victimized",
      src: "https://files.vidstack.io/sprite-fight/720p.mp4",
    },
  ];

  const handleGoBackToPortal = () => {
    navigate("/portal");
  };

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      {/* Header */}
      <Flex
        as="nav"
        borderBottom="1px solid #EAECF0"
        height="60px"
        alignItems="center"
        justifyContent="space-between"
        p="0 30px"
      >
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={handleGoBackToPortal}
        >
          <ArrowLeftIcon />
          <Heading
            fontWeight="700"
            fontSize="16px"
            lineHeight="20.24px"
            color="#740505"
            ml="2px"
          >
            Back to 5-Day Fast Start
          </Heading>
        </Flex>

        <Flex
          height="60px"
          alignItems="center"
          onMouseOver={() => setIsHoveredAvatar(true)}
          onMouseOut={() => setIsHoveredAvatar(false)}
        >
          <Flex
            className="md:mr-0 -mr-6"
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
              className="md:block hidden"
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
      {/* Header */}
      <div className="flex md:flex-row flex-col h-screen bg-[#F9FAFB]">
        {/* Left Panel */}
        <div className="md:w-1/3 w-full">
          <div className="md:hidden block bg-white rounded-xl p-3 m-3 border-[1px]">
            <button onClick={handleToggle} className="w-full ">
              <div className="flex items-start justify-start w-full">
                <h2 className="w-full">
                  <Box
                    py="0"
                    pl="25px"
                    pr="20px"
                    _hover={{ background: "transparent" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize="18px"
                      fontWeight="900"
                      lineHeight="22.77px"
                      className="w-full"
                    >
                      <div className="flex flex-row gap-x-12 justify-between w-full">
                        <div>
                          <p className="flex text-xl">Virality Formulas</p>
                        </div>
                        <div className="">
                          <p className="text-lg font-semibold">
                            {show ? <ChevronUp /> : <ChevronDown />}
                          </p>
                        </div>
                      </div>
                    </Box>
                  </Box>
                </h2>
              </div>
            </button>
            <Collapse in={show} startingHeight={42}>
              <ul className="mt-3">
                <li className="text-base hover:text-black text-gray-500 font-semibold py-2 bg-transparent hover:bg-[#FFFAEB] px-10">
                  How to use the Virality Formulas
                </li>
                <li className="text-base hover:text-black text-gray-500 font-semibold py-2 bg-transparent hover:bg-[#FFFAEB] px-10">
                  The hot take
                </li>
                <li className="text-base hover:text-black text-gray-500 font-semibold py-2 bg-transparent hover:bg-[#FFFAEB] px-10">
                  Unknown interesting story
                </li>
                <li className="text-base hover:text-black text-gray-500 font-semibold py-2 bg-transparent hover:bg-[#FFFAEB] px-10">
                  Cool sounding title
                </li>
                <li className="text-base hover:text-black text-gray-500 font-semibold py-2 bg-transparent hover:bg-[#FFFAEB] px-10">
                  Something people are already familiar with
                </li>
                <li className="text-base hover:text-black text-gray-500 font-semibold py-2 bg-transparent hover:bg-[#FFFAEB] px-10">
                  Explaining something everyone is wonder
                </li>
                <li className="text-base hover:text-black text-gray-500 font-semibold py-2 bg-transparent hover:bg-[#FFFAEB] px-10">
                  You've been victimized
                </li>
              </ul>
            </Collapse>
          </div>
          <Box
            background="#fff"
            borderBottomRightRadius="20px"
            borderBottom="1px solid transparent"
            p="20px 5px"
            className="md:block hidden"
          >
            <Accordion allowToggle borderColor="#fff" p="0" defaultIndex={0}>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    py="0"
                    pl="25px"
                    pr="20px"
                    _hover={{ background: "transparent" }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize="18px"
                      fontWeight="900"
                      lineHeight="22.77px"
                    >
                      Virality Formulas
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel p="0" mt="20px">
                  {bluePrintCourseContent.map((content, index) => {
                    const isActive = activeIndex === index;

                    return (
                      <Flex
                        key={content.title}
                        as="button"
                        alignItems="center"
                        justifyContent="space-between"
                        width="100%"
                        background={isActive ? "#FFFAEB" : "transparent"}
                        border="none"
                        textAlign="left"
                        fontSize="16px"
                        lineHeight="20.24px"
                        fontWeight="500"
                        color="#000"
                        p="8px 15px 8px 25px"
                        borderRadius="9px"
                        cursor="pointer"
                        onClick={() => setActiveIndex(index)}
                      >
                        <Text>{content.title}</Text>
                        {isActive && <ThreeDotsIcon />}
                      </Flex>
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </div>
        {/* Left Panel */}
        {/* Video Screen */}
        <div className="md:w-2/3 w-full">
          <Box p="25px 30px" borderBottomLeftRadius="20px">
            <Heading
              fontWeight="900"
              fontSize="26px"
              lineHeight="32.89px"
              mb="20px"
            >
              The script template Jake's using for EVERY video
            </Heading>
            {/* Video section */}
            <Box>
              <VideoPlayer
                url={bluePrintCourseContent[activeIndex].src}
                placeholder={(onClick) => (
                  <VideoPlaceholder onClick={onClick} />
                )}
              />
            </Box>
            <div className="flex md:flex-row flex-col gap-2 md:justify-start justify-center md:items-start items-center">
              <DownloadCard num={1} />
              <DownloadCard num={2} />
              <DownloadCard num={3} />
            </div>
            {/* Video section */}
          </Box>
        </div>
        {/* Video Screen */}
      </div>
    </>
  );
};

export default BluePrint;
