import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    if (!city.trim()) {
      setErrorMsg("🌆 Please enter a city name.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=425ac2887910de81b1ef5dd3730849dc&units=metric`
      );
      const result = await response.json();
      if (result.cod !== 200) {
        setErrorMsg(`🚫 ${result.message}`);
        setData(null);
      } else {
        setData(result);
      }
    } catch (err) {
      setErrorMsg("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Dynamic background based on temperature (day/night feel)
  const bgGradient =
    data?.main?.temp > 22
      ? "from-yellow-300 via-pink-400 to-red-500"
      : "from-blue-400 via-indigo-500 to-purple-600";

  return (
    <div
      className={`min-h-screen bg-black bg-gradient-to-tr ${bgGradient} flex items-center justify-center p-4 transition-all duration-500`}
    >
      <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-3xl p-6 w-full max-w-md border border-white/30">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          ☁️ Weather Now
        </h1>

        <div className="  center text-black text-center gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={handleInput}
            placeholder="Search city..."
            className="flex-grow px-4 py-2 text-black  placeholder-white rounded-lg bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition"
          >
            🔍
          </button>
        </div>

        {loading && <p className="text-center text-white">🔄 Loading...</p>}

        {errorMsg && (
          <p className="text-center text-red-200 italic">{errorMsg}</p>
        )}

        {data && (
          <div className="mt-4 bg-white/30 p-4 rounded-xl text-white space-y-4 transition-all duration-300">
            <h2 className="text-xl font-semibold text-center">
              📍 {data.name}, {data.sys.country}
            </h2>
            <div>
              <div className="text-center text-5xl font-bold">
                {Math.round(data.main.temp)}°C
              </div>
              <p className="text-center text-lg capitalize italic">
                {data.weather[0].description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm pt-4">
                <div className="flex items-center gap-1">
                  💧 <span>Humidity:</span>
                  <span className="ml-auto">{data.main.humidity}%</span>
                </div>
                <div className="flex items-center gap-1">
                  🌬 <span>Wind:</span>
                  <span className="ml-auto">{data.wind.speed} m/s</span>
                </div>
                <div className="flex items-center gap-1">
                  📈 <span>Max:</span>
                  <span className="ml-auto">{data.main.temp_max}°C</span>
                </div>
                <div className="flex items-center gap-1">
                  📉 <span>Min:</span>
                  <span className="ml-auto">{data.main.temp_min}°C</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
