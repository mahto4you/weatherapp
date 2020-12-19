import React, { Component } from "react";
import "./components/style.css";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      search: "Dhanbad",
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value.toUpperCase() });
    const fechApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&APPID=ac0079cfaafd49d9f6f8b4ceef1c76fb`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      this.setState({ city: resJson.main });
    };
    fechApi();
  };
  // componentDidMount() {
  //   // Get Data from server and set data to state
  // }
  render() {
    // console.log(this.state.search);
    return (
      <>
        <div className="box">
          <h2 className="text-center">Weather App</h2>
          <div>
            <input
              type="search"
              value={this.state.search}
              onChange={this.handleChange}
              className="form-control form-control-sm"
            />
          </div>
          {!this.state.city ? (
            <h2 className="text-center mt-3">No Data Found</h2>
          ) : (
            <div className="mt-3">
              <h2 className="text-center">
                <i className="fas fa-street-view"></i>
                {this.state.search}
              </h2>
              <h1 className="bg-dark">{this.state.city.temp}</h1>
              <h4>
                <small>
                  Min : {this.state.city.temp_min} cel | Max:{" "}
                  {this.state.city.temp_max} cel
                </small>
              </h4>
            </div>
          )}
          <small className="text-center">Developed by Nitish Mahato</small>
        </div>
      </>
    );
  }
}
