import React from "react"
import {connect} from "react-redux"
import {Container, Row, Button} from "react-bootstrap"
import GameCard from './GameCard'
import BoardCard from './BoardCard'
import MutantNavbar from "../components/Navbar"




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
    scorePlayerTwo()
    let sum = props.gameBoard.reduce(function(prev, current) {
      return prev + +current.value
    }, 0);
    props.totalRoundOne(sum)
    props.endTurn()
    props.addToGraveYard(props.gameBoard)
    props.resetGameBoard()
    
  }

  const roundCounter = () => {
    let roundSum = props.gameBoard.reduce(function(prev, current) {
      return prev + +current.value
    }, 0);
    return <h1>{roundSum}</h1>
  }

  const drawDeck = () => {
    return props.drawDeck.map(mutant =>
      <li>
        {mutant.name}
      </li>
      )
  }
  
  const graveyard = () => {
    return props.graveyard.map(mutant =>
      <li>
        {mutant.name}
      </li>)
  }

  const drawCard = () => {
    var newCard = props.drawDeck[Math.floor(Math.random() * props.drawDeck.length)]
      props.removeFromDeck(newCard)
      props.addToHand(newCard)
  }

  const scorePlayerTwo = () => {
    var min = 0;
    var max = 15;
    var number = min + Math.random() * (max - min);
    console.log(number)
    props.playerTwoScore(number)
  }


  
  return (
    <div className="game-container">
      {props.playerTwoTotal}
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
      <Button onClick={() => drawCard()}>Draw Card</Button>
      <Container>
        {renderHand()}
      </Container>
      {roundCounter()}
      DrawDeck
      {drawDeck()}
      Graveyard
      {props.graveyard ? graveyard() : null}
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
    playerTwoTotal: state.playerTwoTotal,
  }
}

const mdp = dispatch => {
  return {
    endTurn: () => dispatch({type:"END_TURN"}),
    totalRoundOne: (sum) => dispatch({type:"ROUND_ONE_TOTAL", sum: sum}),
    addToGraveYard: (cards) => dispatch({type:"ADD_TO_GRAVEYARD", cards: cards}),
    resetGameBoard: () => dispatch({type:"RESET_GAMEBOARD"}),
    removeFromDeck: (newCard) => dispatch({type:"REMOVE_FROM_DECK", newCard: newCard}),
    addToHand: (newCard) => dispatch({type: "ADD_TO_HAND", newCard: newCard}),
    playerTwoScore: (number) => dispatch({type: "PLAYER_TWO_SCORE", number: number})
  }
}
export default connect(msp,mdp)(GameBoard)