import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Card,
  CardBody,
  CheckboxIcon,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/shared/Layout";

const FinishPage = () => {
  return (
    <Layout>
      <Card maxW={{ base: "sx", md: "md" }}>
        <CardBody>
          <Stack
            spacing={8}
            mx="auto"
            maxW="md"
            py={{ base: "1rem", md: "2rem" }}
            px={{ base: 2, md: 8 }}
          >
            <Box textAlign="center">
              <CheckboxIcon fontSize="giant" color="green.500" />
              <Heading as="h2" size="lg" mt={6}>
                Thank You for Your Order!
              </Heading>
            </Box>
            <Alert status="success">
              <AlertIcon />
              <Box>
                <AlertDescription>
                  Your order has been successfully placed. We'll keep you
                  updated on its status via email.
                </AlertDescription>
              </Box>
            </Alert>
            <Text>
              In the meantime, you can visit your account page to track your
              order or browse our products for more inspiration.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default FinishPage;
