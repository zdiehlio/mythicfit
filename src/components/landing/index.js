import React from 'react'
import { Link } from 'react-router-dom'
import Esports from '../../assets/esports.png'
import Solo from '../../assets/solo.png'
import Creative from '../../assets/creative.png'

import './landing.css'

class Landing extends React.Component {
  render(){
    return(
      <div className='landing'>
        <div>
          <Link to='/individual'>
            <img src={Solo} />
            <p>Solo Queue</p>
          </Link>
        </div>
        <div>
          <Link to='/company'>
            <img id='creative' src={Creative} />
            <p>Creative Teams</p>
          </Link>
        </div>
        <div>
          <Link to='/esports'>
            <img src={Esports} />
            <p>Esports Teams</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Landing
