/*
    Un componente 'ResponseComponent' representa una respuesta de una pregunta. Está conformado por un radio button y una descripcion de la respuesta.
    
*/
function ResponseComponent(props){
    return(
        <div class="col-sm-12 col-md-12">
            <div class="row text-light">
            <span><input type="radio" name={props.group}/>{props.response}</span>
            </div>
        </div>
    );
}

export default ResponseComponent;