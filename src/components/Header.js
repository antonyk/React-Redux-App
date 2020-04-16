import React from 'react'
import logo from '../logo.svg';


function Header() {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <p>
          Magic the Gathering: Scryfall API
        </p>
      </div>
      <div className='menu-links'>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Menu Link
        </a>
      </div>
    </header>
  )
}

export default Header;