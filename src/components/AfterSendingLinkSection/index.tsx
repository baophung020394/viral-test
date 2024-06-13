import "@vetixy/circular-std";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ArrowBackIcon from "../ArrowBackIcon";
import ViralProfitsLogo from "../ViralProfitsLogo";
import { Link } from "react-router-dom";

type AfterSendingLinkProps = {
  userEmail: string;
};

const AfterSendingLinkSection = ({ userEmail }: AfterSendingLinkProps) => {
  const [isReceivedMail, setIsReceivedMail] = useState(false);
  const supportEmail = "hello@viralprofits.yt";

  return (
    <>
      <Flex
        as="form"
        p={{ base: "0", md: "0" }}
        w={{ base: "100%", md: "508px" }}
        margin="0 auto"
        bg="#fff"
        border="1px solid #EAECF0"
        borderRadius="15px"
        flexDirection="column"
      >
        <Heading
          p={{ base: "20px 16.5px 0", md: "40px 36px 0" }}
          mb="28px"
          display="flex"
          justifyContent="center"
        >
          <ViralProfitsLogo />
        </Heading>

        <Text
          fontWeight="700"
          fontSize="24px"
          lineHeight="25.3px"
          textAlign="center"
        >
          Access Incoming 📧
        </Text>

        <Text
          fontSize="16px"
          mt="20px"
          mb="40px"
          mx="40px"
          fontWeight="450"
          lineHeight="20.24px"
          textAlign="center"
        >
          We’ve sent an email to
          <Box color="primary" as="span">
            {" "}
            {userEmail}{" "}
          </Box>
          with a temporary access link.
        </Text>

        <Box
          borderTop="1px solid #eaecf0"
          cursor="pointer"
          onClick={() => {
            setIsReceivedMail(!isReceivedMail);
          }}
          color={isReceivedMail ? "#D92D20" : "#000000"}
          background={isReceivedMail ? "#FEF3F2" : "#FFFFFF"}
          borderRadius="0px 0px 14px 14px"
        >
          <Text
            fontWeight="450"
            fontSize="14px"
            my="16px"
            lineHeight="17.1px"
            textAlign="center"
          >
            I haven’t received an email. What should I do?
          </Text>
        </Box>
      </Flex>

      {isReceivedMail && (
        <Flex
          mt="21px"
          borderTop="1px solid #eaecf0"
          cursor="pointer"
          p={{ base: "0", md: "0" }}
          w={{ base: "100%", md: "508px" }}
          bg="#fff"
          border="1px solid #EAECF0"
          borderRadius="15px"
          flexDirection="column"
          background="#FFFFFF"
          position="absolute"
        >
          <Box display="flex" my="13px" alignItems="center">
            <Box
              background="#F5F5F5"
              w="26px"
              h="26px"
              mx="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="9px"
            >
              <ArrowBackIcon color="black" size={14} />
            </Box>

            <Text fontWeight="450" fontSize="14px" lineHeight="17.1px">
              Check your spam folder
            </Text>
          </Box>

          <Box display="flex" mb="13px" alignItems="center">
            <Box
              background="#F5F5F5"
              w="26px"
              h="26px"
              mx="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="9px"
            >
              <ArrowBackIcon color="black" size={14} />
            </Box>

            <Text fontWeight="450" fontSize="14px" lineHeight="17.1px">
              <Link to={`mailto:${supportEmail}`}>
                Time to call in backup. Email us at {supportEmail}
              </Link>
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default AfterSendingLinkSection;
