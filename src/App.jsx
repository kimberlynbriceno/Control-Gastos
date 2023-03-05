import { useState, useEffect } from 'react'
import {generarId} from "./Helpers/"
import Header from './component/Header'
import IconoGastoNuevo from './img/nuevos-gasto.svg'
import VentanaModal from './component/VentanaModal'
import NuevoPresupuesto from './component/NuevoPresupuesto'
import ListadoGastos from './component/ListadoGastos'
import { object } from 'prop-types'

function App() {

  const [presupuesto, setPresupuesto]= useState(0);
  const [isValid, setIsValid]=useState(false)

  const[ modal , setModal] = useState(false)
  const [animarModal , setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const [gastoEditar, setGastoEditar]= useState({})


  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)        
      setTimeout(() => {
        setAnimarModal(true)
      },500)
   
    }
  },[gastoEditar])


  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    
    setTimeout(() => {
      setAnimarModal(true)
    },500)
 }

    const guardarGasto  = gasto => {
      if(gasto.id){
        const gastoActualizados = gastos.map( gastoState => gasto.id ? gasto : gastoState)

        setGastos(gastoActualizados)
        console.log(gasto)

      }else{
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


  return (
    <div className={modal ? "fijar" : ""}>
      
      <Header
      gastos={gastos}
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValid={isValid}
      setIsValid={setIsValid}
      />
      
      {isValid ? (
        
       <> 
       <main>
          <ListadoGastos
          gastos={gastos}
          setGastoEditar={setGastoEditar}
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
      />}
   
    </div>
    )
   
}
export default App
