import React from "react";
import "./WhyChooseUs.css";
const WhyChoosUs = (props) => {
  return (
    <div className="d-flex gap-2 why-animation align-items-start">
      <img className="why-img" src={props.img} alt="img1" />
      <div className="why-helper d-flex flex-column gap-2">
        <h2 className="tt-c">{props.title}</h2>
        <p className="w-75 pp-c">{props.text}</p>
      </div>
    </div>
  );
};

export default WhyChoosUs;
