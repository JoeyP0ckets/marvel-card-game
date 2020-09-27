import React from 'react'
import * as MutantFunctions from '../DataGrabber'
import MutantCard from './MutantCard'
import {connect} from "react-redux"
import {Container, Button} from 'react-bootstrap'


class MutantSelect extends React.Component {

  componentDidMount() {
    this.renderBrotherhoodMutants()
    this.renderHeroMutants()
  }

  renderBrotherhoodMutants = () => {
    let allBrotherhoodMutants = MutantFunctions.filterByBrotherhood()
    allBrotherhoodMutants.sort((mutant1, mutant2) => {
      if (mutant1.name > mutant2.name)
        return 1
        else if (mutant1.name < mutant2.name)
        return -1
        else return 0
    })
    this.props.renderBrotherhood(allBrotherhoodMutants)
  }
  
  renderHeroMutants = () => {
    let allHeroMutants = MutantFunctions.filterByHeroes()
    allHeroMutants.sort((mutant1, mutant2) => {
      if (mutant1.name > mutant2.name)
        return 1
        else if (mutant1.name < mutant2.name)
        return -1
        else return 0
    })
    this.props.renderHeroes(allHeroMutants)
  }

  renderBrotherhoodCards = () => {
    return this.props.brotherhoodMutants.map((mutant, index) => 
    <MutantCard
      key={index}
      mutant={mutant}
    />
    )
  }

  renderHeroCards = () => {
    return this.props.heroMutants.map((mutant, index) => 
      <MutantCard 
        key={index}
        mutant={mutant}
      />
    )
  }

  handleSelectClick = (team) => {
   this.props.selectTeam(team)
   this.props.confirmHand()
   let hand = team.sort(() => Math.random() - Math.random()).slice(0, 8)
    this.props.dealHand(hand)
  }

  
  render() {
    console.log(this.props.hand)
    return(
      <div>
        <h1>Brotherhood of Mutants</h1>
        <Button onClick={() => this.handleSelectClick(this.props.brotherhoodMutants)}>SELECT BROTHERHOOD DECK</Button>
        <Container>
          {this.renderBrotherhoodCards()}
        </Container>
        <h1>Marvel Heroes</h1>
        <Button onClick={() => this.handleSelectClick(this.props.heroMutants)}>SELECT HEROES</Button>
        <Container>
          {this.renderHeroCards()}
        </Container>
      </div>
    )
  }
}

const msp = state => {
  return {
    brotherhoodMutants: state.brotherhoodMutants,
    heroMutants: state.heroMutants,
    selectedTeam: state.selectedTeam,
    hand: state.hand
  }
}

const mdp = dispatch => {
  return {
    renderBrotherhood: (allBrotherhoodMutants) => dispatch({ type: "GET_ALL_BROTHERHOOD", allBrotherhoodMutants: allBrotherhoodMutants}),
    renderHeroes: (allHeroMutants) => dispatch({ type: "GET_ALL_HEROES", allHeroMutants: allHeroMutants}),
    selectTeam: (team) => dispatch({ type: "SELECT_TEAM", team: team}),
    dealHand: (hand) => dispatch({ type: "DEAL_HAND", hand: hand}),
    confirmHand: () => dispatch({ type:"CONFIRM_HAND"})
  }
}

export default connect(msp,mdp)(MutantSelect)