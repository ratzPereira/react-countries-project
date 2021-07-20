import classes from "./SearchForm.module.css";

const SearchForm = (props) => {
  const searchFieldInputHandler = (event) => {
    props.getValue(event.target.value);
  };

  return (
    <form className={classes.searchForm} onSubmit={(e) => e.preventDefault()}>
      <p className={classes.formText}>Search for country</p>
      <input
        id="country"
        type="text"
        onChange={searchFieldInputHandler}
        className={classes.formInput}
      />
      {props.numberOfResults.length === 0 && (
        <div className={classes.error}>Country not found</div>
      )}
    </form>
  );
};

export default SearchForm;
