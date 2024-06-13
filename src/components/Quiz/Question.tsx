import { Box, Flex, Heading } from "@chakra-ui/react";
import { QuizProps } from ".";
import { icons } from "../../constants";
import { useState } from "react";

type QuestionProps = QuizProps & {
  setSelectedNiched: React.Dispatch<React.SetStateAction<string>>;
};

const Question = ({
  quiz,
  currentQuestion,
  handleSelectAnswer,
  setSelectedNiched,
}: QuestionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const [isClickable, setIsClickable] = useState(true);

  const isNicheQuestion = currentQuestion === 4;

  const handleClick = (index: number) => {
    if (!isClickable) return;
    setIsClickable(false);
    setActiveIndex(index);
    handleSelectAnswer();
  };

  return (
    <>
      <Heading
        maxW={{
          base: "326px",
          lg:
            currentQuestion && [7, 9, 10, 11, 13].includes(currentQuestion)
              ? "526"
              : "394",
        }}
        fontSize={{ base: "24px", lg: "32px" }}
        fontWeight="900"
        mb={{ base: "25px", lg: "40px" }}
        margin={{ base: "0 auto 40px", lg: "0 auto 40px" }}
        lineHeight={{ base: "30.36px", lg: "40.48px" }}
        textAlign="center"
        className="quiz__question"
        dangerouslySetInnerHTML={{
          __html: quiz.question?.replace("<\n>", "<br>") || "",
        }}
      ></Heading>

      <Flex
        className={`quiz__answers`}
        display={isNicheQuestion ? "grid" : "flex"}
        gridTemplateColumns={{
          base: isNicheQuestion ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
          lg: isNicheQuestion ? "repeat(3, 1fr)" : "unset",
        }}
        gap={isNicheQuestion ? "12px" : "16px"}
        margin={isNicheQuestion ? "0 auto" : "unset"}
        flexDirection={isNicheQuestion ? "unset" : "column"}
      >
        {quiz.answers?.map((answer, index) => {
          return (
            <Flex
              className={`quiz__answer ${
                activeIndex === index ? "active" : ""
              } ${!isClickable && "quiz__answer--disabled"}`}
              key={answer}
              minW={{
                base: isNicheQuestion ? "140px" : "100%",
                lg: isNicheQuestion ? "162px" : "100%",
              }}
              minH={{
                base: isNicheQuestion ? "104px" : "64px",
                lg: isNicheQuestion ? "107px" : "64px",
              }}
              border="1px solid #E1E1E1"
              borderRadius="15px"
              p={{
                base: isNicheQuestion ? "20px" : "12px",
                lg: isNicheQuestion ? "20px" : "16px",
              }}
              alignItems="center"
              gap="16px"
              cursor="pointer"
              onClick={() => {
                if (isNicheQuestion) {
                  setSelectedNiched(answer);
                }
                handleClick(index);
              }}
              flexDirection={isNicheQuestion ? "column" : "row"}
              backgroundColor="#ffffff"
            >
              <Flex
                border="1px solid #E1E1E1"
                className="quiz__answer--order"
                maxH="32px"
                maxW="32px"
                borderRadius="8px"
                justifyContent="center"
                alignItems="center"
                padding="4px 12px"
                width="100%"
                backgroundColor="#FFFBFA"
              >
                {isNicheQuestion ? (
                  <Box
                    as="span"
                    maxW="16px"
                    maxH="16px"
                    fontSize="13px"
                    color="#000000"
                    fontWeight="500"
                  >
                    {icons[index]}
                  </Box>
                ) : (
                  <Box
                    as="span"
                    lineHeight={{ base: "25.3px", lg: "25.3px" }}
                    fontWeight="500"
                    color="#000000"
                    fontSize={{ base: "20px", lg: "18px" }}
                  >
                    {index + 1}
                  </Box>
                )}
              </Flex>
              <Box
                className="quiz__answer--content"
                as="p"
                fontSize={{ base: "16px", lg: "18px" }}
                fontWeight="500"
                lineHeight={{ base: "20.24px", lg: "22.77px" }}
                maxW={{ base: "256px", lg: "100%" }}
                color="#000000"
              >
                {answer}
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default Question;
