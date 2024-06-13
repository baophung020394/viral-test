import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import NextIcon from "../NextIcon";

import { SubmitHandler, useForm } from "react-hook-form";
import EmailDomainSuggestion from "../EmailDomainSuggestion";
import { useEffect, useState } from "react";

const avatars = [
  {
    src: "/images/avatar-1.png",
    alt: "Avatar 1",
  },
  {
    src: "/images/avatar-2.png",
    alt: "Avatar 2",
  },
  {
    src: "/images/avatar-3.png",
    alt: "Avatar 3",
  },
  {
    src: "/images/avatar-4.png",
    alt: "Avatar 4",
  },
  {
    src: "/images/avatar-5.png",
    alt: "Avatar 5",
  },
  {
    src: "/images/avatar-6.png",
    alt: "Avatar 6",
  },
  {
    src: "/images/avatar-7.png",
    alt: "Avatar 7",
  },
];

type OptInInputs = {
  firstName: string;
  email: string;
};

const OptInSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<OptInInputs>();

  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);

  const email = watch("email");

  useEffect(() => {
    if (email && !email.includes("@")) {
      setShowEmailSuggestions(true);
    } else {
      setShowEmailSuggestions(false);
    }
  }, [email]);

  const onSubmit: SubmitHandler<OptInInputs> = (data) => {
    console.log(data);
  };

  const onEmailSuggestionClick = (email: string) => {
    setValue("email", email);
    setShowEmailSuggestions(false);
  };

  return (
    <>
      <Box
        width={{
          base: "90%",
          md: "max-content",
        }}
        margin="0 auto"
      >
        <Heading
          mb={{ base: "45px", md: "50px" }}
          lineHeight={{ base: "37.95px", md: "60.72px" }}
          fontWeight={900}
          textAlign="center"
          fontSize={{ base: "30px", md: "48px" }}
          letterSpacing="-1%"
          fontFamily="CircularStd"
        >
          Done! Where can we send you the results? 👇
        </Heading>
        <Flex
          as="form"
          p={{ base: "20px", md: "40px 36px" }}
          w={{ base: "100%", md: "577px" }}
          margin="0 auto"
          bg="#fff"
          border="1px solid #EAECF0"
          borderRadius="15px"
          flexDirection="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading
            fontSize={{ base: "16px", md: "22px" }}
            fontWeight="400"
            lineHeight={{
              base: "19.47px",
              md: "26.77px",
            }}
            p="0 16.5px"
            mb={{ base: "21px", md: "40px" }}
            color="#302E2E"
            textAlign="center"
          >
            <Box color="primary" as="span" fontWeight="700">
              Awesome!{" "}
            </Box>
            Please enter your email so to receive your results + short video
            explanation.
          </Heading>

          <Stack
            spacing="15px"
            mb={{ base: "25px", md: "28px" }}
            position="relative"
          >
            <Box>
              <Input
                placeholder="First Name"
                borderRadius="12px"
                height={{ base: "38px", md: "42px" }}
                fontSize="14px"
                border="1px solid #EAECF0"
                color="#424242"
                _placeholder={{ color: "#888888", fontWeight: "400" }}
                _focus={{ borderColor: "primary" }}
                _focusVisible={{ boxShadow: "0 0 0 2px #FECDCA" }}
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <Text color="red.500" fontSize="14px" mt="3px">
                  {errors.firstName.message}
                </Text>
              )}
            </Box>

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
              />
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

          <Button
            background="primary"
            p="8px 16px"
            h="56px"
            mb="25px"
            textAlign="center"
            borderRadius="8px"
            _hover={{ background: "#a21a10" }}
            _active={{ background: "#a21a10" }}
            type="submit"
          >
            <Text
              fontWeight="700"
              fontSize="20px"
              lineHeight="25.3px"
              color="#fff"
              mr="10px"
            >
              NEXT STEP
            </Text>
            <NextIcon />
          </Button>

          <Flex m="0 auto" mb="20px">
            {avatars.map((avatar) => (
              <Image
                src={avatar.src}
                alt={avatar.alt}
                key={avatar.alt}
                h="36px"
                w="36px"
                ml="-12px"
              />
            ))}
            <Flex
              h="36px"
              w="36px"
              borderRadius="50%"
              border="1px solid #CFCFCF"
              justifyContent="center"
              alignItems="center"
              bg="#fff"
              ml="-12px"
            >
              <Text
                color="primary"
                fontWeight="450"
                fontSize="12px"
                lineHeight="15.18px"
              >
                1.5k+
              </Text>
            </Flex>
          </Flex>

          <Text
            fontSize={{
              base: "12px",
              md: "14px",
            }}
            fontWeight="500"
            lineHeight="17.04px"
            textAlign="center"
            color="#888888"
          >
            Your email is safe and we don’t share it with anyone. (pinky
            promise)
          </Text>
        </Flex>
      </Box>
      <Image
        src={isMobile ? "/images/optin-4.png" : "/images/optin-3.png"}
        alt="Opt In"
        position="absolute"
        bottom="0"
        left="0"
        zIndex="-1"
        w="100%"
        h="100%"
      />
    </>
  );
};

export default OptInSection;
