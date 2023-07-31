import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e3d98d",
      light: "#fff59d",
      dark: "#B8A860",
      contrastText: "#252525",
    },
    secondary: {
      main: "#382a21",
      light: "#876958",
      dark: "#2e221b",
      contrastText: "#e3d98d",
    },

    black: {
      main: grey[900],
      light: grey[400],
      dark: "#202020",
      contrastText: "#B8A860",
    },
  },
});
