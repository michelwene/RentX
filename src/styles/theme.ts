import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: "#1B1B1F",
  },
  red: {
    500: "#DC1637",
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "#F4F5F6",
      },
    },
  },
});
