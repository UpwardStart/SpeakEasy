import { createTheme } from "@mui/system";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "uppercase",
      letterSpacing: 0,
      fontWeight: "bold"
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
    text: {
      main: "#000000",
      secondary: "#9CADC8",
      disabled: "#ffffff"
    }
  }
});
