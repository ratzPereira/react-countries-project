import classes from "./SingleCountry.module.css";
import { Link } from "react-router-dom";

const SingleCountry = (props) => {
  return (
    <section className={classes.countries}>
      <div className={classes.country}>
        <h1>{props.name}</h1>
        <Link to={`/${props.name}`}>
          <img src={props.flag} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default SingleCountry;
