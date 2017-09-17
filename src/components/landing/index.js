import React from 'react'
import { Link } from 'react-router-dom'

import './landing.scss'

class Landing extends React.Component {
  render(){
    return(
      <div className='landing'>
        <div>
          <Link to='/individual'>
            <img src='https://i.imgur.com/nORPe0F.jpg' />
            <p>Individual</p>
          </Link>
        </div>
        <div>
          <Link to='/company'>
            <img src='https://imgur.com/nCEAFrl.jpg' />
            <p>Company</p>
          </Link>
        </div>
        <div>
          <Link to='/esports'>
            <img src='https://i.imgur.com/JBSAi3R.jpg' />
            <p>Esports</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Landing
