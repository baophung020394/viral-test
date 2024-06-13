import "@vidstack/react/player/styles/base.css";

import { useRef, useState } from "react";

import styles from "./player.module.css";

import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from "@vidstack/react";

import { VideoLayout } from "./layouts/video-playout";
import { Box } from "@chakra-ui/react";

type PlayerProps = {
  url: string;
  placeholder: (onClick: () => void) => JSX.Element;
};

const VideoPlayer = ({ url, placeholder }: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const player = useRef<MediaPlayerInstance>(null);

  // useEffect(() => {
  //   // Subscribe to state updates.
  //   return player.current!.subscribe(({ paused, viewType }) => {
  //     // console.log('is paused?', '->', state.paused);
  //     // console.log('is audio view?', '->', state.viewType === 'audio');
  //   });
  // }, []);

  return (
    <Box >
      {isPlaying ? (
        <MediaPlayer
          className={`${styles.player} player`}
          title="Sprite Fight"
          src={url || "https://www.youtube.com/watch?v=20yeJrc890w"}
          crossOrigin
          playsInline
          ref={player}
          autoPlay={true}
          onAutoPlayFail={(error) => {
            console.log("autoplay failed", error);
          }}
          muted={true}
        >
          <MediaProvider />

          <VideoLayout />
        </MediaPlayer>
      ) : (
        placeholder?.(() => setIsPlaying(true))
      )}
    </Box>
  );
};

export default VideoPlayer;
