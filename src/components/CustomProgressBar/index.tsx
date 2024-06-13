import { Box, StyleProps } from "@chakra-ui/react";
import React from "react";

type CustomProgressBarProps = {
  value: number;
  max: number;
  backgroundColor?: CSSStyleDeclaration["backgroundColor"];
  /**
   * Color of the progressed part in the progress bar
   */
  filledTrackColor?: CSSStyleDeclaration["color"];
} & StyleProps;

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({
  value,
  max,
  borderRadius,
  backgroundColor,
  filledTrackColor = "primary",
  ...styleProps
}) => {
  return (
    <Box
      width="100%"
      overflow="hidden"
      background={{
        base: backgroundColor ? backgroundColor : "",
        lg: backgroundColor ? backgroundColor : "",
      }}
      borderRadius={borderRadius}
      height="100%"
    >
      <Box
        {...styleProps}
        width={`${(value / max) * 100}%`}
        transition="width 0.5s linear"
        background={filledTrackColor}
        overflow="hidden"
        borderRadius="0px 25px 25px 0px"
      />
    </Box>
  );
};

export default CustomProgressBar;
