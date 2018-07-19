import React, { Component } from 'react'
import Logo from './Logo';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='app__header'>
        <NavLink to="/"><Logo width={160} /></NavLink>
        <Navigation />
      </header>
    )
  }
}
