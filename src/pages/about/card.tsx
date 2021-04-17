import React from "react";

interface Props {
  icon?: string;
  title: React.ReactNode;
}

const Card: React.FC<Props> = (props) => (
  <div className="card skillcard">
    <h3>
      {props.icon && <img src={props.icon} className="header-icon" />}
      {props.title}
    </h3>
    {props.children}
  </div>
);

export default Card;
