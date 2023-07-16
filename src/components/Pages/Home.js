import React, { Fragment } from "react";
import NavBar from "../NavBar";
import "./Home.css";
import CryptoList from "../home-components/CryptoList";

import Consultation from "../home-components/Consultation";
import TeamCards from "../UI/TeamCards";
import team1 from "../../assets/chalvez.jpg";
import team2 from "../../assets/harding.jpg";
import team3 from "../../assets/mike.jpg";
import team4 from "../../assets/kyle.jpg";
import TrackerYears from "../home-components/TrackerYears";
import Footer from "../Footer";

const Home = (props) => {
  return (
    <Fragment>
      <div className="container-fluid home-wraper p-0 m-0">
        <div className="home-main_container">
          <NavBar />
          <div className="home-text_container container">
            <div className="home-text_flex">
              <h1>Welcome to the New {<br />}Age of Cryptocurrencies</h1>
              <p>
                Obtaining bitcoins works just like obtaining any other currency.
                You can buy and {<br />} sell them, and that is the future.
              </p>
              <button type="button">READ MORE</button>
            </div>
          </div>
        </div>
        <div className="home-crypto_container">
          <CryptoList />
        </div>

        <div className="consultation-container">
          <Consultation />
        </div>
        <div className="team-main_container">
          <TeamCards images={team1} name="Alice Chavez" job="Consultant" />
          <TeamCards images={team2} name="Timothy Harding" job="CEO" />
          <TeamCards images={team3} name="Mike Williams" job="COO" />
          <TeamCards images={team4} name="Kyle Rogers" job="Investor" />
        </div>
        <div className="tracker-year_container">
          <TrackerYears years="10" yearsTrack="Years on the market" />
          <TrackerYears years="35" yearsTrack="Cryptocurrencies supported" />
          <TrackerYears years="2413" yearsTrack="Active accounts" />
          <TrackerYears years="8123" yearsTrack="Monthly transactions" />
        </div>
        {/* footer here */}
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
