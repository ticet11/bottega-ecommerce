import React, { Component } from 'react';

import Header from './HeaderNavbar/Header';
import Navbar from './HeaderNavbar/Navbar';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}
