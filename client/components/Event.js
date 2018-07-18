import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Event extends Component {
  render() {
    return (
      <div>
        <img src={this.props.data.thumbnail} width="200" />
        <h1>{this.props.data.title}</h1>
        <p>{this.props.data.description}</p>
      </div>
    )
  }
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  leader: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  location: PropTypes.string.isRequired,
  speakers: PropTypes.arrayOf(PropTypes.string),
}