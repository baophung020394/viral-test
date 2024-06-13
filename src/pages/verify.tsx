import { useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { Flex, Spinner } from "@chakra-ui/react";

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const { checkAuth } = useAuth();

  const token = searchParams.get("token");
  const unlockVideo = searchParams.get("unlockvideo");
  const userId = searchParams.get("userId");

  const navigate = useNavigate();

  useEffect(() => {
    verifyAuth();
  });

  const verifyAuth = async () => {
    // If there is no token, redirect to login page
    if (!token) {
      navigate("/login");
      return;
    }

    // Otherwise, set the token and unlockvideo in the cookie and redirect to the fast-start page
    Cookies.set("token", token);

    if (userId) {
      Cookies.set("userId", userId);
    }

    if (unlockVideo) {
      Cookies.set("unlockVideo", unlockVideo);
    }

    await checkAuth();

    navigate("/portal");
  };

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
};

export default VerifyPage;
