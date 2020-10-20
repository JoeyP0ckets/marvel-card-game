import React from "react"
import {connect} from "react-redux"
import {Card} from "react-bootstrap"


const graveyardCard = (props) => {
  console.log(props.graveyard[0])
  return (
    <Card>
      <Card.Title>{props.graveyard.name}</Card.Title>
    </Card>
  )
}

const msp = state => {
  return{
    graveyard: state.graveyard
  }
}

export default connect(msp)(graveyardCard)