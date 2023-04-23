import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import { Actions } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { useAxios, BASE_URL, apiKey } from "../api";

export const LocationIcon = () => {
  const title = "Search by your location";
  const location = useSelector((state) => state.location.data);
  const hasNavigationError = useSelector(
    (state) => state.location.hasNavigationError
  );

  const dispatch = useDispatch();
  const getCurrentLocationUrl = (lat = "32.045", lon = "34.77") => {
    return `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}, ${lon}`;
  };

  const { response, error, loading } = useAxios(
    getCurrentLocationUrl(location?.latitude, location?.longitude)
  );

  const onClick = () => {
    if (hasNavigationError) {
      alert("You need to approve your location in the browser");
      return;
    }

    dispatch(
      Actions.CurrentCity.setCity({
        Name: response.LocalizedName,
        Key: response.Key,
      })
    );
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <Tooltip title={title}>
        <IconButton onClick={onClick}>
          <MyLocationIcon cursor="pointer" aria-label={title} color="primary" />
        </IconButton>
      </Tooltip>
    </div>
  );
};
