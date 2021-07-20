import React, { useEffect, useState } from "react";
import SingleCountry from "../Country/SingleCountry";
import classes from "./Region.module.css";
import useFetch from "../../hooks/use-fetch";
import SearchForm from "../SearchForm/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { countryListActions } from "../../store/countryList-slice";
import Sidebar from "../Sidebar/Sidebar";

const Region = (props) => {
  const url = `https://restcountries.eu/rest/v2/region/${props.region}`;

  const filteredCountries = useSelector(
    (state) => state.countryList.searchedCountries
  );

  const { data, error, isLoading } = useFetch(url);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryListActions.addMoviesToList(data));
    dispatch(countryListActions.searchFieldValue(data));
  }, [data]);

  if (error) {
    alert(error.message);
  }

  return (
    <div className={classes.region}>
      <SearchForm />
      <Sidebar />
      <h1>Existing Countries in {props.children}</h1>
      {isLoading && <div className="loading"> </div>}
      {filteredCountries.map((country) => (
        <SingleCountry
          name={country.name}
          flag={country.flag}
          capital={country.capital}
          region={props.region}
        />
      ))}
    </div>
  );
};

export default Region;
