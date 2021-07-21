import classes from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { countryListActions } from "../../store/countryList-slice";

const SidebarField = (props) => {
  const favouriteList = useSelector((state) => state.countryList.favorites);
  const dispatch = useDispatch();

  const removeFromFavorite = () => {
    const countryToRemove = favouriteList.find((country) => {
      if (country.name === props.name) return country.name;
    });
    dispatch(
      countryListActions.removeFromFavorite({ name: countryToRemove.name })
    );
  };

  return (
    <div>
      <p className={classes.parag}>{props.name}</p>
      <button className={classes.button} onClick={removeFromFavorite}>
        remove
      </button>
    </div>
  );
};

export default SidebarField;
