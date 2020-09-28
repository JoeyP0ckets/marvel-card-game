import React from "react"
import {connect} from "react-redux"

const GameBoard = () => {
  return (
    <div className="game-container"> 
      I'm the Game Board
    </div>
  )
}

export default connect(msp)(GameBoard)