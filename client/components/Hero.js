import React, { Component } from 'react'
import IoMaker from 'react-icons/lib/io/android-pin';
import IoCalendar from 'react-icons/lib/io/ios-calendar'

export default class Hero extends Component {
  render() {
    return (
      <div className="app__hero">
        <div className="app__hero__content">
          <p className="app__hero__meta">
            <span><IoCalendar color={'#fcb95a'} size={20} /> August 10, 2018</span>
            <span><IoMaker  color={'#fcb95a'} size={20} /> 847 Luettgen Meadows Apt. 784</span>
          </p>
          <h1 className="app__hero__title">Getting Free Publicity For Your Business</h1>
          <p className="app__hero__tagline">Get Ready for the next event</p> 
          <div className="app__hero__footer">
            <button className="app__hero__button">Buy Ticket</button>
          </div>
        </div>
      </div>
    )
  }
}
