import { Box, Heading, Stack, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const navigate = useNavigate();

  return (
    <Box
      as="footer"
      backgroundColor="#000"
      color="#808080"
      textAlign="center"
      py="25px"
      px="16px"
      fontSize="12px"
      fontWeight="500"
      lineHeight="15.18px"
    >
      <Heading mb="16px" fontSize="12px" fontWeight="500">
        <Box as="span" cursor="pointer" onClick={() => navigate("/privacy")}>
          Privacy Policy
        </Box>
        <Box
          border="1px solid #393939"
          mx="10px"
          display="inline-block"
          height="17px"
          mb="-5px"
        />
        <Box as="span" cursor="pointer" onClick={() => navigate("/terms")}>
          Terms and conditions
        </Box>
      </Heading>
      <Box mb="20px">
        Support:{" "}
        <Box as="span" color="#B9B9B9">
          hello@viralprofits.yt
        </Box>
      </Box>
      <Box
        width={{
          md: "90%",
          xl: "1200px",
        }}
        margin="0 auto"
      >
        <Stack gap="10px" mb="20px">
          <Box>
            Earnings and income representations made by Jake Tran, and their
            advertisers/sponsors are aspirational statements only of your
            earnings potential. The success of Jake Tran, testimonials and other
            examples used are exceptional, non-typical results and are not
            intended to be and are not a guarantee that you or others will
            achieve the same results. Individual results will always vary and
            yours will depend entirely on your individual capacity, work ethic,
            business skills and experience, level of motivation, diligence, the
            economy, the normal and unforeseen risks of doing business, and
            other factors.
          </Box>
          <Box>
            By using this website or any related materials you agree to take
            full responsibility for your own results, or lack thereof. Our team
            is here to support you, but you should always do your own due
            diligence before making any investment or taking any risk.
          </Box>

          <Box>
            This site is not a part of the Facebook™ website or Facebook™ Inc.
            This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a
            trademark of FACEBOOK™, Inc.
          </Box>

          <Box>
            This site is not a part of TikTok™ or ByteDance Ltd. This site is
            NOT endorsed by TikTok™ or ByteDance Ltd. in any way. TIKTOK™ is a
            trademark of ByteDance Ltd.
          </Box>

          <Box>
            You should know that all products and services by our company are
            for educational and informational purposes only. Nothing on this
            page, any of our websites, or any of our content or curriculum is a
            promise or guarantee of results or future earnings, and we do not
            offer any legal, medical, tax or other professional advice. If you
            have any questions or need further information, please email us at{" "}
            {""}
            <Box
              as="span"
              color="#B9B9B9"
              textDecoration={isMobile ? "underline" : "none"}
            >
              hello@viralprofits.yt
            </Box>
          </Box>
        </Stack>

        <Box>
          © 2024 Modern Renaissance, LLC. Guarded by every law known to mankind.
          Copy this and you’ll meet Tony. Tony doesn't do letters; he knocks.
          And you won’t like what happens next. Seriously, don’t test us.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
