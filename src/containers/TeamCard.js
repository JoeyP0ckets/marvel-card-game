import React from "react"
import { Card, CardImg, Button } from "react-bootstrap"
import { connect } from 'react-redux'

const TeamCard = (props) => {

  const handleClick = (name) => {
    props.remove(name)
  }

  return(
    <Card style={{ width: '12rem'}} className="box">
      <CardImg src={props.mutant.mainImage} height={200} width={200} alt={props.mutant.name}/>
      <Card.Title>{props.mutant.name}</Card.Title>
      <Card.Body>{props.mutant.team}</Card.Body>
      <Button variant="danger" onClick={() => handleClick(props.mutant.name)}>Remove From Team</Button>
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
    remove: (name) => dispatch({ type: "REMOVE_FROM_TEAM", name: name})
  }
}
export default connect(msp,mdp)(TeamCard)
