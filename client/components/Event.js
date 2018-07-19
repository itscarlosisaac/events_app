import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Event extends Component {
  render() {
    return (
      <div className="app__event">
        <div className="app__event__thumb"> 
          <img src={this.props.data.thumbnail} width="200" />
        </div>
        <div className="app__event__details">
          <small>
            <span className="app__event__m">
              { moment(this.props.data.date).format('MMM') }
            </span>
            <span className="app__event__date">
              { moment(this.props.data.date).format('DD YYYY') }
            </span>
          </small>
          <h2>{this.props.data.title}</h2>
          <p>
          {
            this.props.data.description.length < 80 ? 
            this.props.data.description :
            this.props.data.description.substring(0, 77) + '...'
          }
          </p>
          <button className="app__event__cta">See Details</button>
        </div>
      </div>
    )
  }
}

Event.propTypes = {
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // thumbnail: PropTypes.string.isRequired,
  // excerpt: PropTypes.string.isRequired,
  // leader: PropTypes.string.isRequired,
  // date: PropTypes.any.isRequired,
  // location: PropTypes.string.isRequired,
  // speakers: PropTypes.arrayOf(PropTypes.string),
}