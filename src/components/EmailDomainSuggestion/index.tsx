import { Box } from "@chakra-ui/react";

type EmailDomainSuggestionProps = {
  email: string;
  onEmailSuggestionClick: (email: string) => void;
};

const EmailDomainSuggestion = ({
  email,
  onEmailSuggestionClick,
}: EmailDomainSuggestionProps) => {
  const emailDomains = [
    "@gmail.com",
    "@yahoo.com",
    "@hotmail.com",
    "@aol.com",
    "@outlook.com",
  ];

  return (
    <Box
      bg="#fff"
      border="1px solid #eaecf0"
      shadow=" 0px 24px 42px 0px #0000000F"
      w="254px"
      minH="200px"
      borderRadius="15px"
      py="5px"
      position="absolute"
      top="calc(100% + 7px)"
      zIndex="999"
    >
      {emailDomains.map((emailDomain, index) => (
        <>
          <Box
            py="10px"
            fontSize="14px"
            fontWeight="400"
            lineHeight="17.71px"
            color="#424242"
            transition="all 0.3s"
            pl="15px"
            _hover={{ bg: "#f5f5f5", cursor: "pointer" }}
            onClick={() => onEmailSuggestionClick(email + emailDomain)}
          >
            {email + emailDomain}
          </Box>
          {index !== 4 && (
            <Box
              borderBottom="1px solid #eaecf0"
              w="calc(100% - 15px)"
              ml="15px"
            />
          )}
        </>
      ))}
    </Box>
  );
};

export default EmailDomainSuggestion;
