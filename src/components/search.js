import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { TextField, Autocomplete } from "@mui/material";
import { debounce } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { Actions } from "../store";
import { useAxios, BASE_URL, apiKey } from "../api";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
});

export const SearchCity = () => {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const getAutocompleteUrl = `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${search}`;

  const { response } = useAxios(getAutocompleteUrl);

  const dispatch = useDispatch();

  const onChange = (event, value) => {
    if (!value || !value.Key) return;
    dispatch(
      Actions.CurrentCity.setCity({ Key: value.Key, Name: value.LocalizedName })
    );
  };

  const inputChanged = async (event) => {
    const q = event.target.value;
    if (!q) return;
    setSearch(q);
  };
  const debouncedOnChange = debounce(inputChanged, 1000);

  return (
    <div className={classes.container}>
      <Fragment>
        <Autocomplete
          filterOptions={(x) => x}
          onChange={onChange}
          onInputChange={debouncedOnChange}
          id="combo-box-demo"
          options={response ? response : []}
          sx={{ width: 350 }}
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                variant="outlined"
                label="Search Location"
              />
            );
          }}
          getOptionLabel={(option) => {
            return `${option.Country.LocalizedName}, ${option.Country.ID}`;
          }}
          renderOption={(props, option) => {
            return (
              <h4
                {...props}
                key={option.Key}
              >{`${option.LocalizedName}, ${option.Country.LocalizedName}`}</h4>
            );
          }}
        />
      </Fragment>
    </div>
  );
};
