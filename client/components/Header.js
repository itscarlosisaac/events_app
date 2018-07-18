import React, { Component } from 'react'
import Logo from './Logo';
import Navigation from './Navigation';

export default class Header extends Component {
  render() {
    return (
      <header className='app__header'>
        <Logo width={160} />
        <Navigation />
      </header>
    )
  }
}
