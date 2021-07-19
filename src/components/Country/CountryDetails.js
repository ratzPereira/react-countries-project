import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const params = useParams();
  const url = `https://restcountries.eu/rest/v2/name/${params.name}?fullText=true`;

  return <div>Detail</div>;
};

export default CountryDetails;
