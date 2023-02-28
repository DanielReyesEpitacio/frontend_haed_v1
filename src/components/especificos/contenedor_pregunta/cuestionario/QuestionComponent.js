
import ReponseComponent from './ResponseComponent';


/*
    Un componente 'QuestionComponent' representa un contenedor para una pregunta con un conjunto de respuesta.
    Debe recibir las propiedades de groupControl; para crear un grupo de radio buttons, question; correspondiente a la pregunta, y response; el cual debe ser un array, representan las respuestas para la pregunta.
    El 'QuestionComponent' devulve un contenedor con una pregunta y un conjunto de posibles respuestas.

    Ejemplo de propiedades válidas.
    groupControl = 1
    question = "pregunta"
    response = ["a","b","c"]
*/
function QuestionComponent(props){

    const radioGroup= props.groupControl;
    return(
        <div class="col-sm-12 col-md-12">
            <p class="text-light">{props.question}</p>
            <fieldset id={radioGroup}>
            {
                props.response.map(elem=>(
                    <ReponseComponent response={elem} group={radioGroup}/>
                ))
            }
            </fieldset>
        </div>
    );
}

export default QuestionComponent;