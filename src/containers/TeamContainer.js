import React from "react"
import {connect} from "react-redux"
// import MutantCard from "./MutantCard"
import TeamCard from './TeamCard'
import {Container} from 'react-bootstrap'

const TeamContainer = (props) => {

 const renderTeamCards = () => {
    return props.team.map((mutant, index) =>
    <TeamCard
      key={index}
      mutant={mutant}
      />
    )
  }
  return(
    
    <div>
      <h1>Your Team</h1>
      <Container className="team-container">
        {renderTeamCards()}
      </Container>
    </div>
  )
}

const msp = state => {
  return{
    team: state.team
  }
}

export default connect(msp)(TeamContainer)