import { createSlice } from "@reduxjs/toolkit";

const initialCountryListState = {
  countries: [],
  favourites: [],
};

const countryListSlice = createSlice({
  name: "countryList",
  initialState: initialCountryListState,
  reducers: {
    addMoviesToList(state, action) {
      state.countries = action.payload;
    },
    addToFavorite(state, action) {
      state.favourites.push(action.payload);
    },
    removeFromFavorite(state, action) {
      state.favourites.slice(action.payload);
    },
  },
});

export const countryListActions = countryListSlice.actions;
export default countryListSlice.reducer;
