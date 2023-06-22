import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

const Navigation2 = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint as needed

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Calculator.Ai
            </Typography>

            {isSmallScreen ? (
              <Button color="inherit">
                <Link to="/simple" className={classes.link}>
                  Simple
                </Link>
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/simple"
                className={classes.link}
              >
                Simple
              </Button>
            )}

            {isSmallScreen ? (
              <Button color="inherit">
                <Link to="/scientific" className={classes.link}>
                  Scientific
                </Link>
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/scientific"
                className={classes.link}
              >
                Scientific
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </BrowserRouter>
  );
};

export default Navigation2;
