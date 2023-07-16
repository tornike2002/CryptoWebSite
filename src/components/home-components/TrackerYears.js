import React, { Fragment } from "react";
import "./TrackerYears.css";
const TrackerYears = (props) => {
  return (
    <Fragment>
      <div className="tracker-container">
        <h1>{props.years}</h1>
        <p>{props.yearsTrack}</p>
      </div>
    </Fragment>
  );
};

export default TrackerYears;
