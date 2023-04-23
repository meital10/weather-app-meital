import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { FavoriteCity } from "./favoriteIcon";
import { Actions } from "../store";
import { iconNum } from "./weatherIcon";
import { useDispatch, useSelector } from "react-redux";

import { useAxiosFavorites, BASE_URL, apiKey } from "../api";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  gridCointainer: {
    padding: "80px 50px 50px 100px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    align: "center",
    justifyContent: "center",
  },
  title: {
    align: "center",
    paddingTop: "70px",
    paddingBottom: "50px",
  },
  subtitle: {
    paddingTop: "80px",
  },
});

export const Favorites = () => {
  const classes = useStyles();
  let history = useHistory();

  const dispatch = useDispatch();
  const defaultTempUnit = useSelector(
    (state) => state.dailyForecasts.defaultTempUnit
  );

  const [items, setItems] = useState([]);
  const [favUrls, setFavUrls] = useState([]);
  const favorites = useSelector((state) => state.favorites.data);

  const onClick = (payload) => {
    dispatch(Actions.CurrentCity.setCity(payload));
    history.push("/");
  };

  useEffect(() => {
    const newFavUrls = favorites.map(
      (fav) => `${BASE_URL}/currentconditions/v1/${fav.Key}?apikey=${apiKey}`
    );

    setFavUrls(newFavUrls);
  }, [favorites]);

  const { resFavorites, favError, favLoading } = useAxiosFavorites(favUrls);

  useEffect(() => {
    if (resFavorites) {
      const result = resFavorites.map((res, i) => {
        return {
          weatherText: res.data[0].WeatherText,
          weatherIcon: iconNum(res.data[0].WeatherIcon),
          celsius: res.data[0].Temperature.Metric.Value,
          fahrenheit: res.data[0].Temperature.Imperial.Value,
          name: favorites[i].Name,
          key: favorites[i].Key,
        };
      });

      setItems(result);
    }
  }, [resFavorites]);

  return (
    <Container fixed>
      <Grid container spacing={3} className={classes.gridCointainer}>
        <Grid item xs={12} className={classes.title}>
          <Typography
            component={"h4"}
            variant={"h4"}
            color={"blue"}
            align={"center"}
          >
            Your Favorite Cities
          </Typography>
        </Grid>

        {favorites ? (
          items.length > 0 ? (
            <Grid container spacing={2}>
              {items.map((favorite, i) => (
                <FavoriteCity
                  onClick={() =>
                    onClick({ Key: favorite.key, Name: favorite.name })
                  }
                  key={i}
                  {...favorite}
                  selectedUnit={defaultTempUnit}
                />
              ))}
            </Grid>
          ) : (
            <Typography>Loading...</Typography>
          )
        ) : (
          <Grid className={classes.subtitle}>
            <NoFavorites />
          </Grid>
        )}

        {favLoading && <Typography>Loading...</Typography>}
        {favError && <Typography color="error">{favError}</Typography>}
      </Grid>
    </Container>
  );
};

const NoFavorites = () => {
  return (
    <div>
      <Typography component={"h6"} variant={"h6"}>
        There are no favorite cities. Please Choose
      </Typography>
    </div>
  );
};
