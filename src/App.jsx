import { useState } from 'react'
import Header from './component/Header'
import {generarId} from "./Helpers/"
import IconoGastoNuevo from './img/nuevos-gasto.svg'
import VentanaModal from './component/VentanaModal'
import NuevoPresupuesto from './component/NuevoPresupuesto'
import ListadoGastos from './component/ListadoGastos'

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
      gasto.fecha = Date.now();

      setGastos([...gastos, gasto])
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
      />}
   
    </div>
    )
   
}
export default App
