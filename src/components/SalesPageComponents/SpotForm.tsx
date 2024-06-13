import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailDomainSuggestion from "../EmailDomainSuggestion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "../ArrowBackIcon";
import queryString from "query-string";

type OptInInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
};

const SpotFormSection = () => {
  const navigate = useNavigate();
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
    const qsData = queryString.stringify(data);
    navigate(`/checkout?${qsData}`);
  };

  const onEmailSuggestionClick = (email: string) => {
    setValue("email", email);
    setShowEmailSuggestions(false);
  };

  return (
    <>
      <Box mx="8%" mt="80px">
        <Flex
          bg="#F9FAFB"
          border="1px solid #EAECF0"
          borderRadius="15px"
          flexDirection="row"
        >
          <Stack
            as="form"
            p={{ base: "20px", md: "40px 36px" }}
            w={{ base: "100%", md: "644px" }}
            onSubmit={handleSubmit(onSubmit)}
            ml="auto"
          >
            <div className="flex ring-1 ring-[#E7E7E7] h-[96px] rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] rounded-br-[14px]">
              {/* Box 1 */}
              <div className="w-[50%] bg-[#EAECF5] rounded-tl-[14px] rounded-bl-[14px] items-center flex ">
                <div className="bg-[#363F72] h-[56px] w-[56px] rounded-[14px] flex items-center justify-center ml-6">
                  <Text fontSize="26px" color="#FFFFFF" fontWeight="700">
                    1
                  </Text>
                </div>
                <div className="ml-4">
                  <Text fontSize="25px" color="#000000" fontWeight="700">
                    STEP: 1
                  </Text>
                  <Text fontSize="16px" color="#787878" fontWeight="500">
                    YOUR ACCESS INFO
                  </Text>
                </div>
              </div>

              {/* Box 2 */}
              <div className="w-[50%]  rounded-tr-[14px] rounded-br-[14px] items-center flex ">
                <div className="bg-[#EAECF5] h-[56px] w-[56px] rounded-[14px] flex items-center justify-center ml-6">
                  <Text fontSize="26px" color="#000000" fontWeight="700">
                    2
                  </Text>
                </div>
                <div className="ml-4">
                  <Text fontSize="25px" color="#000000" fontWeight="700">
                    STEP: 2
                  </Text>
                  <Text fontSize="16px" color="#787878" fontWeight="500">
                    GET INSTANT ACCESS
                  </Text>
                </div>
              </div>
            </div>

            <Button
              background="primary"
              p="8px 16px"
              h="46px"
              my="25px"
              textAlign="center"
              borderRadius="8px"
              _hover={{ background: "#a21a10" }}
              _active={{ background: "#a21a10" }}
              type="submit"
            >
              <Text
                fontWeight="900"
                fontSize="14px"
                lineHeight="18px"
                color="#fff"
                mr="10px"
              >
                ⚠️ This is a strictly limited offer
              </Text>
            </Button>
            <Stack
              spacing="15px"
              mb={{ base: "25px", md: "28px" }}
              position="relative"
            >
              <Flex gap="10px">
                <Input
                  placeholder="First Name"
                  borderRadius="12px"
                  height="77px"
                  fontSize="20px"
                  border="1px solid #EAECF0"
                  backgroundColor="#FFFFFF"
                  _placeholder={{ color: "#888888", fontWeight: "400" }}
                  _focus={{ borderColor: "primary" }}
                  _focusVisible={{ boxShadow: "0 0 0 2px #FECDCA" }}
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                <Input
                  placeholder="Last Name"
                  borderRadius="12px"
                  height="77px"
                  fontSize="20px"
                  border="1px solid #EAECF0"
                  backgroundColor="#FFFFFF"
                  _placeholder={{ color: "#888888", fontWeight: "400" }}
                  _focus={{ borderColor: "primary" }}
                  _focusVisible={{ boxShadow: "0 0 0 2px #FECDCA" }}
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
              </Flex>
              {errors.firstName && (
                <Text color="red.500" fontSize="14px" mt="3px">
                  {errors.firstName.message}
                </Text>
              )}
              <Box>
                <Input
                  placeholder="Your Best Email"
                  type="email"
                  borderRadius="12px"
                  height="77px"
                  fontSize="20px"
                  border="1px solid #EAECF0"
                  backgroundColor="#FFFFFF"
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
              {/* TO DO: Phone number select */}
              <Box>
                <Input
                  placeholder="Phone number (for fast-start updates)"
                  type="number"
                  borderRadius="12px"
                  height="77px"
                  fontSize="20px"
                  border="1px solid #EAECF0"
                  backgroundColor="#FFFFFF"
                  _placeholder={{ color: "#888888", fontWeight: "400" }}
                  _focus={{ borderColor: "primary" }}
                  _focusVisible={{ boxShadow: "0 0 0 2px #FECDCA" }}
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
              </Box>
            </Stack>

            <Button
              background="primary"
              p="8px 16px"
              h="119px"
              mb="25px"
              textAlign="center"
              borderRadius="8px"
              _hover={{ background: "#a21a10" }}
              _active={{ background: "#a21a10" }}
              type="submit"
              display="block"
            >
              <Text
                fontWeight="700"
                fontSize="32px"
                lineHeight="40.48px"
                color="#fff"
                mr="10px"
                display="flex"
                alignContent="center"
                justifyContent="center"
              >
                YES, SAVE MY SPOT!{" "}
                <ArrowBackIcon color="white" size={24} className="mt-2 ml-2" />
              </Text>

              <Text
                fontWeight="900"
                fontSize="16px"
                lineHeight="25.3px"
                color="#FFBEB9"
                mr="10px"
              >
                I WANT INSTANT ACCESS TO THE FAST-START NOW!{" "}
              </Text>
            </Button>

            <Text
              fontSize="16px"
              fontWeight="450"
              lineHeight="20.24px"
              textAlign="left"
              color="#888888"
            >
              *Due to video-hosting bandwidth limitations, we can only enroll a
              limited number of new members. To secure your spot for this
              exclusive offer, please enter your contact details so we can hold
              your spot.
            </Text>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default SpotFormSection;
