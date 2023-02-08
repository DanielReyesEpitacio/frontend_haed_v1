import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/Nav.css';
import TICS from '../components/images/logo_TICeducativa_normal.png'
import Calidad from '../components/images/CalidadyCompetividad.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navv()
{
    const Tics = () =>(<img class="navbar-brand imagen" src={TICS} alt="TIC"/>)
    const Quality = () =>(<img class="navbar-brand imagen" src={Calidad} alt="logo"/>)
return (
    <>
    <Navbar bg="light" expand="lg">
      <div class="container">
        <div class="col-sm-8 col-md-6">
        <img class="navbar-brand imagen" src={TICS} alt="TIC"/>
        <img class="navbar-brand imagen" src={Calidad} alt="logo"/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>  
            <Navbar.Collapse id="basic-navbar-nav pull-right">
                <Nav className="me-auto pull-right" >
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Descubre</Nav.Link>
                    <Nav.Link href="#link">Autoevaluacion</Nav.Link>
                    <Nav.Link href="#link">Canal Youtube</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>  
      </div>
    </Navbar>
    </>
  );
}
export default Navv

