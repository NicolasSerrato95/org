// import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) /* ese props prepara para recibir el estado en app  */=> {
    //Estado - hooks - useState()
    //Funcionalidades que Nos ayuda a trabajar con el conportamiento de react 
    //const [nombreVariable, FuncionActualiza] = useState(valorInicial)
    //const [nombre, actualizarNombre] = useState("nicko")

    // const [mostrar, ActualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("hola")
    //     ActualizarMostrar(!mostrar)
    //     //!mostrar hace que invierta el true definido a false y este cambiando como un interruptor
    // }
    
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg