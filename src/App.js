import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Header } from "./components/appbar";
import { Paper } from "@material-ui/core";
import { Home } from "./components/home";
import { Favorites } from "./components/favorites";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "./store";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const favorites = useSelector((state) => state.favorites.data);
  const dispatch = useDispatch();
  // if (process.env.NODE_ENV === "production") {
  //   console.log("App running in production mode");
  // }
  const onSuccess = (currentLocation) => {
    dispatch(
      Actions.CurrentLocation.setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      })
    );
  };

  const onError = (error) => {
    dispatch(Actions.CurrentLocation.setNavigationError(true));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const darkLightTheme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkLightTheme}>
      <Fragment>
        <Paper className="paper">
          <div className="App">
            <Router>
              <Header check={darkMode} change={() => setDarkMode(!darkMode)} />

              <Switch>
                <Route path="/favorites" component={Favorites} />
                <Route path="/" component={Home} />
              </Switch>
            </Router>
          </div>
        </Paper>
      </Fragment>
    </ThemeProvider>
  );
}
export default App;
