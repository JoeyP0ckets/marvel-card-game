import React from "react"
import {Card, ListGroup} from "react-bootstrap"


const boardCard = (props) => {
  const renderTypeFont = () => {
    if (props.mutant.type === "melee") {
      return <h4 className="melee-text">{props.mutant.type}</h4>
    } else if (props.mutant.type === "mid") {
      return <h4 className="mid-text">{props.mutant.type}</h4>
    } else if (props.mutant.type === "ranged") {
      return <h4 className="ranged-text">{props.mutant.type}</h4>
    }
  }
  
  
  return (
    <Card style={{ width: '14rem' }} className="bg-dark text-white">
      <ListGroup className="title-background">
        <h2 className="name-color">{props.mutant.name}</h2>
      </ListGroup>
      <Card.Body>
       <h1 className="value-text">{props.mutant.value}</h1>
        {renderTypeFont()}
      </Card.Body>
    </Card>
  )
}

export default boardCard