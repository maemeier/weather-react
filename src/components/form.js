import React from "react";
import "./weather.css";
import icon from "./rain.png";

class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>WEATHER FINDER</h1>
        <div className="mainDiv">
          <div className="divLeft">
            <div className="divContent">
              <span className="iconPM"></span>
              <h3>Check the Weather</h3>
              <h3>Condition and more...</h3>
            </div>
          </div>

          <div className="divRight">
            <h5>Search the Weather</h5>

            <form onSubmit={this.props.getWeather}>
              <input type="text" name="city" placeholder="city..." />
              <input type="text" name="country" placeholder="country..." />
              <button className="myButton">Get Weather</button>
            </form>

            {this.props.city && this.props.country && (
              <h6>
                {this.props.city}, {this.props.country}
              </h6>
            )}
            {Math.round(this.props.temperature) && (
              <h2> {Math.round(this.props.temperature)}&deg;</h2>
            )}
            {this.props.description && (
              <h6> Fucking {this.props.description}</h6>
            )}

            {this.props.humidity && <h6>Humidity : {this.props.humidity}</h6>}
            {this.props.error && <p>{this.props.error}</p>}
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
