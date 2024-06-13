import { Box, Grid } from "@chakra-ui/react";
import CTAButton from "../CTAButton";
import FastStartHeadLine from "../FastStartHeadLine";
import VideoPlayer from "../VideoPlayer";
import VideoPlaceholder from "../VideoPlayer/placeholder";
import { useEffect, useState } from "react";

const SuccessStory = () => {
  const [width, setWidth] = useState<string>("100%");
  useEffect(() => {});

  const handleRef = (e: HTMLDivElement) => {
    if (e?.offsetWidth) {
      setWidth(`${e.offsetWidth}px`);
    }
  };

  const successStoryVideos = {
    primary: "https://files.vidstack.io/sprite-fight/720p.mp4",
    secondary: [
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
      "https://files.vidstack.io/sprite-fight/720p.mp4",
    ],
  };

  return (
    <Box pb="100px">
      <FastStartHeadLine
        text="Are you our next success story?"
        textAlign="center"
      />

      <Box height="500px" mb="20px">
        <VideoPlayer
          url={successStoryVideos.primary}
          placeholder={(onClick) => <VideoPlaceholder onClick={onClick} />}
        />
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap="22px" mb="20px">
        {successStoryVideos.secondary.map((url, index) => (
          <Box
            key={index}
            height="243px"
            width={width}
            border="1px solid #EAECF0"
            borderRadius="18px"
            ref={handleRef}
          >
            <VideoPlayer
              url={url}
              placeholder={(onClick) => <VideoPlaceholder onClick={onClick} />}
            />
          </Box>
        ))}
      </Grid>

      <CTAButton />
    </Box>
  );
};

export default SuccessStory;
