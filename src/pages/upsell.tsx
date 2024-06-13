import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { processPayment, upsell } from "../apis/payment";

import upsellImg from "../assets/images/upsell.jpeg";
import { usePaymentState } from "../providers/ContextProvider";

const UpSellPage = () => {
  const navigate = useNavigate();
  const { currentUser, paymentPlatForm } = usePaymentState();

  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  const handleUpSell = async () => {
    setIsRequesting(true);

    if (!paymentPlatForm) {
      console.log("No payment platform");
    }

    if (paymentPlatForm === "nmi") {
      // NMI upsell
      try {
        const paymentRequest = {
          amount: "0.01",
          customer_vault_id: currentUser!.id,
        };

        const result = await processPayment(paymentRequest);

        console.log("result", result);
        navigate("/finish");
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsRequesting(false);
      }
    } else {
      // Stripe upsell
      const payment_intent = sessionStorage.getItem("payment_intent");

      if (!payment_intent) {
        console.log("No payment intent");
        setIsRequesting(false);
        return;
      }

      try {
        await upsell({
          payment_intent,
          amount: 100,
        });

        setTimeout(() => {
          navigate("/finish");
          sessionStorage.removeItem("payment_intent");
        }, 1000);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsRequesting(false);
      }
    }
  };

  const handleDeclineUpSell = () => {
    navigate("/finish");
  };

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={6}
    >
      <Flex
        backgroundColor="teal"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              src={upsellImg}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              w="100%"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Viral blueprint formula course</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                cupiditate minus excepturi.
              </Text>
              <Text color="teal.600" fontSize={["lg", "xl", "2xl"]}>
                $9
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Heading size="md" color="#fff" mt="2rem" w="70%">
          Get access to the viral blueprint formula course that you can’t get
          anywhere else - other than on this page ⬆️
        </Heading>
      </Flex>

      <Flex
        h="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={{
          base: "2rem",
          md: "0",
        }}
      >
        <Heading textAlign="center" mb="1rem">
          Upsell - Platform {paymentPlatForm}
        </Heading>

        <Card
          maxW="sm"
          display={{
            base: "block",
            md: "none",
          }}
        >
          <CardBody>
            <Image
              src={upsellImg}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              h="150px"
            />
            <Stack mt="6" spacing="3">
              <Flex justifyContent="space-between" alignItems="center">
                <Heading size="md">Viral Profit course</Heading>
                <Text color="teal.600" fontSize="xl">
                  $1
                </Text>
              </Flex>
            </Stack>
          </CardBody>
        </Card>
        <Heading
          size="sm"
          color="teal.700"
          mt="2rem"
          w="100%"
          display={{
            base: "block",
            md: "none",
          }}
        >
          Get access to the viral blueprint formula course that you can’t get
          anywhere else - other than on this page ⬆️
        </Heading>

        <Box
          mt="12"
          w={{
            base: "100%",
            md: "80%",
          }}
        >
          <Button
            isLoading={isRequesting}
            loadingText="Processing..."
            width="100%"
            colorScheme="teal"
            onClick={handleUpSell}
          >
            Order Now
          </Button>

          <Button
            width="100%"
            variant="ghost"
            colorScheme="teal"
            onClick={handleDeclineUpSell}
            disabled={isRequesting}
          >
            Decline
          </Button>
        </Box>
      </Flex>
    </Grid>
  );
};

export default UpSellPage;
