import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
//en el powershell instalamos npm i react-icons para utilizar iconos de react
//luego importamos import { "codigo del icono" } from "react-icons/ai"


const Colaborador = (props) =>{
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    //Condicion ?(en caso que la condicion) verdadero : falso

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        {/* () => eliminarColaborador(id) se coloca asi para q no se renderice y comience a liminar inicializando la pag. */}
        {/* no se manda a llamar la funcion a menos que le den click por el el arrow funtion */}
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>  
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/> }
        </div>
    </div>
}

export default Colaborador