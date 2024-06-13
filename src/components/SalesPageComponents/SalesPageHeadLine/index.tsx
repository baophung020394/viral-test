import { Heading, StyleProps } from "@chakra-ui/react";
import { HTMLAttributes } from "react";

type SalesPageHeadLineProps = {
  text: string;
} & StyleProps &
  HTMLAttributes<HTMLHeadingElement>;

const SalesPageHeadLine = ({ text, ...styleProps }: SalesPageHeadLineProps) => {
  return (
    <Heading
    className="mx-3"
      mt="40px"
      mb="20px"
      fontSize="38px"
      fontWeight="900"
      lineHeight="55.66px"
      {...styleProps}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default SalesPageHeadLine;
