import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "30px",
    maxWidth: 200,
    height: "12rem",
    width: "9rem",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    background:
      "linear-gradient(rgba(0, 185, 195, 0.5), rgba(16, 76, 120, 0.1))",
    borderRadius: "0.5rem",
    padding: "10px",
    // border: "3px solid rgba(32, 45, 44, 0.7)",
    // boxShadow: "2px 2px 2px rgba(29, 40, 44, 0.5)",
  },
});

export const WeatherDay = ({
  weatherIcon,
  date,
  weatherDescription,
  celsius,
  fahrenheit,
  selectedUnit,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography component="h6" variant="h6">
            {dayjs(date).format("ddd")}
          </Typography>
          <img
            alt={weatherDescription}
            src={`https://developer.accuweather.com/sites/default/files/${weatherIcon}-s.png`}
          />
          <Typography>
            {selectedUnit === "C"
              ? `${celsius?.toFixed(1)}° C`
              : `${fahrenheit?.toFixed(1)}° F`}
          </Typography>
          <Typography>{weatherDescription}</Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};
