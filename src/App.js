
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
<<<<<<< HEAD
import Login from './pages/login';
=======
import Index from './pages/Index';
import Questionnaire from './components/especificos/contenedor_pregunta/cuestionario/Questionnaire';
import { json } from 'react-router-dom';
>>>>>>> d7146d34530c0c88145a1c11f69ab257c7e38cd3
function App() {

  // PARA EJEMPLO DEL COMPONENTE 'QUESTIONNAIRE'
  const jsoni = [
    {
        pregunta: "Pregunta 1",
        response: ["a", "b", "c"]
    },
    {
        pregunta: "Pregunta 2",
        response: ["a", "b", "c"]
    },
    {
        pregunta: "Pregunta 3",
        response: ["a", "b", "c"]
    }
]



  return (
    <div class="container">
    <Header />
    <Nav/>
<<<<<<< HEAD
    <Login/>
=======
    <Questionnaire questions={jsoni}/>
>>>>>>> d7146d34530c0c88145a1c11f69ab257c7e38cd3
    <Footer/>
    </div>
  );
}

export default App;
