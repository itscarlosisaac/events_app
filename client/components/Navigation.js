import React, { Component, Fragment } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <ul className='app__nav'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </Fragment>
    )
  }
}
