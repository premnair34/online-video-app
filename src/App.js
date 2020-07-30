import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import "react-perfect-scrollbar/dist/css/styles.css"
import "./assets/index.css";
import Routes from "./Routes";
import theme from './theme';
const browserHistory = createBrowserHistory();
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}
