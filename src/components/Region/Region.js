import React from "react";

const Region = (props) => {
  return (
    <div>
      <h1>Existing Countries in {props.children}</h1>
    </div>
  );
};

export default Region;
