import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = ({ url, method = "GET", body, headers }) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URI;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const config = {
      url,
      method,
      body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Barrier ${localStorage.getItem("accessToken")}`,
        ...headers
      }
    };
    setLoading(true);
    axios(config)
      .then((response) => {
        if (response.data) {
          setData(response.data);
        }
      })
      .catch((error) => {
        setError(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [data, loading, error];
};

export { useFetch };
