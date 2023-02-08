import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../css/Header.css"
import Dropdown from 'react-bootstrap/Dropdown';
function Year(){
  let year
  return  year = new Date().getFullYear();
}
function Month(){
  let month
  return month = new Date().getMonth()+1;
 
}
function Day(){
  let day
  return day = new Date().getDate();
}
let _year = Year()
let _month = Month()
let _day = Day()
function Header() {
  return (         
  <>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 col-md-2" id="date">
          <FontAwesomeIcon icon={faClock} id="reloj"/>{_day}/{_month}/{_year}
          </div>
          <div class="col-sm-7 col-md-9" id="Title">
          <p>Herramienta de Autoevaluacion HAED</p>
          </div>
          <div class="col-sm-2 col-md-1">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Imagen
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      
      </div>
    </header>
  </>                               
  )
}
export default Header  