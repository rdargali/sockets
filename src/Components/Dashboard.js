import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    borderRight: "1px solid grey",
  },
  chatWindow: {
    width: "70%",
    height: "300px",
  },
  chatBox: {
    width: "90%",
    height: "25px",
    border: "1px solid grey",
  },
  button: {
    width: "10%",
    height: "25px",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root} elevation={2}>
        <Typography variant="h4" component="h4">
          Discussion Board
        </Typography>
        <Typography variant="h6" component="h6">
          Topic
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List component="nav">
              {["first", "second", "third"].map((topic) => (
                <ListItem button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}></div>
        </div>
        <div className={classes.flex}>
          <div className={classes.chatBox}></div>
          <div className={classes.button}></div>
        </div>
      </Paper>
    </div>
  );
}
