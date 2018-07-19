import React, { Component, Fragment } from 'react'
import Event from './Event';
import ArrowRight from 'react-icons/lib/md/keyboard-arrow-right'
import Data from '../dummy/data';

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
            this.state.events.map( (event) => {
              return <Event data={event} />
            }) 
          }
          </div>
          <button className="app__button app__button--all-events">
            All Events
            <ArrowRight size={20} color={"#fff"} />
          </button>
        </div>
      </Fragment>
    )
  }
}
