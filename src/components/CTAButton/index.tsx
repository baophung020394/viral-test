import { Button, Text } from "@chakra-ui/react";
import NextIcon from "../NextIcon";

type CTAButtonProps = {
  onClick?: () => void;
};

const CTAButton = ({ onClick }: CTAButtonProps) => {
  return (
    <Button
      background="#F7C325"
      _hover={{ background: "#d9a917" }}
      borderRadius="16px"
      py="16px"
      textAlign="center"
      width="100%"
      height="60px"
      onClick={onClick}
    >
      <Text fontSize="22px" fontWeight="700" lineHeight="27.83px" mr="8px">
        See if you qualify for 1:1 help from Jake
      </Text>{" "}
      <NextIcon variant="black" />
    </Button>
  );
};

export default CTAButton;
