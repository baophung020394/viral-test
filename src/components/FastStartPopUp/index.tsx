import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import CheckIcon from "../CheckIcon";
import facebook from "../../assets/images/facebook.png";
import FacebookIcon from "../FacebookIcon";
import CloseIcon from "../CloseIcon";

type FastStartPopUpProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FastStartPopUp = ({ isOpen, onClose }: FastStartPopUpProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p="30px" borderRadius="20px" maxWidth="614px">
        <ModalBody p="0" position="relative">
          <Heading
            fontSize="26px"
            lineHeight="32.89px"
            fontWeight="900"
            mb="45px"
            textAlign="center"
          >
            JOIN OUR FACEBOOK GROUP
          </Heading>

          <Box
            onClick={onClose}
            position="absolute"
            right="0"
            top="5px"
            cursor="pointer"
          >
            <CloseIcon />
          </Box>

          <Flex alignItems="center">
            <Stack mr="auto" gap="19px" whiteSpace="nowrap" fontSize="18px">
              <Box>
                <Flex alignItems="center">
                  <CheckIcon />
                  <Text ml="9px">Instant approval</Text>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center">
                  <CheckIcon />
                  <Text ml="9px">7 & 8-figure business owners</Text>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center">
                  <CheckIcon />
                  <Text ml="9px">Regular content</Text>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center">
                  <CheckIcon />
                  <Text ml="9px">Interviews with experts</Text>
                </Flex>
              </Box>
              <Box>
                <Flex>
                  <CheckIcon />
                  <Text ml="9px">Like minded people on the same journey</Text>
                </Flex>
              </Box>
            </Stack>

            <Box>
              <Box
                height="155px"
                width="155px"
                borderRadius="14px"
                overflow="hidden"
                position="relative"
              >
                <Image src={facebook} alt="facebook-group" />
                <Box position="absolute" bottom="2px" right="2px">
                  <FacebookIcon />
                </Box>
              </Box>
              <Text
                fontSize="20px"
                fontWeight="700"
                lineHeight="25.3px"
                mt="14px"
              >
                8,423+ Members
              </Text>
            </Box>
          </Flex>

          <Button
            background="primary"
            fontSize="16px"
            fontWeight="700"
            lineHeight="20.24px"
            width="100%"
            color="#fff"
            mt="34px"
            borderRadius="8px"
          >
            JOIN NOW
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FastStartPopUp;
