import React, {useEffect, useState} from "react";

export default function Weather() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeatherData = async (cityName) => {
        setIsLoading(true);

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
            const data = await response.json();
            setWeatherData({
                city: data.name,
                temp: Math.floor(data.main.temp - 273.15),
                description: data.weather[0].description
            });
        } catch (error) {
            console.error('Error fetching data: ', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (city) {
            fetchWeatherData(city);
        }
    }, [city]);

    return (
        <div className="w-2/5 p-5 my-10 mx-auto justify-center rounded shadow">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="block w-full border border-gray-200 p-2.5 rounded my-2.5 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                placeholder="Enter City Name..."
            />
            <button
                onClick={() => {
                    fetchWeatherData(city)
                }}
                className="mb-2.5 py-1 px-2.5 rounded border border-gray-200 text-gray-600 text-base block w-full">Get
                weather
            </button>
            {isLoading ? (
                <h3>Loading data</h3>
            ) : weatherData ? (
                <>
                    <h4 className="text-lg"><span className="font-semibold">City :</span> {weatherData.city}</h4>
                    <h6 className="text-lg"><span className="font-semibold">Temp :</span> {weatherData.temp}°C</h6>
                    <h6 className="text-lg"><span className="font-semibold">Weather Description :</span>
                        {weatherData.description}
                    </h6>
                </>
            ) : (
                <p>Please Enter City name</p>
            )}
        </div>
    );
}