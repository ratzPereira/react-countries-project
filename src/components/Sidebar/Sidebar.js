import classes from "./Sidebar.module.css";
import React from "react";
import { useSelector } from "react-redux";
import SidebarField from "./SidebarField";

const Sidebar = () => {
  const favouriteList = useSelector((state) => state.countryList.favorites);

  return (
    <div className={classes.sidebar}>
      {favouriteList.length !== 0 && <p>Countries that I must visit:</p>}
      {favouriteList.map((e) => (
        <SidebarField key={e} name={e} />
      ))}
    </div>
  );
};

export default Sidebar;
