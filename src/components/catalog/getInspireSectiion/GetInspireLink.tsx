import { FC } from "react";

const GetInspireLink: FC<{ contentType: string; title: string }> = ({
  contentType,
  title,
}) => {
  return (
    <div className="getInspireLink">
      <p>{contentType}</p>
      <a href="#0">{title}</a>
    </div>
  );
};

export default GetInspireLink;
