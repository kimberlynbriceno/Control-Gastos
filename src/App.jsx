import { useState, useEffect } from 'react'
import {generarId} from "./Helpers/"
import Header from './component/Header'
import IconoGastoNuevo from './img/nuevos-gasto.svg'
import VentanaModal from './component/VentanaModal'
import NuevoPresupuesto from './component/NuevoPresupuesto'
import ListadoGastos from './component/ListadoGastos'
import { object } from 'prop-types'
import Filtro from './component/Filtro'

function App() {

  const [presupuesto, setPresupuesto]= useState(   
     Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValid, setIsValid]=useState(false)

  const[ modal , setModal] = useState(false)
  const [animarModal , setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
 
  const [gastoEditar, setGastoEditar]= useState({}) 
  const [filtros, setFiltros] = useState("")    
  const [gastosFiltrados, setGastosFiltrados] = useState([])


  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)        
      setTimeout(() => {
        setAnimarModal(true)
      },500)
   
    }
  },[gastoEditar])
  
  useEffect(() => {
    
    localStorage.setItem('presupuesto', presupuesto ?? 0); 
  },[presupuesto])

useEffect(()=> {
  localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
},[gastos])

  useEffect(() =>{
    // presupuesto en local storage
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS > 0){
      setIsValid(true)
    }
  },[]) 

  useEffect(() => {
    // filtrar gastos
    if(filtros){
        const gastosFilt = gastos.filter(gasto => gasto.categoria === filtros)
        setGastosFiltrados(gastosFilt)
      }
  },[filtros])

  const handleNuevoGasto = () => {
    // boton + nuevo gasto
    setModal(true)
    setGastoEditar({})
    
    setTimeout(() => {
      setAnimarModal(true)
    },500)
 }

    const guardarGasto  = gasto => {
    
      if(gasto.id){
        // actializar
        const gastoActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)

        setGastos(gastoActualizados)
        setGastoEditar({})
      }else{ 
        // gasto nuevo
        gasto.id = generarId()
        gasto.fecha = Date.now();
  
        setGastos([...gastos, gasto])
        }  
      console.log(gasto)
      setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        },500)
    }

    const eliminarGasto = (id) =>{
      const gastoActualizados = gastos.filter(gasto => gasto.id != id)
    setGastos(gastoActualizados)
    }

  return (
    <div className={modal ? "fijar" : ""}>
      
      <Header
      gastos={gastos}
      setGastos={setGastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValid={isValid}
      setIsValid={setIsValid}
      />
      
      {isValid ? (
        
       <> 
       <main>
        <Filtro
        filtros={filtros}
        setFiltros={setFiltros}/>

          <ListadoGastos
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
          filtros={filtros}
          gastosFiltrados={gastosFiltrados}

          />
       </main>
       <div className='nuevo-gasto'>
       <img 
       src={IconoGastoNuevo} 
       alt="icono nuevo gasto"
       onClick={handleNuevoGasto}/>
       </div> </> ) : null
      }

      {modal && 
      <VentanaModal
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
      gastoEditar={gastoEditar}
      setGastoEditar={setGastoEditar}
      />}
   
    </div>
    )
   
}
export default App
