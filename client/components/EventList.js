import React, { Component, Fragment } from 'react'
import Event from './Event';
import ArrowRight from 'React-icons/lib/md/keyboard-arrow-right'
import Data from '../dummy/data';
import { NavLink } from 'react-router-dom';
export default class EventList extends Component {

  state = {
    events: []
  }

  componentWillMount = () => {
    this.setState({ events: Data} )
  }
  
  render() {
    return (
      <Fragment>
        <div className="app__event__list">
          <header className="app__title">
            <h1>Upcoming Events</h1>
            <p>Latest added events</p>
          </header>
          <div className="app__events">
          {
            this.state.events.map( (event, index) => {
              return <Event key={`event-${index}`} data={event} />
            }) 
          }
          </div>
          <NavLink to="/events">
            <button className="app__button app__button--all-events">
              All Events
              <ArrowRight size={20} color={"#fff"} />
            </button>
          </NavLink>
        </div>
      </Fragment>
    )
  }
}
