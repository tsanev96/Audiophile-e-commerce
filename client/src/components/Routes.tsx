import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { NavigationContext } from "../context/navigationContext";
import { formatPathname } from "../util/formatPathname";
import { Earphones } from "./Earphones/Earphones";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Headphones } from "./Headphones/Headphones";
import { Home } from "./Home/Home";
import { Product } from "./Product/Product";
import { Speakers } from "./Speakers/Speakers";

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
        <Route path="/headphones/:id" component={Product} />
        <Route path="/speakers/:id" component={Product} />
        <Route path="/earphones/:id" component={Product} />
        <Route path="/headphones" exact component={Headphones} />
        <Route path="/speakers" exact component={Speakers} />
        <Route path="/earphones" exact component={Earphones} />
      </Switch>
      <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
        <Footer />
      </NavigationContext.Provider>
    </>
  );
};
