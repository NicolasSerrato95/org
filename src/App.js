import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

//NPM RUN BUILD CONSTRUYE EL PROGRAMA Y LO ARREGLA, LO DEVUELVE EN UNA CARPETA. en el powershell******  

function App() {
  //UseState siempre va dentro de una funcion y antes del return
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{ 
    id: uuidv4(),
    nombre: "Harland", 
    puesto: "Instructor",   
    foto: "https://github.com/harlandlohora.png", 
    equipo  : "Front End",
    fav: true 
  },
  {
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false 
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false 
  },
  {
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true 
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true 
  }]) //[] quiere decir q el estado es un arreglo vacio 
  //pero si se quiere inicializaar el proceso con datos se colocan

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])
  //ActualizarEquipos es la funcion que actualiza el arreglo equipos

  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
    //...colaboradores con ... copia los valores y los lleva de colaborador a colaboradores
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Hola", id)
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id) //!== diferente a lo q esta comparando
    //guarda los colaboradores que tiene diferente id en la nueva variable que seria nuevosColaboradores
    //filter nos regresa un nuevo arreglo sin modificar el orifinal
    actualizarColaboradores(nuevosColaboradores)
    console.log(colaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("actualizar:", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }
  
  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuidv4(  ) }])
    //hace una copia que tiene actualmente equipos y despues va agregar un nuevo objeto
    //el objeto seria lo que e tra que seria titulo y color y se le agrega ahi mismo el id
  }

  const like = (id) => {
    console.log(id)
    const colaboradoresActualizados = colaboradores.map( (colaborador) => {
      if (colaborador.id === id) {
        //al momento que entra el id en like lo iguala y si son iguales procede a cambiar el estado de fav
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
     {/*  {Header()} */}  {/* llamar la funcion */}
      <Header/>
      {/* Ternario - Condicion con la q comienza antes del simbolo ? se muestra : noSeMuestra */}
      {/* condicion && seMuestra */}
      {/* {mostrarFormulario === true ? <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}/> : <></>} es lo mismo*/}
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      
      {/* {mostrarFormulario && <Formulario/>} otra forma de ocualtar o no, es lo mismo simplificado*/}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map( (equipo) => {
          //datos seria la informacion que hay en cada objeto dentor del arreglo
          return <Equipo 
            datos={equipo}  
            key={equipo.titulo} 
            colaboradores={colaboradores.filter( (colaborador) => colaborador.equipo === equipo.titulo)}
            /* para mostrar solo los colaboradores que pertenecen a ese equipo igualandolo */
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
          //filter filtra los datos para q solo queden si son iguales a algo
        })
      }
      <Footer/>
    </div>  
  );
}

export default App;
