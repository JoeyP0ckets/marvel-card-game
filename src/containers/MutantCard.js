import React from 'react'
import {Card, CardImg, Button} from "react-bootstrap"
import {connect} from "react-redux"

const MutantCard = (props) => {
  
  const handleClick = (mutant) => {
    props.addToTeam(mutant)
    console.log(mutant)
  }
  
  return(
    <Card style={{ width: '12rem'}} className="box">
      <CardImg src={props.mutant.mainImage} height={200} width={200} alt={props.mutant.name}/>
      <Card.Title>{props.mutant.name}
      <h6>{props.mutant.team}</h6></Card.Title>
      <Card.Body>
       <h2>{props.mutant.value}</h2>
        
        <h3>{props.mutant.type}</h3>
      </Card.Body>
      <Button onClick={() => handleClick(props.mutant)}>Details</Button>
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