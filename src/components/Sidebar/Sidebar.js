import classes from "./Sidebar.module.css";
import React from "react";
import { useSelector } from "react-redux";
import SidebarField from "./SidebarField";

const Sidebar = () => {
  const favouriteList = useSelector((state) => state.countryList.favourites);

  console.log(favouriteList);

  return (
    <div className={classes.sidebar}>
      {favouriteList.map((e) => (
        <SidebarField name={e[0].name} />
      ))}
    </div>
  );
};

export default Sidebar;
