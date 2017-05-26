import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  onInputChange(event){
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={(e) => this.onFormSubmit(e)}
      >
        <input
          placeholder="Get a five day forcast in your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary"> Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
