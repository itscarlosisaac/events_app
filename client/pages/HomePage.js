import React, { Component, Fragment } from 'react'
import Hero from '../components/Hero';
import EventList from '../components/EventList';

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Hero/>
        <EventList />
      </Fragment>
    )
  }
}
