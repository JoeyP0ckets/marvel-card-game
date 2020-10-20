import React from "react"
import {connect} from "react-redux"

const Welcome = (props) => {

  const selectStart = () => {
    props.startGame()
  }
  return (
    <div className="welcome-container" onClick={() => selectStart()}>

    </div>
  )
}

const mdp = dispatch => {
  return {
    startGame: () => dispatch({type:"SELECT_START"})
  }
}

export default connect(null,mdp)(Welcome)