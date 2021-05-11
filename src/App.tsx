import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
