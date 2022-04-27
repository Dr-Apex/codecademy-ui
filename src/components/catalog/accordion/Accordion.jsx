import React, { useRef } from "react";
import UpArrow from "../../../assets/svg/up-arrow.svg";
import DownArrow from "../../../assets/svg/down-arrow.svg";

const Accordion = ({ Links, title }) => {
  const accordionBtn = useRef(null);
  const arrowIcon = useRef(null);

  const closeAccordion = () => {
    const isVisible = accordionBtn.current.style.display !== "none";

    if (isVisible) {
      accordionBtn.current.style.display = "none";
      arrowIcon.current.src = UpArrow;
    } else {
      accordionBtn.current.style.display = "flex";
      arrowIcon.current.src = DownArrow;
    }
  };

  return (
    <>
      <button className="accordion" onClick={closeAccordion}>
        <span>{title}</span>{" "}
        <img
          src={DownArrow}
          alt="arrow icon"
          className="arrow-icon"
          ref={arrowIcon}
        />
      </button>
      <div className="panel" ref={accordionBtn}>
        {Links.map((link, index) => (
          <a href="#0" key={index}>
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Accordion;
