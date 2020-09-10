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
    allMutants.sort((mutant1, mutant2) =>{  
      if (mutant1.team  > mutant2.team)
        return 1
        else  if (mutant1.team < mutant2.team)
          return -1
        else return 0 
      }) 
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
      <div>
        <h1>Pick Your Team</h1>
        <Container>
          {this.renderMutantCards()}
        </Container>
      </div>
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