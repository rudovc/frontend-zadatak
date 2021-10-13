import { ThemeOptions, createTheme } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#0a64b4",
    },
  },
  typography: {
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1.2rem",
    },
    overline: {
      fontSize: "0.6rem",
      fontWeight: 600,
    },
    button: {
      fontWeight: 800,
    },
    fontWeightMedium: 500,
    body1: {
      fontWeight: 400,
    },
    caption: {
      fontWeight: 300,
    },
  },
};

export const theme = createTheme(themeOptions);
