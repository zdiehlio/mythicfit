import React from 'react'
import {Link} from 'react-router-dom'
import MagePic from '../../assets/mage.png'
import Twitter from '../../assets/twitter.jpg'
import Instagram from '../../assets/instagram.png'
import Discord from '../../assets/discord.jpg'
import Modal from 'react-modal'

class Mage extends React.Component {
  constructor(){
    super()
    this.state = {
      modalIsOpen: true,
    }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }
  render(){
    return(
      <Modal
        isOpen= {this.state.modalIsOpen}
        contentLabel='Modal'
        className='final-choice'
        onRequestClose={this.closeModal} >
        <div>
          <Link to = '/individual' ><button onClick = {this.closeModal}>Get Me Out of Here!</button></Link>
          <img src={MagePic} />
          <p><h3>Mage</h3> You are one step closer to embarking on a legendary journey that will be relentless, but will forge you into something greater.  Before we accept you as a trainee, we need to hear your motivation for wanting to join us.  Use #mythicfitmage on your favorite social media platform @mythicfit and tell us why you are ready to take on the challenge and become a Mage of Mythic Fit.
          </p>
        </div>
        <a className='social-tag' href='https://twitter.com'>
          <img src={Twitter} />
        </a>
        <a className='social-tag' href='https://instagram.com'>
          <img src={Instagram} />
        </a>
      </Modal>
    )
  }
}

export default Mage
