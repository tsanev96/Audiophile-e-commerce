import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Headphones } from "./components/Headphones/Headphones";
import { Home } from "./components/Home/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/headphones" component={Headphones} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
