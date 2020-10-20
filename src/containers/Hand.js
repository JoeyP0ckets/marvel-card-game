import React from "react"
import {Container, Button} from "react-bootstrap"
import HandCard from "./HandCard"
import {connect} from "react-redux"


const Hand = (props) => {

  
  const renderHand = () => {
    return props.hand.map((mutant, index) => 
    <HandCard
      key={index}
      mutant={mutant}
    />)
  }

  const totalDeckValue = () => {
    let sum = props.hand.reduce(function(prev, current) {
      return prev + +current.value
    }, 0);
    return sum
  }

  const totalMelee = () => {
    let meleeArray = props.hand.filter(mutant => mutant.type === "melee")
    let total = meleeArray.length
    return total
  }

  const totalMid = () => {
    let midArray = props.hand.filter(mutant => mutant.type === "mid")
    let total = midArray.length
    return total
  }

  const totalRanged = () => {
    let rangedArray = props.hand.filter(mutant => mutant.type === "ranged")
    let total = rangedArray.length
    return total
  }
  
  // const displayDrawDeck = () => {
  //   return props.drawDeck.map(mutant => 
  //   <li>{mutant.name}</li>)
  // }

  const handleStartClick = () => {
    props.startGame()
  }
  
  return (
    <div>
      <h1 className="card-text">Your Hand</h1>
      <h1 className="card-text">Total Hand Value: {totalDeckValue()}</h1>
      <h4 className="melee-text">Melee: {totalMelee()}</h4>
      <h4 className="mid-text">Mid: {totalMid()}</h4>
      <h4 className="ranged-text">Ranged: {totalRanged()}</h4>
      {/* <h5> {displayDrawDeck()}</h5> */}
      <h1 className="card-text">Pick Up To Two Cards to Replace</h1>
      <Button onClick={() => handleStartClick()}>Start Game</Button>
      <Container>
        {renderHand()}
      </Container>
    </div>
  )
}

const msp = state => {
  return {
    hand: state.hand,
    selectedTeam: state.selectedTeam,
    drawDeck: state.drawDeck,
  }
}

const mdp = dispatch => {
  return {
    loadDrawDeck: (drawDeck) => dispatch({ type:"DRAW_DECK", drawDeck: drawDeck}),
    startGame: () => dispatch({ type:'START_GAME'})
  }
}

export default connect(msp,mdp)(Hand)