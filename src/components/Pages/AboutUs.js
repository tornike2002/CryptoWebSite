import React from "react";
import "./AboutUs.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import WhyChoosUs from "../UI/WhyChoosUs";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";
import about5 from "../../assets/about5.png";
import about6 from "../../assets/about6.png";

const AboutUs = (props) => {
  return (
    <div className="bgg-c">
      <NavBar />
      <div className="about-us_container container-fluid">
        <div className="about-us_text container d-flex flex-column justify-content-center ">
          <h1>About us</h1>
          <p className="w-50">
            We are here because we are passionate about open, transparent
            markets and aim to be a major driving force in widespread adoption.
          </p>
        </div>
      </div>

      <div className="about-usinfo_container container">
        <section className="mt-5">
          <h1 className=" tt-c">The Future Is Digital</h1>
          <h4 className=" w-75 pp-c">
            Our company is the best way to access the global financial markets
            of the future. Businesses small and large rely on our data to power
            their decision-making.
          </h4>
          <p className=" w-75 pp-c">
            We are a group of dedicated developers, traders, analysts and
            evangelists that believe in the upcoming paradigm shift that
            cryptography and the blockchain are bringing to the global financial
            industry.
          </p>
        </section>
        <section className="mt-5 mb-5">
          <h1 className=" tt-c">Why Choose Us</h1>
          <p className=" w-75 pp-c">
            We believe everyone should be part of the financial revolution. It’s
            time to combine cryptocurrency with traditional currencies in our
            daily finances.
          </p>
        </section>
        <section>
          <div className="why-choose_container">
            <div className="row d-flex flex-wrap gap-3">
              <div className="col-xl-3 col-md-4">
                <WhyChoosUs
                  img={about1}
                  title="Safe & Secure"
                  text="Be sure in your account security and your fund`s safety."
                />
              </div>
              <div className="col-xl-3 col-md-4">
                <WhyChoosUs
                  img={about2}
                  title="Mobile Apps"
                  text="Perfectly developed mobile apps will open you new opportunities."
                />
              </div>
              <div className="col-xl-3 col-md-4">
                <WhyChoosUs
                  img={about3}
                  title="Wallet"
                  text="Easy-to-use personal wallet will keep your bitcoins safe."
                />
              </div>
              <div className="col-xl-3 col-md-4">
                <WhyChoosUs
                  img={about4}
                  title="Experts Support"
                  text="Highly professional support will answer all your questions regarding bitcoins."
                />
              </div>
              <div className="col-xl-3 col-md-4">
                <WhyChoosUs
                  img={about5}
                  title="Instant Exchange"
                  text="Perfectly developed mobile apps will open you new opportunities."
                />
              </div>
              <div className="col-xl-4 col-md-4">
                <WhyChoosUs
                  img={about6}
                  title="Recuring Buys"
                  text="The recurring transaction feature allows you to schedule future . . ."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
