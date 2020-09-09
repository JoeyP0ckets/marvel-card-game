import React from 'react'
import * as MutantFunctions from '../DataGrabber'
import MutantCard from './MutantCard'
import {connect} from "react-redux"
import {Container} from 'react-bootstrap'


class MutantSelect extends React.Component {

  componentDidMount() {
    this.renderMutants()
  }

  renderMutants = () => {
    let allMutants = MutantFunctions.getAllMutants()
    this.props.renderAllMutants(allMutants)
  }

  renderMutantCards = () => {
    return this.props.allMutants.map((mutant, index) => 
    <MutantCard
      key={index}
      mutant={mutant}
    />
    )
  }

  
  render() {
    return(
      <Container>
        {this.renderMutantCards()}
      </Container>
    )
  }
}

const msp = state => {
  return {
    allMutants: state.allMutants
  }
}

const mdp = dispatch => {
  return {
    renderAllMutants: (allMutants) => dispatch({ type: 'GET_ALL_MUTANTS', allMutants: allMutants})
  }
}

export default connect(msp,mdp)(MutantSelect)