import React from 'react'
import {Card, CardImg, Button, ListGroup} from "react-bootstrap"
import {connect} from "react-redux"

const MutantCard = (props) => {
  
  const handleClick = (mutant) => {
    props.addToTeam(mutant)
    console.log(mutant)
  }

  const renderTypeFont = () => {
    if (props.mutant.type === "melee") {
      return <h4 className="melee-text">{props.mutant.type}</h4>
    } else if (props.mutant.type === "mid") {
      return <h4 className="mid-text">{props.mutant.type}</h4>
    } else if (props.mutant.type === "ranged") {
      return <h4 className="ranged-text">{props.mutant.type}</h4>
    }
  }
  
  return(
    <Card style={{ width: '14rem'}} className="bg-dark text-white">
      <CardImg className="card-image"src={props.mutant.mainImage} height={260} width={160} alt={props.mutant.name}/>
      <ListGroup className="title-background">
        <h2 className="name-color">{props.mutant.name}</h2>
      </ListGroup>
      <Card.Body>
       <h1 className="value-text">{props.mutant.value}</h1>
        {renderTypeFont()}
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