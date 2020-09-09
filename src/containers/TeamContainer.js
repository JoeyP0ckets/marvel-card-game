import React from "react"
import {connect} from "react-redux"

const TeamContainer = (props) => {
  return(
    <div className="team-container">
      {props.team}
    </div>
  )
}

const msp = state => {
  return{
    team: state.team
  }
}

export default connect(msp)(TeamContainer)