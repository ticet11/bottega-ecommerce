import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
      </div>
    );
  }
}
