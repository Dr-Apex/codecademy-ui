import python from "../../assets/svg/catalog/python.svg";
import curriculum from "../../assets/svg/catalog/curriculum-card.svg";
import webDevelopment from "../../assets/svg/catalog/web-development.svg";
import dataScience from "../../assets/svg/catalog/data-science.svg";
import dataScientist from "../../assets/svg/catalog/dataScientist.svg";
import fullstack from "../../assets/svg/catalog/fullstack.svg";
import javascript from "../../assets/svg/catalog/javascript.svg";
import ProgrammingLangCard from "./catalogCard/ProgrammingLangCard";
import CareerPathCard from "./catalogCard/CareerPathCard";
import CourseCard from "./catalogCard/CourseCard";
import ExploreCard from "./catalogCard/ExploreCard";

const CatalogCard = () => {
  return (
    <div className="cardContainer">
      <div className="cardContainer__subgrid-1-row">
        <ExploreCard
          title={"Explore all python"}
          svg={python}
          gridRow="item-1"
        />
        <ProgrammingLangCard title={"learn html"} />
      </div>

      <CareerPathCard title={"Front-End engineer"} svg={curriculum} />

      <div className="cardContainer__subgrid-1-row">
        <CourseCard title={"Learn Javascript"} />

        <ExploreCard
          title={"Explore all web development"}
          svg={webDevelopment}
        />
      </div>
      <div className="cardContainer__subgrid-2-col">
        <ExploreCard title={"Explore all Javascript"} svg={javascript} />
        <ProgrammingLangCard title={"learn java"} />

        <div className="cardContainer__subgrid-2-col">
          <div className="cardContainer__subgrid-1-row">
            <ExploreCard title={"Explore all Data science"} svg={dataScience} />{" "}
            <ProgrammingLangCard title={"learn python 3"} />
          </div>

          <CareerPathCard title={"Full-Stack engineer"} svg={fullstack} />
        </div>
      </div>

      <div className="cardContainer__subgrid-1-row">
        <CareerPathCard title={"Data Scientist"} svg={dataScientist} />
        <CourseCard title={"Welcome to Codecademy"} />
      </div>
    </div>
  );
};

export default CatalogCard;
