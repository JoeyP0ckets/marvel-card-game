import React from 'react'
import {Card, CardImg, Button} from "react-bootstrap"
import {connect} from "react-redux"

const MutantCard = (props) => {
  
  const handleClick = (name) => {
    props.addToTeam(name)
    console.log(name)
  }
  
  return(
    <Card style={{ width: '16rem'}} className="box">
      <CardImg src={props.mutant.mainImage} height={200} width={200} alt={props.mutant.name}/>
      <Card.Title>{props.mutant.name}</Card.Title>
      <Card.Body>{props.mutant.team}</Card.Body>
      <Button onClick={() => handleClick(props.mutant.name)}>Add To Team</Button>
    </Card>
  )
}

const mdp = dispatch => {
  return {
    addToTeam: (name) => dispatch({ type: "ADD_TO_TEAM", name: name})
  }
}
export default connect(null,mdp)(MutantCard)