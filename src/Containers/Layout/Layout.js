import React, { Component } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import DorijanCard from "../../Components/DorijanCard/DorijanCard";
import { HashRouter, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans"
  }
});
export default class Layout extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <ThemeProvider theme={theme}>
            
          </ThemeProvider>
        </HashRouter>
      </div>
    );
  }
}
