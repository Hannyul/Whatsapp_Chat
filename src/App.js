import './App.css';
import React, { Component } from 'react'
import WhatsAppLink from './WhatsAppLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <img src="https://gfx4arab.com/wp-content/uploads/2020/06/whatsapp-glyph-black.svg" className="App-logo" alt="logo" />
        <WhatsAppLink />
        <footer>*Just Paste/Write the number to be directed to WhatsApp.</footer>
      </div>
    )
  }
}
