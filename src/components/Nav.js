import React, { useState } from "react";
import '../css/Nav.css';
import TICS from '../components/images/logo_TICeducativa_normal.png'
import Calidad from '../components/images/CalidadyCompetividad.jpg'

export default function Navbar()
{
    const Tics = () =>(<img class="navbar-brand imagen" src={TICS} alt="TIC"/>)
    const Quality = () =>(<img class="navbar-brand imagen" src={Calidad} alt="logo"/>)
return (
    
    <>
<div class="Relleno">
</div>
 <div class="sticky">
    <nav class="navbar navbar-expand-sm sticky-top navbar-dark ">
        <div class="container">
        <Quality class="navbar-brand imagen" />
        <Tics class="navbar-brand imagen" />
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myList"
                aria-controls="myList" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

     
            <div class="collapse navbar-collapse" id="myList">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Descubre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Autoevaluacion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Canal Youtube</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacto</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    </div>


    
    <div class="container">
        <div class="py-5">
            <h1>Sticky Navbar Example</h1>
            <p>Welcome to KindaCode.com</p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #1</h1>
            <p>Welcome to KindaCode.com</p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #2</h1>
            <p>Welcome to KindaCode.com</p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #3</h1>
            <p>Welcome to KindaCode.com</p>
        </div>

        <div class="py-5">
            <h1>Dummy Content #4</h1>
            <p>Welcome to KindaCode.com</p>
        </div>

    </div>
  
    </>
  );
}

