import React from 'react'
import {Navbar,NavDropdown,Nav,NavItem,NavLink,Container} from "react-bootstrap"
import menu from "./menu.json"
import { Link } from 'react-router-dom'

// console.log(menu)

function Menu({item}){
 
    return( <Link to={item.label} className='nav-link' >{item.link}</Link>)
}

function AppBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">PixelDepth</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end w-100">
         {
          menu.map((ele,i)=>{
            return(
            <Menu key={i} item={ele}/>
          )
          })
         }
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppBar
