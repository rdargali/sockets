import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
//
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    padding: "15px",
  },
  chatBox: {
    width: "85%",
    height: "25px",
  },
  button: {
    width: "15%",
    // height: "25px",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const [textValue, setTextValue] = useState("");

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
              {[1, 2, 3, 4, 5].map((topic, index) => (
                <ListItem button key={index}>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {[{ from: "user", msg: "hello", initials: "RD" }].map(
              (chat, index) => (
                <div className={classes.flex} key={index}>
                  <Chip
                    avatar={<Avatar>{chat.initials}</Avatar>}
                    variant="outlined"
                    label={chat.msg}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            className={classes.chatBox}
            id="standard-basic"
            label="send chat"
            value={textValue}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
