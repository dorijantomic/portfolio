import React from "react";
import { Container, withStyles, Typography, Slide } from "@material-ui/core";

const introStyles = theme => ({
  intro: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
});

const Intro = ({ classes }) => {
  return (
    <div className={classes.intro}>
      <Slide in={true} mountOnEnter unmountOnExit>
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Dorijan Tomić
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Thank You for taking the time to view my portfolio. You can see some
            of the projects that I used throughout my web development journey
            below this
          </Typography>
        </Container>
      </Slide>
    </div>
  );
};

export default withStyles(introStyles)(Intro);
