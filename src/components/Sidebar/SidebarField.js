import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const SidebarField = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={`/${props.name}`}>
        <p className={classes.parag}>{props.name}</p>
      </Link>
      <button className={classes.button}>remove</button>
    </div>
  );
};

export default SidebarField;
