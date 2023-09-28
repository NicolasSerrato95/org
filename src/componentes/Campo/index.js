import "./Campo.css";

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    /* `${props.placeholder}...` se llama concatenar y es la misma forma q props.placeholder + "..."*/

    //Destructuracion
    const { type = "text" } = props  
    //en caso que type no este definido se declara como text a diferencia a la que tiene color como valor

    const manejarCambio = (e) => {
        //e.target.value muestra el valor
        props.actualizarValor(e.target.value)

    }

    return <div className={`campo campo-${type}`}> {/* concatenar */}
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;