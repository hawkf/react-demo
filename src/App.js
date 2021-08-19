import React from "react";
import "./App.css";
import { MainPage } from "./main-page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoute } from "./const";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
