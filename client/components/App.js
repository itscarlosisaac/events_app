import React, { Component } from 'react'
import Header from './Header'
import Hero from './Hero';
import EventList from './EventList'
import Footer from './Footer';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Hero />
        <EventList />
        <Footer />
      </div>
    )
  }
}
