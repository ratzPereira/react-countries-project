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

  const countries = useSelector((state) => state.countryList.countries);

  const [filtered, setFiltered] = useState([]);

  const { data, error, isLoading } = useFetch(url);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryListActions.addMoviesToList(data));
    setFiltered(data);
  }, [data]);

  if (error) {
    alert(error.message);
  }

  const getValueHandler = (value) => {
    console.log("The value is " + value);
    findCountries(value);
  };

  const findCountries = (value) => {
    setFiltered(
      countries.filter((country) =>
        country.name.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };
  console.log(countries);
  return (
    <div className={classes.region}>
      <SearchForm getValue={getValueHandler} numberOfResults={filtered} />
      <Sidebar />
      <h1>Existing Countries in {props.children}</h1>
      {isLoading && <div className="loading"> </div>}
      {filtered.map((country) => (
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
