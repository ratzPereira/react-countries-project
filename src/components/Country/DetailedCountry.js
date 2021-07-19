function DetailedCountry(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.flag} alt="" />
      <h1>Region: {props.region}</h1>
      <h2>Capital: {props.capital}</h2>
      <h3>Population: {props.population}</h3>
      <h3>Language: {props.language}</h3>
    </div>
  );
}

export default DetailedCountry;
