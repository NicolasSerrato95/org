import "./ListaOpciones.css";

const ListaOpciones = (props) => {
    //Metodo para jsx map -> arreglo.map( (equipos, posicion) => { 
    //    return <option></option>    
    //Metodo para jsx map para recorrer un arreglo que en este caso seria equipos

    /* const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ] */

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="listaOpciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map( (equipo,index) => { //map trabaja con key q neccesita un identificador unico
            //equipo representa el objeto que hay dentro del arreglo y index representaria la posicion 
                return <option key={index}>{equipo}</option> //{} permite colocar termino javascrip en jsx
            })}
        </select>
    </div>
}

export default ListaOpciones;