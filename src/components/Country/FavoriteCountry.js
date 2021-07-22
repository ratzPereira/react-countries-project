import React from "react";
import classes from "../Sidebar/Sidebar.module.css";
import { countryListActions } from "../../store/countryList-slice";
import { useDispatch, useSelector } from "react-redux";

function FavoriteCountry(props) {
  const favouriteList = useSelector((state) => state.countryList.favorites);
  const dispatch = useDispatch();

  const removeFromFavorite = () => {
    const countryToRemove = favouriteList.find((country) => {
      console.log(country);
      console.log(props.name);
      if (country === props.name) return country;
    });
    console.log(countryToRemove);
    dispatch(countryListActions.removeFromFavorite(countryToRemove));
  };

  return (
    <ul>
      <li>{props.name}</li>
      <button className={classes.button} onClick={removeFromFavorite}>
        remove
      </button>
    </ul>
  );
}

export default FavoriteCountry;
