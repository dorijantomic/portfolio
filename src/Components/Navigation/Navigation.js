import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const navigationStyles = theme => ({
  toolbar: {
    display: "flex",
    justifyContent: "flex-start"
  },
  typography: {
    marginRight: "1%",
    textDecoration: "none",
    color: "inherit",
    [theme.breakpoints.down("xs")]: {
      marginRight: "5%"
    }
  }
});

const Navigation = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Link className={classes.typography}>
            {" "}
            <Typography>Home</Typography>
          </Link>
          <Link className={classes.typography}>
            {" "}
            <Typography>Projects</Typography>
          </Link>
          <Link className={classes.typography} to='/about'>
            {" "}
            <Typography>About</Typography>
          </Link>
          <Link className={classes.typography}>
            {" "}
            <Typography>Github</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(navigationStyles)(Navigation);
