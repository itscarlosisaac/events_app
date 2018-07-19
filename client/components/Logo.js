import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Logo extends Component {
  render() {
    return (
      <div>
          <img src="/assets/logo.svg" width={this.props.width} height="auto" />
      </div>
    )
  }
}

Logo.defaultProps = {
  'width': 140,
  'type': 'default'
}

Logo.propTypes = {
  'width': PropTypes.number.isRequired,
  'type': PropTypes.string
}