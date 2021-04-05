import { useEffect } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import { setLocation } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLocation);
  }, []);

  return (
    <Switch className="pl-0">
      <Route path="/work/:category" component={CategoryPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
