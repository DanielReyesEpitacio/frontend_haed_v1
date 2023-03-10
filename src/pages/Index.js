import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Index.css"
import Button from 'react-bootstrap/Button'
import HERO from "../components/images/hero.png"
import IMG1P from "../components/images/img1_portfolio.jpg"
import IMG2P from "../components/images/img2_portfolio.jpg"
import IMG3P from "../components/images/img3_portfolio.jpg"
import IMG4P from "../components/images/img4_portfolio.jpg"
import cuerpo from "../components/images/cuerpos.png"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AOS from 'aos'
import 'aos/dist/aos.css'

function contenidoTIC(){
    
    let tics = document.getElementById('conTIC')
    let calidad = document.getElementById('conCalidad')
    let imagen = document.getElementById('conImagen')
    imagen.style.visibility="hidden"
    imagen.style.display="none"
    calidad.style.visibility="hidden"
    calidad.style.display="none"
    tics.style.visibility="visible"
    tics.style.display="block"
    document.getElementById("fichaTic").id="fichaTicA"
    document.getElementById("fichaCalidadA").id="fichaCalidad" 
}
function contenidoCalidad(){
    let tics = document.getElementById('conTIC')
    let calidad = document.getElementById('conCalidad')
    let imagen = document.getElementById('conImagen')
    imagen.style.visibility="hidden"
    imagen.style.display="none"
    calidad.style.visibility="visible"
    calidad.style.display="block"
    tics.style.visibility="hidden"
    tics.style.display="none"
    document.getElementById("fichaCalidad").id="fichaCalidadA" 
    document.getElementById("fichaTicA").id="fichaTic"
    
}
function Index(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);
    return(
        <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-12 col-md-6" data-aos="fade-up">
                    <h1>HAED: Herramienta de Autoevaluaci??n Docente</h1>
                    <Button variant="success" id="contestar">Contestar Autoevaluaci??n</Button>
                </div>
                <div class="col-sm-12 col-md-6" data-aos="zoom-in">
                <img className="img-fluid" src={HERO} alt="Hero"/>
                </div>
            </div>
            <div class="row" id="definicion">
                <div class="col-sm-12 col-md-6 " data-aos="zoom-in">
                    <img className="img-fluid" id="img2p"src={IMG2P} alt="ImagenPortafolio2"/>
                </div>
                <div class="col-sm-12 col-md-6 info" data-aos="zoom-in">
                    <h2>Herramienta enfocada al mejoramiento de la calidad educativa universitaria</h2>
                    <p>HAED es un herramienta alternativa de autoevaluaci??n docente propuesta por los cuerpos acad??micos:</p>
                    <ol> 
                        <li><FontAwesomeIcon id="cicleCheck"icon={faCircleCheck}/>TIC Educativa.</li>
                        <li><FontAwesomeIcon id="cicleCheck"icon={faCircleCheck}/>Calidad y Competitividad.</li> 
                    </ol>
                    <p>Est?? basada en competencias y considera aspectos integrales que incluyen al docente como persona, su desarrollo profesional y su relaci??n con la comunidad universitaria, especialmente con el estudiante.</p>
                </div>
            </div>
            <div class="row cuerpos">
                <div class="col-sm-12 col-md-6" data-aos="fade-up">
                        <div class="row">
                            <h1>Cuerpos acad??micos</h1>
                            <p>*Para m??s informaci??n da clic sobre el nombre del cuerpo acad??mico.</p>
                        </div>
                        <a onClick={contenidoTIC}>
                        <div class="row" id="fichaTic">
                            <div class="row"><h2><b>TIC Educativa</b></h2></div>
                            <div class="col">
                                <h3><b>Clave</b></h3>
                                <p>nUTPUE_CA-8</p>
                            </div>
                            <div class="col" id="grado">
                                <h3><b>Grado</b></h3>
                                <p>En formaci??n</p>
                            </div>
                        </div>
                        </a>
                        <a onClick={contenidoCalidad}>
                        <div class="row" id="fichaCalidad">
                            <div class="row"> <h2><b>Calidad y competitividad</b></h2></div>
                            <div class="col" >
                                <h3><b>Clave</b></h3>
                                <p>UTPUE_CA-6</p>
                            </div>
                            <div class="col" id="grado">
                                <h3><b>Grado</b></h3>
                                <p>Consolidado</p>
                            </div>
                        </div>
                        </a>
                </div>
                <div class="col-sm-12 col-md-6" data-aos="zoom-in">
                    <div id="conImagen"><p><img className="img-fluid" src={cuerpo} alt="Cuerpos"/></p></div>
                    <div id="conTIC">
                        <h3>Objetivo:</h3>
                        Desarrollar propuestas de mejora, 
                        fundamentadas y relacionadas con el estudio de diferentes ambientes de aprendizaje; 
                        de igual manera, propiciar la colaboraci??n y creaci??n de materiales educativos que apoyen 
                        distintos escenarios de estudio para ser aprovechados por las futuras generaciones elevando 
                        as?? el autoaprendizaje y la conciencia social.
                        <h3>L??neas de investigaci??n:</h3>
                        Estudio de ambientes de aprendizaje y propuestas de mejora
                        Material Did??ctico

                        <h3>Integrantes:</h3>
                        Mtra. Ver??nica Lizardi Rojo
                        Mtra. Norma Ang??lica Rold??n Oropeza
                        Lic. Rosalba Bola??os Ortega

                        <h3>Contacto:</h3>
                        tic-educativa@utpuebla.edu.mx
                    </div>
                    <div id="conCalidad">
                        <h3>Objetivo:</h3>
                        Investigar y desarrollar propuestas de mejora enfocadas a la mejora de la calidad 
                        y optimizaci??n de empresas, instituciones y universidades, con el fin de mejorar 
                        sus procesos, productos o servicios para que generen una ventaja competitiva.
                        <h3>L??neas de investigaci??n:</h3>
                        Normalizaci??n de los Sistemas de Gesti??n de la Calidad ISO 9000
                        Automatizaci??n y rob??tica para optimizar los sistemas de control
                        <h3>Integrantes:</h3>
                        Mtro. H??ctor De Sampedro Poblano
                        Dra. Luz del Carmen Mor??n Bravo
                        Dr. Gustavo Herrera S??nchez
                        Dr. Alejandro Silva Ju??rez
                        <h3>Contacto:</h3>
                        hector.desampedro@utpuebla.edu.mx
                    </div>
                </div>
            </div>
            <div class="row cards">
                <div data-aos="fade-up">  
                    <h1>Temas</h1>
                    <p>Los temas a tocar dentro del cuestionario de autoevaluci??n son los siguientes:</p>
                </div>
                
                <CardGroup>
                    <Card id="tarjeta" data-aos="zoom-in" data-aos-duration="500">
                        <FontAwesomeIcon id="iconCard" icon={faLightbulb}/>
                        <Card.Body>
                        <Card.Title>Pr??ctica reflexiva</Card.Title>
                        <Card.Text>
                        Dirigido a que el participante reconozca y analice los hechso de manera libre mediante una observaci??n cient??fica no estructurada.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id="tarjeta" data-aos="zoom-in" data-aos-duration="1500">
                        <FontAwesomeIcon id="iconCard" icon={faDesktop}/>
                        <Card.Body>
                        <Card.Title>Aspectos Tecnol??gicos</Card.Title>
                        <Card.Text>
                        Son habilidades que Greg Thompson menciona como elementos indispensables que el docente debe incorporar y ense??ar a sus discentes.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id="tarjeta" data-aos="zoom-in" data-aos-duration="2000">
                        <FontAwesomeIcon id="iconCard" icon={faUserTie}/>
                        <Card.Body>
                        <Card.Title>Profesionalizaci??n Docente</Card.Title>
                        
                        </Card.Body>
                    </Card>
                    <Card id="tarjeta" data-aos="zoom-in" data-aos-duration="2500">
                        <FontAwesomeIcon id="iconCard"icon={faGlobe}/>
                        <Card.Body>
                        <Card.Title>Sobre la herramienta</Card.Title>
                        <Card.Text>
                        Cuestionamientos en apoyo a la mejora de la herramienta.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            <div class="row portafolio" data-aos="fade-up">
                <h1>Portafolio de im??genes de HAED</h1>
                <div class="col-sm-12 col-md-4"><img className="img-fluid" id="img1p"src={IMG1P} alt="ImagenPortafolio1"/></div>
                <div class="col-sm-12 col-md-4"><img className="img-fluid" id="img3p"src={IMG3P} alt="ImagenPortafolio3"/></div>
                <div class="col-sm-12 col-md-4"><img className="img-fluid" id="img4p"src={IMG4P} alt="ImagenPortafolio4"/></div>
            </div>
        </div>
        </>
    )
}

export default Index