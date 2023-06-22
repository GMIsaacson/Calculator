import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
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

const Home = () => <h1>Welcome to the Home page!</h1>;
const Simple = () => <h1>This is the Simple page.</h1>;
const Scientific = () => <h1>This is the Scientific page.</h1>;

const Navigation1 = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Calculator
            </Typography>

            <Button color="inherit">
              <Link to="/simple" className={classes.link}>
                Simple
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/scientific" className={classes.link}>
                Scientific
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/scientific" element={<Scientific />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation1;
