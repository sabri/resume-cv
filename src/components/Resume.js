import React, { Component } from 'react'
import Header from './Header'
import ISBody from './ISBody';
import Footer from './Footer';
export default class Resume extends Component {
  render() {
    return (
      <div >
        <Header />
        <ISBody />
        <Footer />
      </div>
    )
  }
}
