import React from "react"
import {Container} from "react-bootstrap"
import MutantCard from "./MutantCard"
import {connect} from "react-redux"

const Hand = (props) => {
  
  const renderHand = () => {
    return props.hand.map((mutant, index) => 
    <MutantCard
      key={index}
      mutant={mutant}
    />)
  }
  
  return (
    <Container>
      {renderHand()}
    </Container>
  )
}

const msp = state => {
  return {
    hand: state.hand
  }
}

export default connect(msp)(Hand)