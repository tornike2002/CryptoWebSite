import React, { Fragment } from "react";
import "./TeamCards.css"
const TeamCards = (props) => {
  return (
    <Fragment>
      <div className="team-card_wraper ani-cards">
        <img src={props.images} alt="asdas" />
        <h1>{props.name}</h1>
        <h2>{props.job}</h2>
        <p>{props.info}</p>
      </div>
    </Fragment>
  );
};

export default TeamCards;
