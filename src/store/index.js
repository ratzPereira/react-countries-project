import { configureStore } from "@reduxjs/toolkit";
import countryListReducer from "./countryList-slice";

const store = configureStore({
  reducer: { countryList: countryListReducer },
});
export default store;
