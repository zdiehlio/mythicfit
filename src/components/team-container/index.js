import React from 'react'

import './team.css'

class TeamContainer extends React.Component {
  render() {
    return(
      <div className='team'>
        <div>
          <img src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/20993067_10159219337715274_2489403136085593342_n.jpg?oh=a4b6b3d02f4f4454d7d3f84bf2b4d9db&oe=5A5C65F1' />
          <p><h5>The Warchief</h5>After spending 10 years fighting battles in foreign lands, the warchief has hung up his uniform to embark on new adventures.  He is a warrior at heart who believes that peace is possible and battle should be a last resort.  He is commited to training a new generation of warriors who understand the incredible strength in determination and resilience.  He is adamant in teaching his students that pride is built on sand, true power comes from within.</p>
        </div>
      </div>
    )
  }
}

export default TeamContainer
