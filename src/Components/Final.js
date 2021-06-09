import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  grid: {
    margin: "auto",
    maxWidth: "19rem",
    height: "12vh",
    textAlign: "left",
    border: "1px solid grey",
    marginTop: "0.2rem",
  },
}));
const Final = ({ cashObject }) => {
  const classes = useStyles();

  let array = Object.values(cashObject);
  let sum = 0;
  if (array != null) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].Transaction === "+") {
        sum += parseInt(array[i].Amount);
      } else if (array[i].Transaction === null) {
        continue;
      } else {
        sum -= parseInt(array[i].Amount);
      }
    }
  }
  return (
    <div>
      <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2">
                {array.length > 1 ? array[array.length - 1].Date : 0} (
                {array.length > 1 ? array[array.length - 1].Time : 0})
              </Typography>
              <Typography variant="subtitle1">FINAL</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              {sum >= 0 ? (
                <div style={{ color: "green" }}>{sum}</div>
              ) : (
                <div style={{ color: "red" }}>{sum}</div>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Final;
