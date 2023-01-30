import React from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import "../css/footer.css"

function Footer(){
    return(
        <>
            <footer>
            <div class="footer-area section-bg mt-5">
                <div class="container">
                    <div class="footer-top footer-padding">
                        <div class="row d-flex justify-content-between">
                            <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                                <div
                                    class="single-footer-caption">
                                   
                                    <div class="footer-logo">
                                        <a href="index.html"><img width="30%" height="auto" src="assets/img/logos/utpuebla.png" alt=""/></a>
                                    </div>
                                    <div class="footer-tittle">
                                        <div class="footer-pera">
                                            <p class="info1">
                                                “Proporcionar Educación Superior Tecnológica a través de programas intensivos de estudio, pertinentes e integrales, acordes a los avances científicos y tecnológicos para formar profesionistas competitivos con sentido humano, que fortalezcan los procesos de los sectores productivo y de servicios a nivel regional y nacional que coadyuven al desarrollo social.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                                <div class="single-footer-caption">
                                    <div class="footer-tittle">
                                        <h4>Páginas
                                        </h4>
                                        <ul>
                                            <li><a href="#">Inicio</a></li>
                                            <li><a href="">Descubre</a></li>
                                            <li><a href="">Autoevaluación</a></li>
                                            <li><a href="">Canal YouTube</a></li>
                                            <li><a href="">Contacto</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                                <div class="single-footer-caption">
                                    <div class="footer-tittle">
                                        <h4>Explorar</h4>
                                        <ul>
                                            <li><a href="">Cookies</a></li>
                                            <li><a href="">Politicas de privacidad</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <div class="single-footer-caption">
                                    <div class="footer-tittle">
                                        <h4>Nosotros</h4>
                                        <div class="footer-pera">
                                            <p class="info1">
                                                Comunícate con los cuerpos académicos encargados para resolver alguna situación.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="footer-number">
                                        <h4>
                                            <span id="correos">Correos</span> <span id="electronicos">electrónicos</span></h4>
                                        <p>cuestionario@utpuebla.edu.mx<br/>
                                            cuerpoacademico1@utpuebla.edu.mx<br/>
                                            cuerpoacademico2@utpuebla.edu.mx</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="line"></div>
                    <hr></hr>
                    <div id="footer-bottom">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-xl-9 col-lg-8">
                                
                                <div class="footer-copy-right">
                                    <p>
                                        
                                        Universidad Tecnológica de Puebla &copy;<script>
                                            document.write(new Date().getFullYear());
                                        </script>
                                        Todos los derechos reservados | <a href="creditos.html">Créditos</a> &nbsp;
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                    </p>
                                </div>
                                
                            </div>
                            <div
                                class="col-xl-3 col-lg-4">
                               
                                <div class="footer-social f-right">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fas fa-globe"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
        </>
    )
}
export default Footer;