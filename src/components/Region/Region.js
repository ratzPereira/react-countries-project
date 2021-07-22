import React, { useEffect, useState } from "react";
import SingleCountry from "../Country/SingleCountry";
import classes from "./Region.module.css";
import useFetch from "../../hooks/use-fetch";
import SearchForm from "../SearchForm/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";

const Region = (props) => {
  const url = `https://restcountries.eu/rest/v2/region/${props.region}`;

  const europeCountries = useSelector(
    (state) => state.countryList.europeCountries
  );
  const asiaCountries = useSelector((state) => state.countryList.asiaCountries);

  const africaCountries = useSelector(
    (state) => state.countryList.africaCountries
  );
  const americaCountries = useSelector(
    (state) => state.countryList.americaCountries
  );
  const oceaniaCountries = useSelector(
    (state) => state.countryList.oceaniaCountries
  );

  const [filtered, setFiltered] = useState([]);

  const { error, isLoading } = useFetch(url, props.region);

  useEffect(() => {
    if (props.region === "europe") setFiltered(europeCountries);
    if (props.region === "asia") setFiltered(asiaCountries);
    if (props.region === "americas") setFiltered(americaCountries);
    if (props.region === "oceania") setFiltered(oceaniaCountries);
    if (props.region === "africa") setFiltered(africaCountries);
    props.regionHandler(props.region);
  }, [isLoading, props.region]);

  if (error) {
    alert(error.message);
  }

  const getValueHandler = (value) => {
    findCountries(value);
  };

  const findCountries = (value) => {
    if (props.region === "europe")
      setFiltered(
        europeCountries.filter((country) =>
          country.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    if (props.region === "asia")
      setFiltered(
        asiaCountries.filter((country) =>
          country.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    if (props.region === "americas")
      setFiltered(
        americaCountries.filter((country) =>
          country.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    if (props.region === "oceania")
      setFiltered(
        oceaniaCountries.filter((country) =>
          country.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    if (props.region === "africa")
      setFiltered(
        africaCountries.filter((country) =>
          country.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
  };

  return (
    <div className={classes.region}>
      <SearchForm getValue={getValueHandler} numberOfResults={filtered} />
      <h1>Existing Countries in {props.children}</h1>
      {isLoading && <div className="loading"> </div>}
      {filtered.map((country) => (
        <SingleCountry
          key={country.name}
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
