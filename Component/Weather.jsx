import React from "react";

const Weather = () => {
  const [MyCity, setCity] = React.useState("");
  const [Mydata, setData] = React.useState([]);

  const handleInput = (MyCity) => {
    // console.log("Input changed", city.target.value);

    setCity(MyCity.target.value);

    console.log("City", MyCity.target.value);
  };

  const fatchWeather = async () => {
    try {
      // Example: Fetch weather data from an API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${MyCity}&appid=${"425ac2887910de81b1ef5dd3730849dc"}`
      );
      const data = await response.json();
      // Log the fetched data
      // Update the state with the fetched data

      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Weather-container">
      <div className="Weather-input">
        <input
          className="Weather"
          type="search"
          onChange={(e) => handleInput(e)}
          placeholder="Enter City.."
        />
        <button
          type="button"
          class="btn btn-info"
          onClick={() => fatchWeather()}
        >
          Search
        </button>
      </div>
      <div className="Weather-Result">
        <h1>Weather Result</h1>
        <ul className="Weather-list">
          <li>City: {Mydata.name} </li>
          <li>Temperature: {Mydata.main?.temp} K</li>
          <li>Humidity: {Mydata.main?.humidity} %</li>
          <li>Weather: {Mydata.weather?.[0]?.description}</li>
          <li>Wind Speed: {Mydata.wind?.speed} m/s</li>
        </ul>
      </div>
    </div>
  );
};

export default Weather;
