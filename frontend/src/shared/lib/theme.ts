import { PaletteMode } from "@mui/material";

export const getDesignTokens = () => {
  const palette = {
    primary: {
      main: "#5cd89f",
      light: "#82e3b2",
      dark: "#3bb77c",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffffff",
      light: "#e1e1e1",
      dark: "#e1e1e1",
      contrastText: "#000000",
    },
    info: {
      main: "#05BFDB",
      light: "#5CD8E8",
      dark: "#038CA3",
      contrastText: "#ffffff",
    },
    success: {
      main: "#15F5BA",
      light: "#5CFCD3",
      dark: "#0FBF89",
      contrastText: "#211951",
    },
    warning: {
      main: "#FFD36E",
      light: "#FFE69C",
      dark: "#CCAA58",
      contrastText: "#211951",
    },
    error: {
      main: "#FF4848",
      light: "#FF7676",
      dark: "#CC3838",
      contrastText: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#0000002e",
      paper2: "#000000eb",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  };

  const autofillBackgroundColor = "#121212";

  const typography = {
    h1: {
      fontSize: "2rem",
      lineHeight: "2.5rem",
      letterSpacing: "0.015em",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      letterSpacing: "0.015em",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      letterSpacing: "0.015em",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      letterSpacing: "0.01em",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.01em",
      fontWeight: 500,
    },
    h6: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.01em",
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: "1.2rem",
      letterSpacing: "0.01em",
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.01em",
    },
  };

  return {
    palette: {
      mode: "dark" as PaletteMode,
      ...palette,
    },
    typography,
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-input:-webkit-autofill": {
              WebkitBoxShadow: `0 0 0 1000px ${autofillBackgroundColor} inset`,
              WebkitTextFillColor: "#fff",
            },
          },
        },
      },
    },
  };
};
