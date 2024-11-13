"use client"
import React from "react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [weatherLat, setWeatherLat] = useState(null);
  const [weatherLon, setWeatherLon] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Philadelphia,PA,US&limit=1&appid=${process.env.NEXT_PUBLIC_APIKEY}`)
      const result = await res.json()
      
      setWeatherLat(result[0].lat)
      setWeatherLon(result[0].lon)
    }
    fetchWeatherData();
  }, [])

  return <>
   <div>
    This will be the main content of my hero
  </div>
  {/* <pre>{JSON.stringify(weatherData, null, 2)}</pre> */}
  <div className=" m-2 flex flex-col">
    Latitude: {weatherLat}
    Longitude: {weatherLon}

  </div>
  </>
};

export default Hero;