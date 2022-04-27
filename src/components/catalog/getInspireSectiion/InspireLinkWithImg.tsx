import { FC } from "react";

const InspireLinkWithImg: FC<{
  contentType: string;
  title: string;
  img: any;
  spanCol?: string;
}> = ({ contentType, title, img, spanCol }) => {
  return (
    <div className={`inspireLinkWithImg ${spanCol}`}>
      <img src={img} alt="" />
      <p>{contentType}</p>
      <a href="#0">{title}</a>
    </div>
  );
};

export default InspireLinkWithImg;
