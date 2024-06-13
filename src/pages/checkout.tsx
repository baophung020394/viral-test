import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import checkoutImg from "../assets/images/checkout.jpeg";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => {
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
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              src={checkoutImg}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Viral Profit course</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                cupiditate minus excepturi.
              </Text>
              <Text color="teal.600" fontSize="2xl">
                $1
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>

      <Flex
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        p={{
          base: "2rem",
          md: "0",
        }}
      >
        <Heading textAlign="center" mb="1rem">
          Checkout
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
              src={checkoutImg}
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

        <Box as="form">
          <Box>
            <Box mt="1rem">
              {stripePromise && (
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              )}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Grid>
  );
};

export default CheckoutPage;
