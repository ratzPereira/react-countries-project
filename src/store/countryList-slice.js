import { createSlice } from "@reduxjs/toolkit";

const initialCountryListState = {
  africaCountries: [],
  americaCountries: [],
  asiaCountries: [],
  oceaniaCountries: [],
  europeCountries: [],
  favorites: [],
};

const countryListSlice = createSlice({
  name: "countryList",
  initialState: initialCountryListState,
  reducers: {
    addEuropeCountriesToList(state, action) {
      state.europeCountries = action.payload;
    },
    addAsiaCountriesToList(state, action) {
      state.asiaCountries = action.payload;
    },
    addAfricaCountriesToList(state, action) {
      state.africaCountries = action.payload;
    },
    addOceaniaCountriesToList(state, action) {
      state.oceaniaCountries = action.payload;
    },
    addAmericaCountriesToList(state, action) {
      state.americaCountries = action.payload;
    },
    addToFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorite(state, action) {
      state.favorites.map((country, index) => {
        console.log(country.name + action.payload.name);
        if (country.name === action.payload.name) {
          state.favorites.splice(index, 1);
        }
      });
    },
  },
});

export const countryListActions = countryListSlice.actions;
export default countryListSlice.reducer;
