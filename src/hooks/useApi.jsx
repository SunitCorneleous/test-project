import { useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = "http://pwebapi.cccul.com/api/";

  // fetch data
  const fetchData = async (options) => {
    setLoading(true);

    try {
      const response = await fetch(baseUrl + url, options);
      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  return { data, loading, error, fetchData };
};
