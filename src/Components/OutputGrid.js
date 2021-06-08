import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";

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

export default function OutputGrid({ cashObject, deleteHandler }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
      {Object.keys(cashObject).map((id) => {
        return (
          <Grid key={id} className={classes.grid} container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2">{cashObject[id].Date}</Typography>
                  <Typography variant="subtitle1">
                    {cashObject[id].Remarks}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  {cashObject[id].Transaction}
                  {cashObject[id].Amount}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={() => {
                    deleteHandler(id);
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
      {/* </Paper> */}
    </div>
  );
}
