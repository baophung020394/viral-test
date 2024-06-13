import { Box } from "@chakra-ui/react";
import CTAButton from "../CTAButton";
import FastStartHeadLine from "../FastStartHeadLine";
import FastStartPopUp from "../FastStartPopUp";
import { useState } from "react";
import { VideoType } from "../../pages/fast-start";

type FastStartVideoProps = {
  selectedVideo: VideoType;
};

const FastStartMainVideo = ({ selectedVideo }: FastStartVideoProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box>
      <FastStartHeadLine text={selectedVideo.title} />

      {/* TODO: Hardcode video iframe here as Daniel asked */}
      <div
        style={{
          position: "relative",
          paddingTop: "56.25%",
        }}
      >
        <iframe
          src="https://iframe.mediadelivery.net/embed/185727/d13df80f-54e9-4cd9-af93-23f34f3946ad?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
          loading="lazy"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>

      {/* <VideoPlayer
        url={selectedVideo.src}
        placeholder={(onClick) => (
          <VideoPlaceholder
            onClick={onClick}
            imageUrl={selectedVideo.imageUrl}
            backgroundColor="rgba(0,0,0,0.3)"
          />
        )}
      /> */}

      <CTAButton onClick={() => setIsOpen(true)} />

      <FastStartPopUp isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};

export default FastStartMainVideo;
