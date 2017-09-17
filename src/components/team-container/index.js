import React from 'react'

import './team.scss'

class TeamContainer extends React.Component {
  render() {
    return(
      <div className='team'>
        <div>
          <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/20993067_10159219337715274_2489403136085593342_n.jpg?oh=a4b6b3d02f4f4454d7d3f84bf2b4d9db&oe=5A5C65F1' />
          <p>The Warchief (Physical Resilience Coach) - 10 year combat veteran leading teams in austere environments, he has retired his uniform and automatic weapons for weighted clothing and warhammers.  The warchief has turned his lust for battle, into an obsession with training individuals and teams.  Through physical resilience, his students will learn their bodies and minds are capable of far greater things they can imagine.  His training will teach you to embrace pain and fear as companions in the journey to becoming a legend. </p>
        </div>
      </div>
    )
  }
}

export default TeamContainer
