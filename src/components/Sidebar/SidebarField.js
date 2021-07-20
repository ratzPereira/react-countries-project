import React from "react";
import { Link } from "react-router-dom";

const SidebarField = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={`/${props.name}`}>
        <p>{props.name}</p>
      </Link>
    </div>
  );
};

export default SidebarField;
