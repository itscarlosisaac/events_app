import React, { Component, Fragment } from 'react'
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <ul className='app__nav'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </Fragment>
    )
  }
}
