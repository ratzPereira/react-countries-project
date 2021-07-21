import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { countryListActions } from "../store/countryList-slice";

const useFetch = (url, region) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (region === "europe")
          dispatch(countryListActions.addEuropeCountriesToList(data));
        if (region === "asia")
          dispatch(countryListActions.addAsiaCountriesToList(data));
        if (region === "africa")
          dispatch(countryListActions.addAfricaCountriesToList(data));
        if (region === "oceania")
          dispatch(countryListActions.addOceaniaCountriesToList(data));
        if (region === "americas")
          dispatch(countryListActions.addAmericaCountriesToList(data));

        setData(data);
      } catch (error) {
        alert(error.message);
        setData([]);
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, dispatch]);

  return { data, error, isLoading };
};

export default useFetch;
