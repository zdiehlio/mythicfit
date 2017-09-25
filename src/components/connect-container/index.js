import React from 'react'
import FB from '../../assets/facebook.jpg'
import Discord from '../../assets/discord.jpg'
import Twitter from '../../assets/twitter.jpg'
import Instagram from '../../assets/instagram.jpg'

class ConnectContainer extends React.Component {
  render() {
    return(
      <div>
        <p>We hate forms, we don't want to read them and you certainly don't want to fill them out.  Instead, if you have questions or just want to chat join us on the Social Medias! <br></br>
          <a className='icon' href='https://discord.gg/GkHbRjv'>
            <img src={Discord} />
          </a>
          <a className='icon' href='https://www.facebook.com/Mythic-Fit-126475528079150/'>
            <img src={FB} />
          </a>
          <a className='icon' href='https://twitter.com/mythicfit'>
            <img src={Twitter} />
          </a>
          <a className='icon' href='https://www.instagram.com/mythicfit/'>
            <img src={Instagram} />
          </a>
        </p>
      </div>
    )
  }
}

export default ConnectContainer
