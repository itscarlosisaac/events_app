import React, { Component } from 'react'
import Event from './Event';

export default class Event extends Component {
  render() {
    return (
      <div className="app__headline">
        <h1>Upcoming Events</h1>
        <Event />
      </div>
    )
  }
}
