import React, { Fragment, useEffect, useState } from "react";
import { WeatherDay } from "./weatherDay";
import { Actions } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { SearchCity } from "./search";
import { CssBaseline, Grid, Container, Typography } from "@material-ui/core";
import { CurrentCondition } from "./currentCondition";
import { iconNum } from "./weatherIcon";
import { makeStyles } from "@material-ui/core/styles";
// import useMediaQuery from '@mui/material/useMediaQuery';
import Alert from "@mui/material/Alert";
import { getFiveDaysUrl, getCurrentConditionUrl, ToFahrenheit } from "../api";
import axios from "axios";

const useStyles = makeStyles({
  gridCointainer: {
    padding: "80px 50px 50px 100px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    align: "center",
    justifyContent: "center",
    margin: "0",
  },

  weatherGrid: {
    alignItems: "center",
    border: "1px solid rgba(173, 173, 235)",
    boxShadow: "2px 2px 2px rgba(27, 38, 44, 0.5)",
    marginRight: "20px",
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "20px",
  },

  title: {
    textAlign: "center",
    color: "rgb(0,76,153)",
    paddingTop: "15px",
    marginButtom: "15px",
  },
});

export const Home = () => {
  const classes = useStyles();
  // const matches = useMediaQuery('(min-width:600px)');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const dailyForecasts = useSelector((state) => state.dailyForecasts.data);
  const defaultTempUnit = useSelector(
    (state) => state.dailyForecasts.defaultTempUnit
  );
  const currentCity = useSelector((state) => state.currentCity.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(getFiveDaysUrl(currentCity.Key))
      .then((res) => {
        setIsPending(false);
        setError(null);

        dispatch(
          Actions.DailyForecasts.setForcast(
            res.data.DailyForecasts.map((daily) => {
              return {
                date: daily.Date,
                weatherIcon: iconNum(daily.Day.Icon),
                weatherDescription: daily.Day.IconPhrase,
                celsius: daily.Temperature.Maximum.Value,
                fahrenheit: ToFahrenheit(daily.Temperature.Maximum.Value),
              };
            })
          )
        );
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    axios
      .get(getCurrentConditionUrl(currentCity.Key))
      .then((res) => {
        const data = {
          weatherText: res.data[0].WeatherText,
          weatherIcon: iconNum(res.data[0].WeatherIcon),
          celsius: res.data[0].Temperature.Metric.Value,
          fahrenheit: res.data[0].Temperature.Imperial.Value,
        };
        dispatch(Actions.CurrentCity.setCity(res.data[0]));
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [currentCity.Key]);

  return (
    <Fragment>
      <CssBaseline />
      <div>
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
      </div>

      <Container fixed>
        <Grid container spacing={2} className={classes.gridCointainer}>
          {isPending && <div>Loading...</div>}
          <Grid item xs={12}>
            <SearchCity />
          </Grid>

          <Grid item xs={12} className={classes.weatherGrid}>
            <Grid item>
              <CurrentCondition selectedUnit={defaultTempUnit} />
            </Grid>

            <Grid className={classes.title}>
              <Typography component="h5" variant="h4" color="primary">
                Five Days Forcast
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              {dailyForecasts.map((dailyForecast, i) => (
                <WeatherDay
                  key={i}
                  {...dailyForecast}
                  selectedUnit={defaultTempUnit}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};
