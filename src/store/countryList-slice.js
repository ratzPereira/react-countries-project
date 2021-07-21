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
      if (state.favorites.length === 0) {
        state.favorites.push(action.payload.name);
      } else {
        const alreadyExist = state.favorites.find(
          (country) => country === action.payload.name
        );
        if (!alreadyExist) state.favorites.push(action.payload.name);
      }
    },
    removeFromFavorite(state, action) {
      state.favorites.map((country, index) => {
        if (country === action.payload) {
          state.favorites.splice(index, 1);
        }
      });
    },
  },
});

export const countryListActions = countryListSlice.actions;
export default countryListSlice.reducer;
