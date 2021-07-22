import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import SingleCountry from "./components/Country/SingleCountry";
import Header from "./Layout/Header";
import Region from "./components/Region/Region";
import CountryDetails from "./components/Country/CountryDetails";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import FavoritePage from "./pages/FavoritePage";

function App() {
  const [region, setRegion] = useState();

  const getCurrentRegion = (region) => {
    setRegion(region);
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/favorite" exact>
          <FavoritePage />
        </Route>
        <Route path="/africa">
          <Region region="africa" regionHandler={getCurrentRegion}>
            Africa
          </Region>
        </Route>
        <Route path="/americas">
          <Region region="americas" regionHandler={getCurrentRegion}>
            Americas
          </Region>
        </Route>
        <Route path="/asia">
          <Region region="asia" regionHandler={getCurrentRegion}>
            Asia
          </Region>
        </Route>
        <Route path="/europe">
          <Region region="europe" regionHandler={getCurrentRegion}>
            Europe
          </Region>
        </Route>
        <Route path="/oceania">
          <Region region="oceania" regionHandler={getCurrentRegion}>
            Oceania
          </Region>
        </Route>
        <Route path="/:name" children={<SingleCountry />}>
          <CountryDetails region={region} />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
