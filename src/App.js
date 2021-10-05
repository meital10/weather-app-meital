import React, { Fragment } from "react";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Header } from './components/appbar';
import { Paper } from '@material-ui/core';
import { Home } from './components/home';
import { Favorites } from './components/favorites';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkLightTheme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })

  return (
    <ThemeProvider theme={darkLightTheme}>
      <Fragment>
        <Paper style={{ height: "120vh" }}>
          <div className="App">
            <Header check={darkMode} change={() => setDarkMode(!darkMode)} />
            <Router>
              <Switch>
                <Route path="/favorites" component={Favorites} />
                <Route path="/home" component={Home} />
                <Route path="/">
                  <Redirect to="/home" />
                </Route>
              </Switch>
            </Router>
          </div>
        </Paper>
      </Fragment>
    </ThemeProvider>

  )
}
export default App;


