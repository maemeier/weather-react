import React from "react";
// import Titles from "./components/title";
import Form from "./components/form";
// import Weather from "./components/weather";

const API_KEY = "d554b19eb3803ac4c50344d267a27ad5";

class App extends React.Component {
  state = {
    temperature: 29,
    city: "Bangkok",
    country: "TH	",
    humidity: 40,
    description: "damm Hot",
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // async await
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Enter the city and county plzzzz"
      });
    }
  };
  render() {
    return (
      <div>
        <Form
          getWeather={this.getWeather}
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
