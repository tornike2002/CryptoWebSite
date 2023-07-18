import React, { Fragment } from "react";
import "./Consultation.css";
import { Link } from "react-router-dom";
const Consultation = () => {
  return (
    <Fragment>
      <div className="consultation-main_container">
        <h1>Need an Advice?</h1>
        <p>
          If you need an expert advice from one of our consultants - we are
          ready to help you. Leave your phone number and we will call you back.
        </p>
        <Link to="/contact">
          <button>CLICK FOR CONSULTANT</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Consultation;
