import { Flex } from "@chakra-ui/react";

import "@vetixy/circular-std";
import OptInLoader from "../components/OptInLoader";
import { useEffect, useState } from "react";
import OptInSection from "../components/OptInSection";
import Footer from "../components/shared/Footer";

const OptInPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Random time between 5s and 7s
    const time = Math.floor(Math.random() * (7000 - 5000) + 5000);

    // Calculate progress per second
    const progressPerSecond = 100 / (time / 1000) + 3;

    // Simulate seconds of loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    // Update progress every 200ms
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        Math.min(prevProgress + progressPerSecond / 5, 100),
      );
    }, 200);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        {isLoading ? <OptInLoader progress={progress} /> : <OptInSection />}
      </Flex>
      <Footer />
    </>
  );
};

export default OptInPage;
