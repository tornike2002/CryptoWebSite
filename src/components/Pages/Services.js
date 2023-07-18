import React, { Fragment } from "react";
import "./Services.css";
import NavBar from "../NavBar";
import service1 from "../../assets/servicebg.jpg"
import servicechart from "../../assets/servicechart.jpg";
import Footer from "../Footer";
const Services = () => {
  return (
    <Fragment>
      <section className="bgg-c">
        <NavBar />
        <div className="service-main-container mt-2">
          <div className="service-text_wrapper container d-flex flex-column justify-content-center">
            <h1 className="tt-c">Services</h1>
            <p className="pp-c">
              We provide personalized, premium trading and consulting services
              to our clients.
            </p>
          </div>
        </div>
        <section className="container">
          <div className="service-text_center d-flex flex-column gap-5  justify-content-center mt-5">
            <h1 className="tt-c">
              Best Services for the Next generation of{<br />} Blockchain
              Cryptocurrencies
            </h1>
            <h3 className="tt-c serv-font w-75">
              Marketing is fundamental. Our services and extensive
              cryptocurrency social network provide the visibility your project
              needs to thrive. We provide social media marketing, global
              outreach, and other services to connect you best with customers.
            </h3>
            <p className="pp-c w-75">
              Diversification of asset types has never been so integral to one's
              portfolio. Aside from financial security, cryptocurrency can make
              assets liquid, and allow you to earn from it at the same time.
            </p>
            <ul className="p-0">
              <li className="d-flex gap-3 align-items-center pp-c">
                <i className="fa-solid fa-check fa-fade text-danger"></i>
                Crowdsales And Tokenization
              </li>
              <li className="d-flex gap-3 align-items-center pp-c">
                <i className="fa-solid fa-check fa-fade text-danger"></i>Smart
                Contract Consulting
              </li>
              <li className="d-flex gap-3 align-items-center pp-c">
                <i className="fa-solid fa-check fa-fade text-danger"></i>Digital
                Community Development
              </li>
              <li className="d-flex gap-3 align-items-center pp-c">
                <i className="fa-solid fa-check fa-fade text-danger"></i>
                Cryptocurrency And Blockchain Integrations
              </li>

              <div className="services-middle-pic d-flex flex-column gap-3 mt-4">
                <img className="mw-100" src={service1} alt="serv1" />
                <p className="pp-c w-75">
                  Blockchains and cryptocurrencies are quickly becoming the
                  bedrock of sustainable communities. One can create a local
                  currency to represent the value of a community's shared energy
                  and needs. We analyze business needs to develop smart contract
                  structures to decentralize financial transactions and service
                  agreements.
                </p>
              </div>
              <div className="services-chart-pic d-flex flex-column gap-3 mb-5 mt-5" >
                <img className="w-75 mw-100" src={servicechart} alt="servicechart" />
                <p className="pp-c ">
                  The blockchain has far-reaching implications for the structure
                  of societies being built today. There is also potential to
                  shift how data is stored and moved. There are many ways to
                  integrate blockchains and cryptocurrencies into your business
                  process or application. Get a head start on the new economy by
                  defining and implementing your strategy today.
                </p>
              </div>
            </ul>
          </div>
        </section>
        <Footer />
      </section>
    </Fragment>
  );
};

export default Services;
