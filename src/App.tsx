import { FC } from "react";
import "./App.scss";
import NavBar from "./components/header/NavBar";
import Catalog from "./components/catalog/Catalog";

const App: FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Catalog />
    </div>
  );
};

export default App;
