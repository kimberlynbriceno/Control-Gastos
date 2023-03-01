import { useState } from 'react'
import Header from './component/Header'
import {generarId} from "./Helpers/"
import IconoGastoNuevo from './img/nuevos-gasto.svg'
import VentanaModal from './component/VentanaModal'
import NuevoPresupuesto from './component/NuevoPresupuesto'


function App() {

  const [presupuesto, setPresupuesto]= useState(0);
  const [isValid, setIsValid]=useState(false)

  const[ modal , setModal] = useState(false)
  const [animarModal , setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    setModal(true)
    
    setTimeout(() => {
      setAnimarModal(true)
    },500)
 }

    const guardarGasto  = gasto => {
      gasto.id = generarId()
      setGastos([...gastos, gasto])
      console.log(gasto)

      setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        },500)
    }


  return (
    <div>
      
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValid={isValid}
      setIsValid={setIsValid}
      />
      
      {isValid ? (
        <div className='nuevo-gasto'>
        <img 
        src={IconoGastoNuevo} 
        alt="icono nuevo gasto"
        onClick={handleNuevoGasto}/>
        </div>) : null
      }

      {modal && 
      <VentanaModal
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto={guardarGasto}
      />}
   
    </div>
    )
   
}
export default App
