import { createTheme } from "@mui/system";

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
    fontSize: 14,
    button: {
      letterSpacing: 0,
      fontWeight: "bold"
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    },
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
