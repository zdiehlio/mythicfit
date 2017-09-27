import React from 'react'
import {Link} from 'react-router-dom'
import WarriorPic from '../../assets/warrior.png'
import RoguePic from '../../assets/rogue.png'
import MagePic from '../../assets/mage.png'
import Modal from 'react-modal'

import './individual.css'

class IndividualContainer extends React.Component {
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
  render() {
    return(
      <Modal
        isOpen= {this.state.modalIsOpen}
        contentLabel='Modal'
        className='archetypes'
        onRequestClose={this.closeModal} >
        <Link to = '/' ><button onClick = {this.closeModal}>Take Me Back!</button></Link>
        <div>
          <img src={WarriorPic} />
          <p><h3>Warrior</h3> Bastions of strength and fortitude, the warrior values determination and skill in combat above all else.  They are protectors, champions, and leaders in conflicts and adventures alike.  As a warrior, you are tasked with defending your team, leading them into the fray, and carrying them when they fall.
            <h5>Traits: </h5>
            <br /> Strength
            <br />Stamina
            <br />Fortitude
            <Link to = '/warrior'><button>Choose</button></Link>
          </p>
        </div>
        <div>
          <img src={RoguePic} />
          <p><h3>Rogue</h3> Often unpredictable to strangers, they are fiercely loyal to those lucky enough to earn their trust.  They are relentless in developing their technical skills to overcome overwhelming odds with speed, agility, and clever tactics.  They often seem selfish in their decisions, but will give their life for a cause they believe in or a team fortunate enough to earn their loyalty.
            <h5>Traits: </h5>
            <br /> Agility
            <br /> Dexterity
            <br /> Speed
            <Link to = '/rogue'><button>Choose</button></Link>
          </p>
        </div>
        <div>
          <img src={MagePic} />
          <p><h3>Mage</h3> With Curiosity bordered on obsession, Mages are unparalleled in their pursuit of knowledge.  They are the foundations of any team requiring a strategic mind and deep knowledge of the challenges before them.  Mages use both physical and mental discipline to improve their cognition and ability to identify threats and direct their teams to victory using cunning and immeasurable creativity.
            <h5>Traits: </h5>
            <br /> Intelligence
            <br /> Wisdom
            <br /> Perception
            <Link to = '/mage'><button>Choose</button></Link>
          </p>
        </div>
      </Modal>
    )
  }
}

export default IndividualContainer
