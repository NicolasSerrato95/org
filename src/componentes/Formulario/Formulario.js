import { useState } from "react";
import "./Formulario.css";
/* import Campo from "../Campo/Campo"; puede crearse con el misnmo nombre*/
import Campo from "../Campo"; /* otra forma de ser llamado cuando se llama index, solo llama la carpeta */
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        //preventDefault() metodo comun que se utiliza mucho en formularios
        //quita la responsabilidad al navegador d eneviar los datos
        //siemrpe se utiiza y sirve para que la pagina no vuelva y cargue al momento de undir el boton
        //maneja el envio
        //se nombra event o e
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo, 
            id: uuidv4()
        }
        props.registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) =>  {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario:  color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            {/* onsubmit cuando se envian los datos se llama la funcion manejarEnvio */}
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}    
            /> {/* asi sea solo required lo toma como true */}
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton>Crear</Boton> {/* se llama con {props.children} ya que seria un hijo del props*/}
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            {/* onsubmit cuando se envian los datos se llama la funcion manejarEnvio */}
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en hex" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"    
            /> {/* asi sea solo required lo toma como true */}
            <Boton>Registrar equipo</Boton> 
            </form>
    </section>
}

export default Formulario;