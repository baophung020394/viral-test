import { Box } from "@chakra-ui/react";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomProgressBar from "../components/CustomProgressBar";
import Quiz from "../components/Quiz";
import { questions } from "../constants";
import Footer from "../components/shared/Footer";

const QuizPage = () => {
  const [progress, setProgress] = useState<number>(() => {
    const savedProgress = localStorage.getItem("progress");
    return savedProgress ? parseInt(savedProgress, 10) : 20;
  });

  const navigate = useNavigate();

  // const toast = useToast();
  const sliderRef = useRef<Slider>(null);

  const initialSlide = useMemo(() => {
    const savedQuestion = localStorage.getItem("currentQuestion");

    if (!savedQuestion) return 0;

    const index = parseInt(savedQuestion, 10);

    return index;
  }, []);

  const handleProgress = (currentQuestion: number) => {
    if (currentQuestion === 0) {
      setProgress(30);
      localStorage.setItem("progress", "30");
    }

    const from = 30;
    const difference = 70 / (questions.length - 2);
    const progressValue = from + (currentQuestion - 1) * difference;

    setProgress(progressValue);
    localStorage.setItem("progress", progressValue.toString());
  };

  const handleSelectAnswer = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    infinite: false,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    className: [5, 8].includes(Number(localStorage.getItem("currentQuestion")))
      ? "slider-custom-fact"
      : "slider-custom",
  };

  const handleBeforeChange = (currentSlide: number, nextSlide: number) => {
    if (currentSlide < questions.length - 1) {
      handleProgress(nextSlide);
      localStorage.setItem("currentQuestion", nextSlide.toString());
    } else {
      // toast({
      //   title: "Completed!",
      //   description: "Thank you for answering the questions.",
      //   status: "success",
      //   duration: 1000,
      //   isClosable: true,
      //   position: "top-right",
      // });
      localStorage.removeItem("currentQuestion");
      localStorage.removeItem("progress");
      setTimeout(() => {
        navigate("/opt-in");
      }, 300);
    }
  };

  return (
    <>
      <Box minHeight="100vh">
        <Box
          width="100%"
          // mb={{ base: "60px", md: "240px" }}
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          height={{ base: "6px", lg: "12px" }}
        >
          <Box width="100%" height="100%">
            <CustomProgressBar
              value={progress}
              max={100}
              filledTrackColor="#D92D20"
              backgroundColor="#FEF3F2"
              height="100%"
            />
          </Box>
        </Box>

        <Box
          width="100%"
          pt={{
            base: [4, 5, 8].includes(
              Number(localStorage.getItem("currentQuestion")),
            )
              ? "10px"
              : "40px",
            lg: "60px",
            "2xl": [5, 8].includes(
              Number(localStorage.getItem("currentQuestion")),
            )
              ? "50px"
              : "160px",
          }}
          pb={
            parseInt(localStorage.getItem("currentQuestion") || "0") === 5
              ? "60px"
              : "0px"
          }
          margin="0 auto"
          minHeight={"100vh"}
        >
          <Slider
            {...settings}
            ref={sliderRef}
            beforeChange={handleBeforeChange}
            initialSlide={initialSlide}
          >
            {questions.map((question, index) => {
              return (
                <Quiz
                  key={question.type + index}
                  currentQuestion={index}
                  quiz={question}
                  handleSelectAnswer={handleSelectAnswer}
                />
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default QuizPage;
