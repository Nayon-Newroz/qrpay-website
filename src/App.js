import logo from "./logo.svg";
import "./App.css";
import Header from "./compoments/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./compoments/Footer";
import Navigation from "./pages/Navigation";
import Test from "./Test";

const theme = createTheme({
  typography: {
    // allVariants: {
    //   color: "#464141",
    // },

    fontFamily: ['"Poppins"', "sans-serif"].join(","),
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
      padding: "0 0 20px 0",
      // textAlign: "center",
      lineHeight: 1.5,
      "@media (max-width:1280px)": {
        fontSize: "1.75rem",
      },
      "@media (max-width:1280px)": {
        fontSize: "1.5rem",
      },
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h5: {
      // textAlign: "center",
      fontSize: "1.4rem",
      fontWeight: 600,
      marginBottom: 15,
      "@media (max-width:1280px)": {
        fontSize: "1.1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    h6: {
      // textAlign: "center",
      marginTop: 40,
      marginBottom: 40,
      fontSize: "1.25rem",
      "@media (max-width:1280px)": {
        fontSize: "1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.8125rem",
      },
    },
    subtitle1: {
      fontSize: "1.1rem",
      "@media (max-width:1280px)": {
        fontSize: "0.875rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    body1: {
      fontSize: "1.1rem",
      "@media (max-width:1280px)": {
        fontSize: "0.825rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.625rem",
      },
    },
  },
  palette: {
    primary: {
      // main: "#40739e",
      main: "#25316D",
      contrastText: "#fff",
    },
    // secondary: {
    //   main: "#8A8C90",
    // },
    error: {
      main: "#cb2027",
      contrastText: "#fff",
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Test /> */}
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            margin: "auto",
            // display: "none",
          }}
        >
          <Header />

          <Navigation />
          <Footer />
          {/* <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
