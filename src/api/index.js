import { useEffect, useState } from "react";
import axios from "axios";

export const apiKey = process.env.REACT_APP_API_KEY;
export const BASE_URL = "https://dataservice.accuweather.com";

export const useAxios = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { response, error, loading };
};

// -------------------------------------------------------------------------------------
// useAxios for favorites page
export const useAxiosFavorites = (urls) => {
  const [resFavorites, setResFavorites] = useState([]);
  const [favError, setFavError] = useState(null);
  const [favLoading, setFavLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const promises = urls.map((url) => axios.get(url));
        const resFavorites = await Promise.all(promises);
        setResFavorites(resFavorites);
      } catch (err) {
        setFavError(err.message);
      } finally {
        setFavLoading(false);
      }
    };
    fetchFavorites();
  }, [urls]);

  return { resFavorites, favError, favLoading };
};

// ---------------------------------------------------------------------------------------------------------------------

export const ToFahrenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};
