import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    maxWidth: "80%",
    margin: "auto",
  },
  appbar: {
    background: "rgb(236, 183, 236)",
  },
  title: {
    flexGrow: 1,
    color: "rgb(115, 16, 207)",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} variant="elevation" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CASH REGISTER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
