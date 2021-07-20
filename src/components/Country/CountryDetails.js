import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import DetailedCountry from "./DetailedCountry";
import useFetch from "../../hooks/use-fetch";
import classes from "./CountryDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { countryListActions } from "../../store/countryList-slice";

const CountryDetails = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const url = `https://restcountries.eu/rest/v2/name/${params.name}?fullText=true`;

  const { data, error, isLoading } = useFetch(url);

  const favouriteList = useSelector((state) => state.countryList.favourites);

  if (error) {
    alert(error.message);
    return;
  }

  const backToHomeHandler = () => {
    history.replace("/");
  };

  const addToFavourite = () => {
    dispatch(countryListActions.addToFavorite(data));
  };

  return (
    <>
      <div>
        {isLoading && <div className="loading"> </div>}
        {data.map((country) => (
          <DetailedCountry
            name={country.name}
            flag={country.flag}
            capital={country.capital}
            region={country.region}
            population={country.population}
            language={country.languages[0].name}
          />
        ))}
      </div>
      <button className={classes.button} onClick={addToFavourite}>
        Add to Fav
      </button>
      <button className={classes.button} onClick={backToHomeHandler}>
        back
      </button>
    </>
  );
};

export default CountryDetails;
