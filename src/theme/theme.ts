import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E2E2E",
      dark: "#1C1C1C",
      light: "#424242",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4CAF50",
      dark: "#388E3C",
      light: "#C8E6C9",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B3B3",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 400,
      fontSize: "1.75rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "10px",
          padding: "10px 20px",
        },
        contained: {
          backgroundColor: "#4CAF50",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#388E3C",
          },
        },
        outlined: {
          border: "2px solid #4CAF50",
          color: "#4CAF50",
          "&:hover": {
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          color: "#FFFFFF",
          borderRadius: "10px",
          border: "1px solid #4CAF50",
          overflow: "hidden",
          "&:hover": {
            border: "1px solid #FFFFFF",
          },
        },
      },
    },
  },
});

export default theme;
