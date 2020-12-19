import React, { useEffect, useState } from "react";
import "./style.css";
export default function Tempa() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Dhanbad");

  useEffect(() => {
    const fechApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=ac0079cfaafd49d9f6f8b4ceef1c76fb`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fechApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <h2 className="text-center st-font2">WEATHER APP</h2>
        <div>
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            className="form-control form-control-sm"
          />
        </div>
        {!city ? (
          <h2 className="text-center mt-3">No Data Found</h2>
        ) : (
          <div className="mt-3">
            <h2 className="text-center st-font">
              <i className="fas fa-street-view"></i>
              {search}
            </h2>
            <h1 className="bg-dark">{city.temp}°Cel</h1>
            <h4>
              <small className="st-font3">
                Min : {city.temp_min}°Cel | Max: {city.temp_max}°Cel
              </small>
            </h4>
          </div>
        )}
        <small className="text-center st-font1">
          Developed by Nitish Mahato
        </small>
      </div>
    </>
  );
}
