import React, { Component } from 'react'
import Logo from './Logo'
import IoSocialFacebook from 'React-icons/lib/fa/facebook'
import IoSocialTwitter from 'React-icons/lib/fa/twitter'
import IoSocialPinterest from 'React-icons/lib/fa/pinterest-p'

export default class Footer extends Component {
  render() {
    return (
      <footer className="app__footer">
        <Logo width={260} />
        <div className="app__social">
          <IoSocialFacebook color={'rgb(158, 171, 190)'} size={20} />
          <IoSocialTwitter color={'rgb(158, 171, 190)'} size={20} />
          <IoSocialPinterest color={'rgb(158, 171, 190)'} size={20} />
        </div>
        <p className="app__copyright">Copyright 2018 &copy;. Carlos I. Martinez.</p>
      </footer>
    )
  }z
}
