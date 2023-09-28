import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba"; //se instala en powershell con npm i hex-to-rgba
//le agrega opacidad a los colores

const Equipo = (props) => {
    //Destructuracion
    // en vez de escribir props.datos.colorSecundario = colorSecundario
    const { colorPrimario, colorSecundario, titulo, id} = props.datos

    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    //es lo mismo que decir props.colaboradores pero se simplifica solo al nombre quitando props

    const obj = {
        //es lo mismo que tener backgroundColor: props.datos.colorSecundario
        backgroundColor: hexToRgba(colorPrimario, 0.6) /* colorSecundario */
    }

    return <>
        {
            colaboradores.length > 0 && 
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input"
                    value={colorPrimario}   
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                {/* datos seria el objeto y .titulo accede a los datos */}
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section> 
        }
    </>    
}

export default Equipo;