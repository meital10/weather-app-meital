import React, { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Actions } from "../store";
import { useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridCointainer: {
    alignItems: "center",
    justify: "space-between",
  },

  links: {
    marginRight: "15px",
    marginLeft: "15px",
    justifyContent: "space-between",
  },
});

export const Header = ({ check, change }) => {
  const [tempUnit, setTempUnit] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTempUnit(event.target.checked);
    dispatch(Actions.DailyForecasts.setTempUnit(tempUnit ? "C" : "F"));
  };

  const classes = useStyles();
  return (
    <Fragment>
      <Box
        sx={{ flexGrow: 1 }}
        container
        xs={12}
        className={classes.gridCointainer}
      >
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather App
            </Typography>
            <Button variant="contained" href="/home">
              Home
            </Button>
            <Button variant="contained" href="/favorites">
              Favorites
            </Button>
            <WbSunnyOutlinedIcon />
            <Switch
              color="default"
              name="switchDarkMode"
              inputProps={{ "aria-label": "dark mode" }}
              onChange={change}
              checked={check}
            />
            <Brightness2OutlinedIcon />
            C°
            <Switch
              color="default"
              name="switchUnitTemp"
              inputProps={{ "aria-label": "temp unit" }}
              checked={tempUnit}
              onChange={handleChange}
            />
            F°
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
};
