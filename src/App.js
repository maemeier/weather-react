import React from "react";
import Titles from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "d554b19eb3803ac4c50344d267a27ad5";

class App extends React.Component {
  getWeather = async () => {
    // async await
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
