import React, { Component } from "react";
import "./TravelCard.css";
import { Fade, Flip } from "react-reveal";

class TravelCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card-travel">
        <Flip left duration={2000}>
          <div className="card-img-travel">
            <img
              style={{
                maxWidth: "100%",
                transform: "scale(50%, 50%)",
              }}
              src={require(`../../assests/images/${degree.logo_path}`)}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
        <Fade right duration={2000} distance="40px">
          <div className="body-header-title">
            <h2 className="card-title-event" style={{ color: theme.text }}>
              {degree.title}
            </h2>
          </div>
        </Fade>
      </div>
    );
  }
}

export default TravelCard;
