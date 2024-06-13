import { Box } from "@chakra-ui/react";
import PlayIcon from "../PlayIcon";
import checker from "../../assets/images/checker.png";
import styles from "./player.module.css";

type VideoPlaceHolderProps = {
  imageUrl?: string;
  onClick: () => void;
  backgroundColor?: CSSStyleDeclaration["backgroundColor"];
};

const VideoPlaceholder = ({
  imageUrl,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  onClick,
}: VideoPlaceHolderProps) => {
  return (
    <Box
      position="relative"
      borderRadius="18px"
      overflow="hidden"
      mb="18px"
      onClick={onClick}
      width="100%"
      height="100%"
      className={`${styles.player} player`}

    >
      <div className="w-full h-full">
        <img
          src={imageUrl || checker}
          alt="Getting Started"
          className={`${styles.player} player`}
        />
      </div>

      <Box>
        <Box
          width="100%"
          height="100%"
          top="0"
          left="0"
          position="absolute"
          background={backgroundColor}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <PlayIcon size="big" />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlaceholder;
