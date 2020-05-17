import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(3, 2),
    margin: "40px",
  },
  flex: {
    display: "flex",
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
  },
  chatWindow: {
    width: "70%",
    height: "300px",
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <Typography variant="h4" component="h4">
          Chat App
        </Typography>
        <Typography variant="h6" component="h6">
          Topic
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}></div>
          <div className={classes.chatWindow}></div>
        </div>
        <div className={classes.flex}></div>
      </Paper>
    </div>
  );
}
