import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {connect} from "react-redux"

const MutantNavbar = () => {
  
  const sort = () => {
    console.log("I was clicked")
  }
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Marvel Gwent</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Select Your Team</Nav.Link>
      <Nav.Link href="#features">Archive</Nav.Link>
      <Nav.Link href="#pricing">PLAY</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
      <Button onClick={() => sort()}>Sort By Team</Button>
    </Form>
    </Navbar>
  )
}

const msp = state => {
  return{
    sortedByTeam: state.sortedByTeam
  }
}

const mdp = dispatch => {
  return{
    sortByTeam: (sortedTeam) => dispatch({ type: "SORT_BY_TEAM", sortedTeam: sortedTeam})
  }
}

export default connect(msp,mdp)(MutantNavbar)