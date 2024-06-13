import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailDomainSuggestion from "../components/EmailDomainSuggestion";
import { useEffect, useState } from "react";
import loginBg from "../assets/images/login-bg.png";
import Footer from "../components/shared/Footer";
import AlertCircleIcon from "../components/AlertCircleIcon";
import AfterSendingLinkSection from "../components/AfterSendingLinkSection";
import ViralProfitsLogo from "../components/ViralProfitsLogo";
type EmailInputs = {
  email: string;
};

const LoginPage = () => {
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<EmailInputs>();

  const email = watch("email");

  useEffect(() => {
    if (email && !email.includes("@")) {
      setShowEmailSuggestions(true);
    } else {
      setShowEmailSuggestions(false);
    }
  }, [email]);

  const onSubmit: SubmitHandler<EmailInputs> = (data) => {
    console.log(data);
    if (email !== "invalid@gmail.com") {
      setIsSendEmail(true);
    } else {
      setIsInvalid(true);
    }
  };

  const onEmailSuggestionClick = (email: string) => {
    setValue("email", email);
    setShowEmailSuggestions(false);
  };

  return (
    <>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Box
          width={{
            base: "90%",
            md: "max-content",
          }}
          margin="0 auto"
        >
          {isSendEmail ? (
            <AfterSendingLinkSection userEmail={email} />
          ) : (
            <Flex
              as="form"
              p={{ base: "20px", md: "40px 36px" }}
              w={{ base: "100%", md: "508px" }}
              margin="0 auto"
              bg="#fff"
              border="1px solid #EAECF0"
              borderRadius="15px"
              flexDirection="column"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Heading mb="28px" display="flex" justifyContent="center">
                <ViralProfitsLogo />
              </Heading>
              <Heading
                fontSize={{ base: "16px", md: "22px" }}
                fontWeight="400"
                lineHeight={{
                  base: "19.47px",
                  md: "26.77px",
                }}
                p="0 16.5px"
                mb="20px"
                color="#302E2E"
                textAlign="center"
              >
                <Text
                  fontSize={{
                    base: "18px",
                    md: "20px",
                  }}
                  fontWeight="700"
                  lineHeight="17.04px"
                  textAlign="center"
                  color="#000000"
                >
                  Enter your purchase email to log in
                </Text>
              </Heading>

              <Stack
                spacing="15px"
                mb={{ base: "26px", md: "28px" }}
                position="relative"
              >
                <Box>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    borderRadius="12px"
                    height={{ base: "38px", md: "42px" }}
                    fontSize="14px"
                    border="1px solid #EAECF0"
                    color="#424242"
                    _placeholder={{ color: "#888888", fontWeight: "400" }}
                    _focus={{ borderColor: "primary" }}
                    _focusVisible={{ boxShadow: "0 0 0 2px #FECDCA" }}
                    {...register("email", { required: "Email is required" })}
                    borderColor={isInvalid ? "primary" : ""}
                  />

                  {isInvalid && (
                    <Flex
                      position="absolute"
                      top="50%"
                      right="12px"
                      transform="translateY(-50%)"
                      align="center"
                    >
                      <AlertCircleIcon />
                    </Flex>
                  )}

                  {errors.email && (
                    <Text color="red.500" fontSize="14px" mt="3px">
                      {errors.email.message}
                    </Text>
                  )}
                </Box>

                {showEmailSuggestions && (
                  <EmailDomainSuggestion
                    email={email}
                    onEmailSuggestionClick={onEmailSuggestionClick}
                  />
                )}
              </Stack>

              {email && !isInvalid ? (
                <Button
                  background="primary"
                  p="8px 16px"
                  h="56px"
                  textAlign="center"
                  borderRadius="12px"
                  _hover={{ background: "#a21a10" }}
                  _active={{ background: "#a21a10" }}
                  type="submit"
                >
                  <Text
                    fontWeight="700"
                    fontSize="16px"
                    lineHeight="18px"
                    color="#fff"
                    mr="10px"
                  >
                    Login
                  </Text>
                </Button>
              ) : (
                <Button
                  background="#EAECF0"
                  p="8px 16px"
                  h="56px"
                  textAlign="center"
                  borderRadius="12px"
                  color="#98A2B3"
                  _hover={{ background: "#a21a10", color: "#fff" }}
                  _active={{ background: "#a21a10" }}
                  type="submit"
                >
                  <Text
                    fontWeight="700"
                    fontSize="16px"
                    lineHeight="18px"
                    mr="10px"
                  >
                    Login
                  </Text>
                </Button>
              )}
            </Flex>
          )}

          {isInvalid && !isSendEmail && (
            <Flex
              mt="20px"
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
                  background="#FFE9E8"
                  w="26px"
                  h="26px"
                  mx="16px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="9px"
                >
                  <AlertCircleIcon />
                </Box>

                <Text fontWeight="450" fontSize="14px" lineHeight="17.1px">
                  Purchase Email Address Invalid
                </Text>
              </Box>
            </Flex>
          )}
        </Box>
        <Image
          src={loginBg}
          alt="Opt In"
          position="absolute"
          bottom="0"
          left="0"
          zIndex="-1"
          w="100%"
          h="100%"
        />
      </Flex>
      <Footer />
    </>
  );
};

export default LoginPage;
