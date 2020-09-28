import React, {useState} from "react"
import { Card, CardImg, ListGroup } from "react-bootstrap"
import {connect} from "react-redux"

const HandCard = (props) => {
  
  const [count, setCount] = useState(0);
  
  const renderTypeFont = () => {
    if (props.mutant.type === "melee") {
      return <h4 className="melee-text">{props.mutant.type}</h4>
    } else if (props.mutant.type === "mid") {
      return <h4 className="mid-text">{props.mutant.type}</h4>
    } else if (props.mutant.type === "ranged") {
      return <h4 className="ranged-text">{props.mutant.type}</h4>
    }
  }
  
  const handleSwapClick = (mutant,id) => {
    props.removeFromHand(id)
    props.addToDeck(mutant)
    getNewCard()
  }

  const handleIncrement = () => {
    setCount(count + 1)
    if (count === 1) {
      alert("MAX CARDS PICKED")
    }
  }

  const getNewCard = () => {
    var newCard = props.drawDeck[Math.floor(Math.random() * props.drawDeck.length)]
      props.removeFromDeck(newCard)
      props.addToHand(newCard)
  }
  
  return (
    <div onClick={() => handleIncrement()}>
    <Card style={{ width: '14rem' }} className="bg-dark text-white" onClick={() => handleSwapClick(props.mutant, props.mutant.id)}>
      <CardImg className="hand-image"src={props.mutant.mainImage} height="260" width="160" alt={props.mutant.name}/>
      <ListGroup className="title-background">
        <h2 className="name-color">{props.mutant.name}</h2>
      </ListGroup>
      <Card.Body>
       <h1 className="value-text">{props.mutant.value}</h1>
        {renderTypeFont()}
      </Card.Body>
    </Card>
    </div>
  )
}

const msp = state => {
  return {
    hand: state.hand,
    drawDeck: state.drawDeck,
  }
}

const mdp = dispatch => {
  return {
    removeFromHand: (id) => dispatch({type:"REMOVE_FROM_HAND", id: id}),
    addToHand: (newCard) => dispatch({type:"ADD_TO_HAND", newCard: newCard}),
    removeFromDeck: (newCard) => dispatch({type:"REMOVE_FROM_DECK", newCard: newCard}),
    addToDeck: (mutant) => dispatch({type:"ADD_TO_DECK", mutant: mutant}),
  }
}

export default connect(msp,mdp)(HandCard)