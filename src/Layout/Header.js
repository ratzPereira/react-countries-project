import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const favouriteList = useSelector((state) => state.countryList.favorites);
  console.log(typeof favouriteList);
  console.log(favouriteList);

  const haveFav = favouriteList?.length;
  console.log(haveFav);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Welcome to County App</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/africa">Africa</Link>
          </li>
          <li>
            <Link to="/americas">Americas</Link>
          </li>
          <li>
            <Link to="/asia">Asia</Link>
          </li>
          <li>
            <Link to="/europe">Europe</Link>
          </li>
          <li>
            <Link to="/oceania">Oceania</Link>
          </li>
          {haveFav > 0 ? (
            <li>
              <Link className={classes.favorite} to="/favorite">
                Favorites
              </Link>
            </li>
          ) : (
            <div></div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
