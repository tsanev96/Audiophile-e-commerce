import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Headphones } from "./components/Headphones/Headphones";
import { Home } from "./components/Home/Home";
import { NavigationContext } from "./context/navigationContext";
import "./styles/main.scss";

const App = () => {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <BrowserRouter>
      <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
        <Header />
      </NavigationContext.Provider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/headphones" component={Headphones} />
      </Switch>
      <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
        <Footer />
      </NavigationContext.Provider>
    </BrowserRouter>
  );
};

export default App;
