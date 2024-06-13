import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import LockIcon from "../LockIcon";
import PlayIcon from "../PlayIcon";
import { VideoType } from "../../pages/fast-start";

type FastStartVideosProps = {
  videos: VideoType[];
  activeVideoIndex: number;
  setActiveVideoIndex: React.Dispatch<React.SetStateAction<number>>;
};

const FastStartVideos = ({
  videos,
  activeVideoIndex,
  setActiveVideoIndex,
}: FastStartVideosProps) => {
  const unblockedVideo = 3;

  const getBorder = (
    index: number,
    isLastVideo: boolean,
    activeVideo: number,
  ) => {
    if (index === activeVideo) {
      return "2px solid #d92d20";
    }

    if (isLastVideo) {
      return "1px solid #f7c325";
    }

    return "1px solid #eaecf0";
  };

  const getOverlayBackground = (availableVideo: boolean, lastVideo: number) => {
    if (availableVideo) {
      return "rgba(0, 0, 0, 0.2)";
    } else if (lastVideo) {
      return "rgba(1, 1, 1, 0.5)";
    }

    return "rgba(0, 0, 0, 0.51)";
  };

  return (
    <Grid
      background="#fff"
      borderRadius="18px"
      border="1px solid #eaecf0"
      gridTemplateColumns="repeat(6, 1fr)"
      p="20px"
      mb="30px"
    >
      {videos.map((video, index) => {
        const availableVideo = index < unblockedVideo;
        const lastVideo = videos.length - 1;
        const isLastVideo = index === lastVideo;

        return (
          <Flex
            flexDirection="column"
            textAlign="center"
            width="164px"
            key={video.title}
          >
            <Box
              key={video.title}
              height="100px"
              borderRadius="12px"
              border={getBorder(index, isLastVideo, activeVideoIndex)}
              overflow="hidden"
              position="relative"
              mb="12px"
              cursor="pointer"
              onClick={() => setActiveVideoIndex(index)}
            >
              <Image
                width="160px"
                height="100px"
                src={video.imageUrl}
                alt={video.title}
                objectFit={"cover"}
              />

              <Box
                width="100%"
                height="100%"
                top="0"
                left="0"
                position="absolute"
                background={getOverlayBackground(availableVideo, lastVideo)}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {availableVideo ? <PlayIcon /> : <LockIcon />}

                <Flex
                  position="absolute"
                  left="0"
                  bottom="0"
                  height="25px"
                  minWidth="64px"
                  background={isLastVideo ? "#18CE356B" : "#0000006B"}
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="0 11px 0 11px"
                >
                  <Text
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="17.31px"
                    color="#fff"
                  >
                    {isLastVideo ? "Bonus" : `Day ${index + 1}`}
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Text fontSize="16px" fontWeight="500" lineHeight="19.78px">
              {video.title}
            </Text>
          </Flex>
        );
      })}
    </Grid>
  );
};

export default FastStartVideos;
