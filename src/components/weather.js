import React from "react";
import "./weather.css";

class Weather extends React.Component {
  render() {
    return (
      <div className="weatherDiv">
        <h6>Weather Component</h6>
        {this.props.city && this.props.country && (
          <p>
            Location : {this.props.city}, {this.props.country}
          </p>
        )}

        {this.props.temperature && (
          <p>Temperature : {this.props.temperature} </p>
        )}

        {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
        {this.props.description && (
          <p>Description : {this.props.description}</p>
        )}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}
export default Weather;
