import { createSlice } from "@reduxjs/toolkit";

const initialCountryListState = {
  countries: [],
  searchedCountries: [],
};

const countryListSlice = createSlice({
  name: "countryList",
  initialState: initialCountryListState,
  reducers: {
    addMoviesToList(state, action) {
      state.countries = action.payload;
    },
    searchFieldValue(state, action) {
      state.searchedCountries = action.payload;
    },
  },
});

export const countryListActions = countryListSlice.actions;
export default countryListSlice.reducer;
