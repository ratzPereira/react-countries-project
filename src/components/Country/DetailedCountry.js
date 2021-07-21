import classes from "./DetailedCountry.module.css";

function DetailedCountry(props) {
  return (
    <section className={classes.country}>
      <h1>{props.name}</h1>
      <img src={props.flag} alt="" />
      <h1>Region: {props.region}</h1>
      <h2>Capital: {props.capital}</h2>
      <h3>Population: {props.population}</h3>
    </section>
  );
}

export default DetailedCountry;
