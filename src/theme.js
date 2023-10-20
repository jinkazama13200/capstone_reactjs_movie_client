import { createTheme } from "@mui/material";
import { red, blue, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
    },
  },
  customColor: {
    black: grey[900],
  },
});

export default theme;
