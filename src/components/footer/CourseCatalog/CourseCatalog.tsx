import { FC } from "react";

const CourseCatalog: FC = () => {
  return (
    <div className="courseContainer__outer">
      <h3>COURSE CATALOG</h3>
      <div className="courseContainer__inner">
        <div className="footerItems">
          <h3 className="footerItems__title">Languages</h3>
          <div className="footerItems__items courseItems">
            <a href="0">HTML & CSS</a>
            <a href="0">Python</a>
            <a href="0">JavaScript</a>
            <a href="0">Java</a>
            <a href="0">SQL</a>
            <a href="0">Bash/Shell</a>
            <a href="0">Ruby</a>
            <a href="0">C++</a>
            <a href="0">R</a>
            <a href="0">C0</a>
            <a href="0">PHP</a>
            <a href="0">Go</a>
            <a href="0">Swift</a>
            <a href="0">Kotlin</a>
          </div>
        </div>
        <div className="footerItems">
          <h3 className="footerItems__title">Subjects</h3>
          <div className="footerItems__items courseItems">
            <a href="0">Web Development</a>
            <a href="0">Data Science</a>
            <a href="0">Computer Science</a>
            <a href="0">Developer Tools</a>
            <a href="0">Machine Learning</a>
            <a href="0">Code Foundations</a>
            <a href="0">Web design </a>
            <a href="0">Full Catalog</a>
            <a href="0">Beta Content Roadmap</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
