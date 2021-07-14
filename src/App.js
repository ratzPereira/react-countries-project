import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import SingleCountry from "./components/Country/SingleCountry";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/country/:name" children={<SingleCountry />} />
    </Switch>
  );
}

export default App;
