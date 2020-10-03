import React from "react"
import {connect} from "react-redux"
import {Container, Row} from "react-bootstrap"
import GameCard from './GameCard'
import BoardCard from './BoardCard'



const GameBoard = (props) => {

  const renderHand = () => {
    return props.hand.map((mutant,index) => 
      <GameCard
        key={index}
        mutant={mutant}
      />
      )
  }

  // const sortGameCards = () => {
  //   console.log(props.gameBoard.mutant)
  //   return renderGameCard()
  // }
  const totalMelee = () => {
    let meleeArray = props.gameBoard.filter(mutant => mutant.type === "melee")
    return meleeArray.map((mutant, index) =>
      <BoardCard
        key={index}
        mutant={mutant}
      />
    )
  }

  const totalMid = () => {
    let midArray = props.gameBoard.filter(mutant => mutant.type === "mid")
    return midArray.map((mutant, index) =>
      <BoardCard
        key={index}
        mutant={mutant}
      />
    )
  }

  const totalRanged = () => {
    let rangedArray = props.gameBoard.filter(mutant => mutant.type === "ranged")
    return rangedArray.map((mutant, index) =>
      <BoardCard
        key={index}
        mutant={mutant}
      />
    )
  }

  // const renderBoardCard = (meleeArray) => {

  //   return props.gameBoard.map((mutant, index) =>
  //     <BoardCard
  //       key={index}
  //       mutant={mutant}
  //     />
  //   )
  // }
  
  return (
    <div className="game-container">
      <Row className="melee-row">
        Melee Row
        {totalMelee()}

      </Row>
      <Row className="mid-row">
        Mid Row
        {totalMid()}
      </Row>
      <Row className="ranged-row">
        Ranged Row
        {totalRanged()}
      </Row>
      <Container>
        {renderHand()}
      </Container>
    </div>
  )
}

const msp = state => {
  return {
    hand: state.hand,
    drawDeck: state.drawDeck,
    gameBoard: state.gameBoard,
  }
}
export default connect(msp)(GameBoard)