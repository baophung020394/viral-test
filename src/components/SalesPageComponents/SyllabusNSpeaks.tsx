import "@vetixy/circular-std";
import { Box } from "@chakra-ui/react";
import ResultSpeak from "./ResultSpeak";
import Syllabus from "./Syllabus";

export default function SyllabusNSpeaks() {
  return (
    <>
      <Box alignItems="center" justifyContent="center">
        <Syllabus />
        <ResultSpeak />
      </Box>
    </>
  );
}
