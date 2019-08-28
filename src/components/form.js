import React from "react";
import "./weather.css";

class Form extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="titleDiv">
          <h1> Weather Finder</h1>

          <p> Find out temperature, condition and more </p>
        </div>
        <div className="formDiv">
          <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="city..." />
            <input type="text" name="country" placeholder="country..." />
            <button>Get Weather</button>
          </form>

          <h6>Weather Component</h6>
          {this.props.city && this.props.country && (
            <p>
              Location : {this.props.city}, {this.props.country}
            </p>
          )}

          {this.props.temperature && (
            <p>Temperature : {this.props.temperature}</p>
          )}

          {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
          {this.props.description && (
            <p>Description : {this.props.description}</p>
          )}
          {this.props.error && <p>{this.props.error}</p>}
        </div>
      </div>
    );
  }
}
export default Form;
