import classes from "./SearchForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { countryListActions } from "../../store/countryList-slice";

const SearchForm = () => {
  const countries = useSelector((state) => state.countryList.countries);
  const filteredCountries = useSelector(
    (state) => state.countryList.searchedCountries
  );
  const [valueInput, setValueInput] = useState("");

  const dispatch = useDispatch();

  const searchFieldInputHandler = (event) => {
    setValueInput(event.target.value);
    findCountries(valueInput);
  };

  const findCountries = (value) => {
    const filteredCountriesList = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(countryListActions.searchFieldValue(filteredCountriesList));
  };

  useEffect(() => {
    findCountries(valueInput);
  }, [valueInput]);

  return (
    <form className={classes.searchForm} onSubmit={(e) => e.preventDefault()}>
      <p className={classes.formText}>Search for country</p>
      <input
        id="country"
        type="text"
        onChange={searchFieldInputHandler}
        className={classes.formInput}
      />
      {filteredCountries.length === 0 && (
        <div className={classes.error}>Country not found</div>
      )}
    </form>
  );
};

export default SearchForm;