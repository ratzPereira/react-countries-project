import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
