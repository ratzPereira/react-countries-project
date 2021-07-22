import React from "react";
import { useSelector } from "react-redux";
import FavoriteCountry from "../components/Country/FavoriteCountry";

const FavoritePage = () => {
  const favouriteList = useSelector((state) => state.countryList.favorites);
  return (
    <div>
      <h1>Your List of Countries to Visit!</h1>
      {favouriteList.map((country) => (
        <FavoriteCountry name={country} key={country} />
      ))}
    </div>
  );
};

export default FavoritePage;
