import React from "react"
import {connect} from "react-redux"
import {Container, Row, Button} from "react-bootstrap"
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

  const endTurn = () => {
    let sum = props.gameBoard.reduce(function(prev, current) {
      return prev + +current.value
    }, 0);
    props.totalRoundOne(sum)
    props.endTurn()
    props.addToGraveYard(props.gameBoard)
  }

  const roundCounter = () => {
    let roundSum = props.gameBoard.reduce(function(prev, current) {
      return prev + +current.value
    }, 0);
    return <h1>{roundSum}</h1>
  }

  


  
  return (
    <div className="game-container">
      <Row className="melee-row">
        {totalMelee()}
      </Row>
      <Row className="mid-row">
        {totalMid()}
      </Row>
      <Row className="ranged-row">
        {totalRanged()}
      </Row>
      <Button onClick={() => endTurn()}>End Turn</Button>
      <Container>
        {renderHand()}
      </Container>
      {roundCounter()}
    </div>
  )
}

const msp = state => {
  return {
    hand: state.hand,
    drawDeck: state.drawDeck,
    gameBoard: state.gameBoard,
    roundOneTotal: state.roundOneTotal,
    graveyard: state.graveyard,
  }
}

const mdp = dispatch => {
  return {
    endTurn: () => dispatch({type:"END_TURN"}),
    totalRoundOne: (sum) => dispatch({type:"ROUND_ONE_TOTAL", sum: sum}),
    addToGraveYard: (cards) => dispatch({type:"ADD_TO_GRAVEYARD", cards: cards})
  }
}
export default connect(msp,mdp)(GameBoard)