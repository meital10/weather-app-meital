import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline, Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@mui/material/Alert";

import { useAxios, BASE_URL, apiKey, ToFahrenheit } from "../api";
import { Actions } from "../store";
import { CurrentCondition } from "./currentCondition";
import { iconNum } from "./weatherIcon";
import { WeatherDay } from "./weatherDay";
import { SearchCity } from "./search";

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

  const dailyForecasts = useSelector((state) => state.dailyForecasts.data);
  const defaultTempUnit = useSelector(
    (state) => state.dailyForecasts.defaultTempUnit
  );
  const currentCity = useSelector((state) => state.currentCity.data);

  const getFiveDaysUrl = `${BASE_URL}/forecasts/v1/daily/5day/${currentCity.Key}?apikey=${apiKey}&metric=true`;
  const getCurrentConditionUrl = `${BASE_URL}/currentconditions/v1/${currentCity.Key}?apikey=${apiKey}`;

  const dispatch = useDispatch();

  const {
    response: currentCondition,
    error: currentConditionError,
    loading: currentConditionLoading,
  } = useAxios(getCurrentConditionUrl);

  const {
    response: fiveDayForecast,
    error: fiveDayForecastError,
    loading: fiveDayForecastLoading,
  } = useAxios(getFiveDaysUrl);

  useEffect(() => {
    if (currentCondition && fiveDayForecast) {
      dispatch(
        Actions.CurrentCity.setCity({
          ...currentCity,
          ...currentCondition[0],
        })
      );

      dispatch(
        Actions.DailyForecasts.setForcast(
          fiveDayForecast.DailyForecasts.map((daily) => {
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
    }
  }, [currentCondition, fiveDayForecast]);

  return (
    <Fragment>
      <CssBaseline />
      <div>
        {(currentConditionError || fiveDayForecastError) && (
          <Alert variant="filled" severity="error">
            {currentConditionError} {fiveDayForecastError}
          </Alert>
        )}
      </div>

      <Container fixed>
        <Grid container spacing={2} className={classes.gridCointainer}>
          {(currentConditionLoading || fiveDayForecastLoading) && (
            <div>Loading...</div>
          )}
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
