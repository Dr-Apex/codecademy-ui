import { FC } from "react";

const ExploreCard: FC<{ title: string; svg: any }> = ({ title, svg }) => {
  return (
    <a href="#0" className="catalogCard exploreCard">
      <img src={svg} alt="" />
      <h3>{title}</h3>
    </a>
  );
};

export default ExploreCard;
