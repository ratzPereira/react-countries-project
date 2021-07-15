import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import SingleCountry from "./components/Country/SingleCountry";
import Header from "./Layout/Header";
import Region from "./components/Region/Region";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/africa">
          <Region region="africa">Africa</Region>
        </Route>
        <Route path="/americas">
          <Region region="americas">Americas</Region>
        </Route>
        <Route path="/asia">
          <Region region="asia">Asia</Region>
        </Route>
        <Route path="/europe">
          <Region region="europe">Europe</Region>
        </Route>
        <Route path="/oceania">
          <Region region="oceania">Oceania</Region>
        </Route>
        <Route path="/country/:name" children={<SingleCountry />} />
      </Switch>
    </>
  );
}

export default App;
