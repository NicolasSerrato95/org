import "./Boton.css";

const Boton = (props) => {
    return <button className="boton">{props.children}</button> 
    // estaria definido o con su nombre crear dentro de formulario y se llama con props.children 
}

export default Boton;