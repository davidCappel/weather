"use client"
import React from "react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [weatherLat, setWeatherLat] = useState(null);
  const [weatherLon, setWeatherLon] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_APIKEY;

  useEffect(() => {
    const fetchLocationData = async () => {
      const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Philadelphia,PA,US&limit=1&appid=${process.env.NEXT_PUBLIC_APIKEY}`)
      const result = await res.json()
      
      setWeatherLat(result[0].lat)
      setWeatherLon(result[0].lon)
    }
    fetchLocationData();
  }, [])

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${weatherLat}&lon=${weatherLon}&cnt=16&appid=${process.env.NEXT_PUBLIC_APIKEY}`)
      const result = await res.json()
      setWeatherData(result)
      console.log(result)
    }
    fetchWeatherData();

  },[])

  return <>
   <div>
    This will be the main content of my hero
  </div>
  <pre>{JSON.stringify(weatherData, null, 2)}</pre>
  <div className=" m-2 flex flex-col">
    <div className="">
      Latitude: {weatherLat}
    </div>
    <div className="">
       Longitude: {weatherLon}

    </div>
  </div>
  </>
};

export default Hero;