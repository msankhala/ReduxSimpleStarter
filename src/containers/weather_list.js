import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperaturs = cityData.list.map(weather => weather.main.temp - 274.15);
    const presssures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={_.uniqueId('city_')}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temperaturs} color="red" unit="C" /></td>
        <td><Chart data={presssures}  color="blue" unit="hPa" /></td>
        <td><Chart data={humidities} color="black" unit="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperator (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
