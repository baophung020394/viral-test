import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "#D92D20",
        },
      },
    },
  },
  colors: {
    primary: "#D92D20",
    subPrimary: "#740505",
    "primary-dark": "#c4261a",
  },
});
