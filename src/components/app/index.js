import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import About from '../about-container'
import Team from '../team-container'
import Connect from '../connect-container'
import Individual from '../individual-container'
import Company from '../company-container'
import Esports from '../esports-container'
import Landing from '../landing'
import logo from '../../assets/mythic-logo.jpg'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className='main-page'>
            <img src={logo} className="mythic-logo" alt="logo" />
            <div className='nav-bar'>
              <Link to='/'> Home </Link>
              <Link to='/about'> About </Link>
              <Link to='/team'> Team </Link>
              <Link to='/connect'> Connect </Link>
            </div>
            <div className='main-content'>
              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
              <Route exact path='/team' component={Team} />
              <Route exact path='/connect' component={Connect} />
              <Route exact path='/individual' component={Individual} />
              <Route exact path='/company' component={Company} />
              <Route exact path='/esports' component={Esports} />
            </div>
            <div className='footer'></div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
