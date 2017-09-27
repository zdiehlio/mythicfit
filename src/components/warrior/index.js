import React from 'react'
import {Link} from 'react-router-dom'
import WarriorPic from '../../assets/warrior.png'
import Twitter from '../../assets/twitter.jpg'
import Instagram from '../../assets/instagram.png'
import Discord from '../../assets/discord.jpg'
import Modal from 'react-modal'

class Warrior extends React.Component {
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
          <img src={WarriorPic} />
          <p><h3>Warrior</h3> You are one step closer to embarking on a legendary journey that will be relentless, but will forge you into something greater.  Before we accept you as a trainee, we need to hear your motivation for wanting to join us.  Use #mythicfitwarrior on your favorite social media platform @mythicfit and tell us why you are ready to take on the challenge.
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

export default Warrior
