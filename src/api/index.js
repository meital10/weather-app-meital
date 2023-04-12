const apiKey = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://dataservice.accuweather.com";

export const getFiveDaysUrl = (locationKey = "215854") => {
  return `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`;
};

export const getAutocompleteUrl = (q = "Tel Aviv") => {
  return `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${q}`;
};

export const getCurrentConditionUrl = (locationKey = "215854") => {
  return `${BASE_URL}/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
};

export const getCurrentLocationUrl = (lat = "32.045", lon = "34.77") => {
  return `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}, ${lon}`;
};

// ---------------------------------------------------------------------------------------------------------------------

export const ToFahrenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};
