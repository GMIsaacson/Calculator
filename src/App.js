import React from "react";
import Navigation2 from "./navstyledresponsive";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SimpleCalculator from "./pages/simple";

// Custom theme for calculator page
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3" // Custom primary color
    },
    secondary: {
      main: "#f50057" // Custom secondary color
    }
  },
  typography: {
    fontFamily: "Arial, sans-serif" // Custom font family
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation2 />
        <Container maxWidth="md" sx={{ marginTop: "3em" }}>
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{ fontSize: "2rem" }}
          >
            Modern Calculator
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <SimpleCalculator />
              </Paper>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              textAlign: "left",
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              borderRadius: "4px"
            }}
          >
            <Typography variant="body1" gutterBottom>
              Features of our modern calculator:
            </Typography>
            <ul>
              <li>
                Simple and scientific modes for different calculation needs
              </li>
              <li>Intuitive user interface for ease of use</li>
              <li>Responsive design that works on various devices</li>
              <li>
                Basic arithmetic operations (addition, subtraction,
                multiplication, division)
              </li>
              <li>Support for decimal numbers and parentheses</li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              textAlign: "left",
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              borderRadius: "4px"
            }}
          >
            <Typography variant="body1" gutterBottom>
              How to use our modern calculator:
            </Typography>
            <ol>
              <li>Enter your calculations using the buttons provided.</li>
              <li>Use parentheses for grouping calculations.</li>
              <li>Click the "=" button to evaluate the expression.</li>
              <li>The result will be displayed in the input field.</li>
            </ol>
          </Grid>
        </Container>
        <footer>
          <Typography variant="body2" align="center" color="textSecondary">
            © 2023 Calculator Website. All rights reserved.
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
