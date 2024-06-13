import { Box, Heading, Image } from "@chakra-ui/react";
import Optin1 from "../../assets/images/optin-1.png";
import Optin2 from "../../assets/images/optin-2.png";
import CustomProgressBar from "../CustomProgressBar";

type OptInLoaderProps = {
  progress: number;
};

const OptInLoader = ({ progress }: OptInLoaderProps) => {
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
          One moment, your results are loading…
        </Heading>
        <Box
          width={{
            base: "100%",
            md: "400px",
          }}
          margin="0 auto"
        >
          <CustomProgressBar
            value={progress}
            max={100}
            height="12px"
            borderRadius="12px"
            backgroundColor="#F0F0F0"
          />
        </Box>
      </Box>
      <Image
        src={Optin1}
        alt="Opt In"
        position="absolute"
        bottom="0"
        left="0"
        zIndex="-1"
        fetchPriority="high"
      />
      <Image
        src={Optin2}
        alt="Opt In"
        position="absolute"
        top="0"
        right="0"
        zIndex="-1"
        fetchPriority="high"
      />
    </>
  );
};

export default OptInLoader;
