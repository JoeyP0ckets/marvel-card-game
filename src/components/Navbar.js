import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const MutantNavbar = () => {
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
    </Form>
  </Navbar>
  )
}

export default MutantNavbar