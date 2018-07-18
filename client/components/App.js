import React, { Component } from 'react'
import Header from './Header'
import Hero from './Hero';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Hero />
        <h1>
          App
        </h1>
      </div>
    )
  }
}
