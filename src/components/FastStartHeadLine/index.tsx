import { Heading, StyleProps } from "@chakra-ui/react";

type FastStartHeadLineProps = {
  text: string;
} & StyleProps;

const FastStartHeadLine = ({ text, ...styleProps }: FastStartHeadLineProps) => {
  return (
    <Heading
      mt="40px"
      mb="20px"
      fontSize="26px"
      fontWeight="900"
      {...styleProps}
    >
      {text}
    </Heading>
  );
};

export default FastStartHeadLine;
