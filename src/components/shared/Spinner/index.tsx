import { Box, Center, Spinner, Text } from '@chakra-ui/react';

const Loading = ({ message = 'Loading...' }) => {
  return (
    <Center height="100vh">
      <Box textAlign="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text fontSize="xl" mt={3} color="gray.600">
          {message}
        </Text>
      </Box>
    </Center>
  );
};

export default Loading;
