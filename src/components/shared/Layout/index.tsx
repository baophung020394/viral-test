import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      w="100%"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {children}
    </Box>
  );
};

export default Layout;
