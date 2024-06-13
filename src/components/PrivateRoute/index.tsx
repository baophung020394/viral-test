import { Flex, Spinner } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

type PrivateRouteProps = {
  element: JSX.Element;
};

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" />
      </Flex>
    );
  }

  return user ? element : <Navigate to="/" />;
};

export default PrivateRoute;
