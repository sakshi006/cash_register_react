import React, { useState, useEffect } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const initialValues = {
  Date: "",
  Time: "10:00",
  Remarks: "",
  Amount: "",
  Transaction: "+",
};

const useStyles = makeStyles((theme) => ({
  root: {
    font: "blue",
  },
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // setValues(e.target.value);
  };

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <TextField
                size="small"
                required
                fullWidth
                type="date"
                variant="outlined"
                name="Date"
                value={values.Date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <Select
                placeholder="Transaction type"
                required
                fullWidth
                name="Transaction"
                value={values.Transaction}
                onChange={handleChange}
              >
                <MenuItem value={"+"}>+</MenuItem>
                <MenuItem value={"-"}>-</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                size="small"
                variant="outlined"
                type="Time"
                name="Time"
                value={values.Time}
                placeholder="Time"
                required
                fullWidth
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                variant="outlined"
                label="Remarks"
                value={values.Remarks}
                name="Remarks"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                variant="outlined"
                label="Amount"
                type="number"
                name="Amount"
                fullWidth
                value={values.Amount}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Save
          </Button>
        </form>
      </div>
    </Container>
  );
}
