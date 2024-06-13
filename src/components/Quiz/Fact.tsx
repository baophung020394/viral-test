import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { QuizProps } from ".";
import NextIcon from "../NextIcon";

type FactProps = QuizProps & {
  selectedNiched: string;
};

const Fact = ({
  quiz,
  // currentQuestion,
  handleSelectAnswer,
  selectedNiched,
}: FactProps) => {
  // const [animationDirection, setAnimationDirection] = useState("");
  const isFunFact = quiz.title === "Fun Fact...";

  const regex = /{{ selectedNiche }}/g;
  const quizContent = quiz.content?.replace(regex, selectedNiched);

  const handleClick = () => {
    handleSelectAnswer();
    // setTimeout(() => {
    //   setAnimationDirection("outToLeft");
    //   setTimeout(() => {
    //     handleSelectAnswer();
    //   }, 300);
    // }, 300);
  };

  // useEffect(() => {
  //   setAnimationDirection("inFromRight");
  // }, [currentQuestion]);

  return (
    <>
      <Heading
        fontSize={{ base: "32px", lg: "40px" }}
        fontWeight="800"
        lineHeight={{ base: "42.66px", lg: "53.33px" }}
        mb={{ base: "25px", lg: "35px" }}
        textAlign="center"
        className="quiz__question"
        fontFamily="Playfair Display, serif !important"
      >
        {quiz.title}
      </Heading>
      <Flex
        className={`quiz__answers`}
        // className={`quiz__answers ${animationDirection}`}
        flexDirection="column"
      >
        <Text
          className="quiz__answer fact-content"
          textAlign="center"
          fontSize={{ base: "20px", lg: "26px" }}
          fontWeight="500"
          lineHeight={{ base: "25.3px", lg: "32.89px" }}
          mb={{ base: "25px", lg: "30px" }}
          dangerouslySetInnerHTML={{
            __html:
              quizContent
                ?.replace(
                  "<< ‘’YouTube Creator Fund’’ >>",
                  "<span>‘’YouTube Creator Fund’’</span>",
                )
                ?.replace(
                  "<< 390,000 full-time equivalent jobs >>",
                  "<span>390,000 full-time equivalent jobs</span>",
                ) ?? "",
          }}
          _hover={{ border: "none", backgroundColor: "none" }}
        ></Text>

        <Image
          src={quiz.image}
          alt={quiz.title}
          borderRadius={isFunFact ? "7px" : "14px"}
          mb="24px"
          boxShadow={isFunFact ? "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" : "none"}
        />
        {quiz.subcontent && (
          <Text
            className="fact-subcontent"
            textAlign="center"
            fontSize={{ base: "14px", lg: "16px" }}
            fontWeight={{ base: 500, lg: 500 }}
            lineHeight={{ base: "17.71px", lg: "20.24px" }}
            mb={{ base: "40px", lg: "20px" }}
            dangerouslySetInnerHTML={{
              __html:
                quiz.subcontent?.replace(
                  "<< Neal Mohan >>",
                  "<span>Neal Mohan</span>",
                ) ?? "",
            }}
          ></Text>
        )}
        <Button
          margin="auto"
          width="max-content"
          backgroundColor="#D92D20"
          color="#fff"
          onClick={handleClick}
          padding="8px 16px"
          maxH={{ base: "46px", lg: "52px" }}
          maxW={{ base: "95%", sm: "331px", lg: "312px" }}
          minH={{ base: "46px", lg: "52px" }}
          minW={{ base: "95%", sm: "331px", lg: "312px" }}
          borderRadius="8px"
          _hover={{ backgroundColor: "#c92b1f" }}
        >
          <Text fontSize="16px" fontWeight="700" mr="10px" lineHeight="20.24px">
            Damn, I’d want a piece of that!
          </Text>
          <NextIcon />
        </Button>
      </Flex>
    </>
  );
};

export default Fact;
