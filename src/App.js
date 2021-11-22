import React, { useState } from "react";
import "./App.css";
import { MainPage } from "./main-page";
import { WelcomScreen } from "./welcom-screen";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoute } from "./const";
// import "./firebase.js";
// import { getToken } from "./firebase.js";

let elementId = "";

const elementIdChangeHandler = (id) => {
  elementId = `element_${id}`;
  console.log(elementId);
};

function App() {
  const [paramBitrixObject, setBitrixObject] = useState(null);
  // const [isTokenFound, setTokenFound] = useState(false);

  // getToken(setTokenFound);

  const paramBitrixObjectChanger = (paramObject) => {
    setBitrixObject(Object.assign({}, paramObject));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.FORM}>
          <WelcomScreen
            elementIdChangeHandler={(id) => elementIdChangeHandler(id)}
            paramBitrixObjectChanger={(paramObject) =>
              paramBitrixObjectChanger(paramObject)
            }
          />
        </Route>
        <Route exact path={AppRoute.ROOT}>
          <MainPage paramBitrixObject={paramBitrixObject} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
