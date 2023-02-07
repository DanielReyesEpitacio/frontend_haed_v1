import React from "react";
import {MdOutlineAccessTimeFilled  as Reloj}  from "react-icons/md"; /* ICONOS de FONT AWESOME */
import '../css/Header.css';

export default function Header() {
    return (
        <>
        <header class="header">
          <nav class="navbar navbar-dark  fixed-top">
            <div class="container">

              <a class="navbar-brand " href="#"> <b>Herramienta de Autoevaluacion HAED</b></a>
              <p class="Reloj"> <Reloj/> 11:01:02</p>
              <div class="usuario">
              <p class="usuario">  Hola:<b> Usuario</b></p>
              </div>
            <div class="Menu-despliega">
            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              IMAGEN
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="dropdown-item" type="button">Action</button></li>
              <li><button class="dropdown-item" type="button">Another action</button></li>
              <li><button class="dropdown-item" type="button">Something else here</button></li>
            </ul>
            </div>
            </div>
          </nav>
        </header>


 </>                
                                           
  
  );}
  