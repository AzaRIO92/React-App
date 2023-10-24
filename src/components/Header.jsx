import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to='/cards'>
          <Navbar.Brand>CardComponent</Navbar.Brand>
          </Link>
          <Link to='/textcomponent'>
          <Navbar.Brand>TextComponent</Navbar.Brand>
          </Link>
          <Link to='/scrollbar'>
          <Navbar.Brand>ScrollbarComponent</Navbar.Brand>
          </Link>
          <Link to='/pagination'>
          <Navbar.Brand>PaginationComponent</Navbar.Brand>
          </Link>
          <Link to='/rating'>
          <Navbar.Brand>RatingComponent</Navbar.Brand>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;