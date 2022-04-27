import { FC } from "react";

const CopyWriteInfo: FC = () => {
  return (
    <div className="copyWriteInfo__Container">
      <div className="copyWriteInfo">
        <a href="#0">Privacy Policy</a> <span> | </span>
        <a href="#0">Cookie Policy</a> <span> | </span>
        <a href="#0">Do Not Sell My Personal Information</a>
        <span> | </span>
        <a href="#0">Terms</a>
      </div>
      <p className="copyWriteInfo__company">
        Made with️ ❤️ by Aayush © 2022 CodecademyUI
      </p>
    </div>
  );
};

export default CopyWriteInfo;
