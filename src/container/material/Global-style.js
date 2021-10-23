import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      body: {
        background: "#FFEBC2",
        fontFamily: "Josefin Sans sans-serif !important",
      },
      "*": {
        fontFamily: "Josefin Sans sans-serif !important",
        margin: 0,
        padding: 0,
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
