import { createTheme } from "@mui/material/styles";
const typographyAtomStyles = createTheme({
  palette: {
    primary: {
      main: "#69A6E3",
    },
    secondary: {
      main: "#03314B",
    },
    success: {
      main: "#22C870",
    },
  },

  typography: {
    h1: {
      fontFamily: "Cera Pro",
      fontWeight: 700,
      fontStyle: "normal",
      fontSize: "36px",
      lineHeight: "45.25px",
      display: "inline",
    },
    caption: {
      fontFamily: "Cera Pro",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "14px",
      lineHeight: "17.6px",
    },

    body1: {
      fontFamily: "Cera Pro",
      // fontWeight: 700,
      fontSize: "16px",
      lineHeight: "20.11px",
      display: "inline",
      width: "100px",
      textTransform: "capitalize",
    },
    subtitle1: {
      fontFamily: "Cera Pro",
      fontWeight: 700,
      fontStyle: "medium",
      fontSize: "18px",
      verticalAlign: "top",
      textAlign: "left",
      display: "inline",
      //   height: "18px",
      textTransform: "capitalize",
      lineHeight: "22.63px",
      // color: "#22C870",
    },
    subtitle2: {
      fontFamily: "Cera Pro",
      fontWeight: 500,
      fontStyle: "medium",
      fontSize: "24px",
      verticalAlign: "top",
      textAlign: "left",
      display: "inline",
      width: "378px",
      //   height: "18px",

      lineHeight: "32px",
    },
    body2: {
      fontFamily: "Cera Pro",
      fontStyle: "Regular",
      fontSize: "16px",
      fontWeight: 400,
      color: "#6D787E",
      textTransform: "capitalize",
    },
    h2: {
      fontFamily: "Cera Pro",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "20px",
      width: "378px",
      //   height: "18px",

      lineHeight: "25.14px",
    },
  },
});

export { typographyAtomStyles };
