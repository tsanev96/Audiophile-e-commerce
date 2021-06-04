import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes";
import "./styles/main.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
