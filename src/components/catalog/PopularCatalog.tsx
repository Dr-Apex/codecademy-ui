import { FC } from "react";
import CatalogCards from "./CatalogCards";

const PopularCatalog: FC = () => {
  return (
    <div className="popularCalalog">
      <h2>Most popular</h2>
      <CatalogCards />
    </div>
  );
};

export default PopularCatalog;
