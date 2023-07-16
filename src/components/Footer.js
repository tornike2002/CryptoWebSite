import React, { Fragment } from "react";
import "./Footer.css";
import img1 from "../assets/footer1.png";
import img2 from "../assets/footer2.png";
import img3 from "../assets/footer3.png";
import img4 from "../assets/footer4.png";
import img5 from "../assets/footer5.png";
const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-dark text-center">
        <div className="container-helper text-center bg-dark d-flex justify-content-around align-items-center mt-5">
          <div className="footer-text_side w-50 f-15">
            <h1>Crypto Currency</h1>
            <h4>
              The purpose of this website is solely to display information
              regarding the products and services available on the Crypto.com
              App. It is not intended to offer access to any of such products
              and services. You may obtain access to such products and services
              on the Crypto.com App. Please note that the availability of the
              products and services on the Crypto.com App is subject to
              jurisdictional limitations. Crypto.com may not offer certain
              products, features and/or services on the Crypto.com App in
              certain jurisdictions due to potential or actual regulatory
              restrictions
            </h4>
          </div>
          <div className="footer-img-side d-flex flex-row w-25 flex-wrap">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img src={img1} className="footer-images" alt="img1" />
                <img src={img2} className="footer-images" alt="img2" />
                <img src={img3} className="footer-images" alt="img3" />
                <img src={img4} className="footer-images" alt="img4" />
                <img src={img5} className="footer-images" alt="img5" />
              </div>
            </div>
          </div>
          
        </div>
        <hr className="w-100" />
          <h2 className="footer-water-mark">
            Copyright © 2018 - 2023 Crypto.com. All rights reserved. Privacy
            Notice Status
          </h2>
      </footer>
    </Fragment>
  );
};

export default Footer;
