import { useParams, useHistory } from "react-router-dom";
import DetailedCountry from "./DetailedCountry";
import classes from "./CountryDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { countryListActions } from "../../store/countryList-slice";
import { useEffect, useState } from "react";

const CountryDetails = (props) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const favouriteList = useSelector((state) => state.countryList.favorites);

  const europeCountries = useSelector(
    (state) => state.countryList.europeCountries
  );
  const asiaCountries = useSelector((state) => state.countryList.asiaCountries);

  const africaCountries = useSelector(
    (state) => state.countryList.africaCountries
  );
  const americaCountries = useSelector(
    (state) => state.countryList.americaCountries
  );
  const oceaniaCountries = useSelector(
    (state) => state.countryList.oceaniaCountries
  );
  const [regionCountries, setRegionCountries] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    checkIfAlreadyInFavList();
    if (props.region === "europe")
      setRegionCountries(
        europeCountries.find((country) => country.name === params.name)
      );
    if (props.region === "asia")
      setRegionCountries(
        asiaCountries.find((country) => country.name === params.name)
      );
    if (props.region === "americas")
      setRegionCountries(
        americaCountries.find((country) => country.name === params.name)
      );
    if (props.region === "oceania")
      setRegionCountries(
        oceaniaCountries.find((country) => country.name === params.name)
      );
    if (props.region === "africa")
      setRegionCountries(
        africaCountries.find((country) => country.name === params.name)
      );
  }, [props.region, clicked]);

  const backToHomeHandler = () => {
    history.goBack();
  };

  const checkIfAlreadyInFavList = () => {
    setClicked(
      favouriteList.find((country) => country === regionCountries.name)
    );
  };

  const addToFavourite = () => {
    setClicked(true);
    dispatch(countryListActions.addToFavorite({ name: regionCountries.name }));
  };

  return (
    <>
      <div>
        {
          <DetailedCountry
            key={regionCountries.name}
            name={regionCountries.name}
            flag={regionCountries.flag}
            capital={regionCountries.capital}
            region={regionCountries.region}
            population={regionCountries.population}
          />
        }
      </div>
      {!clicked && (
        <button className={classes.button} onClick={addToFavourite}>
          Add to Fav
        </button>
      )}
      <button className={classes.button} onClick={backToHomeHandler}>
        back
      </button>
    </>
  );
};

export default CountryDetails;
