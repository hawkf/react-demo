import React from "react";
import "./App.css";
import { MainPage } from "./main-page";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import { AppRoute } from "./const";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
