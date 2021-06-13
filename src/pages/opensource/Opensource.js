import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";
import EventCard from "../../components/eventCard /EventCard";
import { events } from "../../portfolio";
import TravelCard from "../../components/travelCard /TravelCard";
import { travel } from "../../portfolio";
import { Fade } from "react-reveal";

class Opensource extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <div className="main" id="educations">
          <div className="educations-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="educations-header" style={{ color: theme.text }}>
                Events
              </h1>
            </Fade>
          </div>
          <div className="educations-body-div">
            {events.events.map((degree) => {
              return <EventCard degree={degree} theme={theme} />;
            })}
          </div>
        </div>
        <div className="main" id="educations">
          <div className="educations-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="educations-header" style={{ color: theme.text }}>
                Stop Coding 👋 ..!! Explore Whole World with Abdul(🇵🇰) ✈️
              </h1>
            </Fade>
          </div>
          <br />
          <br />
          <div className="educations-body-div-travel">
            {travel.travel.map((degree) => {
              return <TravelCard degree={degree} theme={theme} />;
            })}
          </div>
        </div>
        {/* <Organizations theme={this.props.theme} />
        <OpensourceCharts theme={this.props.theme} />
        <PullRequests theme={this.props.theme} />
        <Issues theme={this.props.theme} /> */}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
