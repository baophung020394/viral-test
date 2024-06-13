import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Question as QuestionType } from "../../types/type";
import Fact from "./Fact";
import Question from "./Question";

export type QuizProps = {
  currentQuestion?: number;
  quiz: QuestionType;
  handleSelectAnswer: () => void;
};

const Quiz = ({ currentQuestion, quiz, handleSelectAnswer }: QuizProps) => {
  const [selectedNiched, setSelectedNiched] = useState<string>("");

  return (
    <Flex
      className="quiz-container"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Flex
        className="quiz"
        flexDirection="column"
        width={{ base: "95%", sm: "361px", lg: "646px" }}
        // width={{ base: window.innerWidth <= 390 ? "361px" : "646px" }}
        border="1px solid #E1E1E1"
        padding={{
          base: "45px 15px 45px 15px",
          lg: "50px 60px 50px 60px",
        }}
        borderRadius="15px"
        boxShadow="0px 24px 42px 0px rgba(0, 0, 0, 0.04)"
        backgroundColor="#FFFBFA"
      >
        {quiz.badge && (
          <Heading
            fontSize={{ base: "12px", lg: "12px" }}
            fontWeight="700"
            textAlign="center"
            lineHeight={{ base: "15.18px", lg: "15.18px" }}
            padding={{ base: "10px 20px" }}
            backgroundColor="#fff"
            color="#000"
            border="1px solid #E1E1E1"
            borderRadius="24px"
            maxW="220px"
            margin={{ base: "0 auto 25px", lg: "0 auto 30px" }}
          >
            {quiz.badge}
          </Heading>
        )}

        <>
          {quiz.type === "question" ? (
            <Question
              quiz={quiz}
              currentQuestion={currentQuestion}
              handleSelectAnswer={handleSelectAnswer}
              setSelectedNiched={setSelectedNiched}
            />
          ) : (
            <Fact
              quiz={quiz}
              handleSelectAnswer={handleSelectAnswer}
              selectedNiched={selectedNiched}
              currentQuestion={currentQuestion}
            />
          )}
        </>
      </Flex>
    </Flex>
  );
};

export default Quiz;
