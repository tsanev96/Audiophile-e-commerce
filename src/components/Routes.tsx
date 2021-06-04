import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { NavigationContext } from "../context/navigationContext";
import { formatPathname } from "../util/formatPathname";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Headphones } from "./Headphones/Headphones";
import { Home } from "./Home/Home";

export const Routes = () => {
  const location = useLocation();
  const pathname = formatPathname(location.pathname);

  const [currentPage, setCurrentPage] = useState(
    pathname === "home" ? "" : pathname
  );

  return (
    <>
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
    </>
  );
};
