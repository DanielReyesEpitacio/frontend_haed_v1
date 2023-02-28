import QuestionComponent from "./QuestionComponent";
import '../../../../css/constantes/Colors.css'
import { useState } from "react";

/*
    Un componente 'Question' representa un contendor para el cuestionario.
    Debe recibir un array de JSON (Objecto). Cada objecto dentro del array debe contener las claves: pregunta, respuesta o -cualquier clave personalizada-.
    El componente 'Question' se encarga de devolver un cuestionario completo.

    Ejemplo de un array de json JSON válido.

    [
        {
            pregunta: "",
            respuestas: ["","",""]
        },
        {
            pregunta: "",
            respuestas: ["","",""]
        }

    ]

*/
function Questionnaire(props){

    return(
        <div className="container bg-utpcolor mt-5 mb-5" >
            <div>
                {
                    props.questions.map((elem,index)=>(
                        <QuestionComponent question={elem.pregunta} response={elem.response} groupControl={index}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Questionnaire;