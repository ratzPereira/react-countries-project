import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavoriteCountry from "../components/Country/FavoriteCountry";
import SearchForm from "../components/SearchForm/SearchForm";

const FavoritePage = () => {
  const favouriteList = useSelector((state) => state.countryList.favorites);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(favouriteList);
  }, [favouriteList]);

  const getValueHandler = (value) => {
    setFiltered(
      favouriteList.filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };
  return (
    <div>
      <SearchForm getValue={getValueHandler} numberOfResults={filtered} />
      <h1>Your List of Countries to Visit!</h1>
      {filtered.map((country) => (
        <FavoriteCountry name={country} key={country} />
      ))}
    </div>
  );
};

export default FavoritePage;
