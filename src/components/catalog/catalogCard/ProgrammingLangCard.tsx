import { FC } from "react";

const ProgrammingLangCard: FC<{ title: string }> = ({ title }) => {
  return (
    <a href="#0" className="catalogCard programmingLang">
      <p>
        <span className="programmingLang-difficulty">pro</span> career path
      </p>
      <h3>{title}</h3>
      <div className="course__level">
        <div className="course__level--dot dot-fill"></div>
        <div className="course__level--dot"></div>
        <div className="course__level--difficulty">Beginner friendly</div>
      </div>
      <p className="programmingLang--job">job essentials</p>
    </a>
  );
};

export default ProgrammingLangCard;
