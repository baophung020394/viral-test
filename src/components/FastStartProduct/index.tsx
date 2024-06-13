import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FastStartProductType } from "../../pages/fast-start";
import LockIcon from "../LockIcon";
import NextIcon from "../NextIcon";

type FastStartProductProps = {
  product: FastStartProductType;
  borderBottom: string;
  badgeColor: string;
};

const FastStartProduct = ({
  product,
  borderBottom,
  badgeColor,
}: FastStartProductProps) => {
  const isLocked = product.badge === "Locked";

  return (
    <Flex key={product.title} gap="30px" py="25px" borderBottom={borderBottom}>
      <Image
        src={product.imageUrl}
        width="132px"
        height="128px"
        alt={product.title}
      />

      <Box>
        <Heading mb="8px" fontWeight="700" fontSize="20px" lineHeight="25.3px">
          {product.title}
        </Heading>
        <Text fontSize="20px" lineHeight="25.3px" mb="20px">
          {product.description}
        </Text>

        {isLocked ? (
          <Button
            width="min-content"
            height="49px"
            py="12px"
            px="24px"
            background="primary"
            _hover={{
              background: "primary-dark",
            }}
            color="#fff"
            borderRadius="14px"
            fontSize="20px"
            onClick={product.buttonOnClick}
            display="flex"
            alignItems="center"
          >
            <LockIcon /> <Text mx="10px">{product.buttonLockedText}</Text>{" "}
            <NextIcon />
          </Button>
        ) : (
          <Button
            width="min-content"
            height="49px"
            py="12px"
            px="24px"
            background="#f2f4f7"
            borderRadius="14px"
            fontSize="20px"
            onClick={product.buttonOnClick}
          >
            {product.buttonText}
          </Button>
        )}
      </Box>

      <Flex
        flex="0 0 131px"
        justifyContent="flex-end"
        alignItems="center"
        height="35px"
        pr={product.badge === "Locked" ? "25px" : "14px"}
        fontSize="18px"
        fontWeight="800"
        lineHeight="22.77px"
        background={badgeColor}
        color="#fff"
        clipPath="polygon(0 0, 100% 0, 100% 100%, 0 97%, 11% 53%);"
      >
        {product.badge}
      </Flex>
    </Flex>
  );
};

export default FastStartProduct;
