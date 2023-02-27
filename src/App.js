
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Index from './pages/Index';
import Questionnaire from './components/especificos/contenedor_pregunta/cuestionario/Questionnaire';
import { json } from 'react-router-dom';
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
    <Questionnaire questions={jsoni}/>
    <Footer/>
    </div>
  );
}

export default App;
