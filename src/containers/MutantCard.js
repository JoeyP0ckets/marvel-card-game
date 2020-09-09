import React from 'react'
import {Card, CardImg, Button} from "react-bootstrap"
import {connect} from "react-redux"

const MutantCard = (props) => {
  
  const handleClick = (mutant) => {
    props.addToTeam(mutant)
    console.log(mutant)
  }
  
  return(
    <Card style={{ width: '16rem'}} className="box">
      <CardImg src={props.mutant.mainImage} height={200} width={200} alt={props.mutant.name}/>
      <Card.Title>{props.mutant.name}</Card.Title>
      <Card.Body>{props.mutant.team}</Card.Body>
      <Button onClick={() => handleClick(props.mutant)}>Add To Team</Button>
    </Card>
  )
}
const msp = state => {
  return{
    team: state.team
  }
}

const mdp = dispatch => {
  return {
    addToTeam: (name) => dispatch({ type: "ADD_TO_TEAM", name: name})
  }
}
export default connect(msp,mdp)(MutantCard)