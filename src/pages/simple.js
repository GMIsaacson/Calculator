import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Box
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333333"
    }
  }
});

const SimpleCalculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleEvaluate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            value={expression}
            InputProps={{
              readOnly: true,
              sx: {
                backgroundColor: "#f1f1f1",
                borderRadius: "4px",
                padding: "8px",
                fontWeight: "bold",
                fontSize: "20px"
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {[7, 8, 9, "/"].map((number) => (
              <Grid item xs={3} key={number}>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(number.toString())}
                  fullWidth
                  sx={{ height: "60px" }}
                >
                  {number}
                </Button>
              </Grid>
            ))}
            {[4, 5, 6, "*"].map((number) => (
              <Grid item xs={3} key={number}>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(number.toString())}
                  fullWidth
                  sx={{ height: "60px" }}
                >
                  {number}
                </Button>
              </Grid>
            ))}
            {[1, 2, 3, "-"].map((number) => (
              <Grid item xs={3} key={number}>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(number.toString())}
                  fullWidth
                  sx={{ height: "60px" }}
                >
                  {number}
                </Button>
              </Grid>
            ))}
            {[0, ".", "+"].map((number) => (
              <Grid item xs={3} key={number}>
                <Button
                  variant="contained"
                  onClick={() => handleButtonClick(number.toString())}
                  fullWidth
                  sx={{ height: "60px" }}
                >
                  {number}
                </Button>
              </Grid>
            ))}
            <Grid item xs={6}>
              <Button
                variant="outlined"
                onClick={handleClear}
                fullWidth
                sx={{ height: "60px" }}
              >
                Clear
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={handleEvaluate}
                fullWidth
                sx={{
                  height: "60px",
                  backgroundColor: "#f50057",
                  color: "#fff"
                }}
              >
                =
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SimpleCalculator;
