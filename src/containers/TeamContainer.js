import React from "react"
import {connect} from "react-redux"
// import MutantCard from "./MutantCard"
import TeamCard from './TeamCard'

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
    
    <div className="team-container">
      {renderTeamCards()}
    </div>
  )
}

const msp = state => {
  return{
    team: state.team
  }
}

export default connect(msp)(TeamContainer)