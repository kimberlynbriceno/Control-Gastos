import { useState } from "react"
import Mensaje from "./Mensaje"
import imgCerrar from "../img/cerrar.svg"


function VentanaModal ({setModal, animarModal, setAnimarModal, guardarGasto}){

    const [nombre, setNombre]= useState("")
    const [cantidad, setCantidad]= useState("")
    const [categoria, setCategoria]= useState("")
    const [mensaje, setMensaje] = useState("")


    const CerrarModal = () => {
        
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
           },500)

    }

    const handleSubmit = e => {
        e.preventDefault()

        if([nombre,cantidad,categoria].includes("")){
            setMensaje("todos los campos son obligatorios")

            setTimeout(()=> {
                setMensaje("")
            },3000)

        } else{
            guardarGasto({nombre, cantidad, categoria})
                }
      
    }


  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
        src={imgCerrar} 
        alt="cerrar img"
        onClick={CerrarModal}/>
      </div>

<form 
onSubmit={handleSubmit}
className={`formulario ${animarModal ? "animar" : "cerrar"}`}> 
    <legend>
        Nuevo Gasto
    </legend>

    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

    <div className="campo">
        <label htmlFor="nombre">Nombre Gasto</label>
        <input 
        id="nombre"
        type="text"
        placeholder="Nombra tu nuevo gasto"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
         />
        <label htmlFor="nombre">Cantidad</label>
        <input 
        id="cantidad"
        type="Number"
        placeholder="Ingresa la Cantidad: ej. 300"
        value={cantidad}
        onChange={ e => setCantidad(Number(e.target.value)) }
         />
          <label htmlFor="nombre">Categoria</label>
          <select id="categoria"
                  value={categoria}
                  onChange={ e => setCategoria(e.target.value) }
          >

                <option value="">--Selecione--</option>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Salud">Salud</option>
                <option value="Alimentacion">Alimentacion</option>
                <option value="Ahorro">Ahorro</option>
                <option value="Casa">Casa</option>
                <option value="Suscripciones">Suscripciones</option>
                <option value="Varios">Gastos Varios</option>
          </select>
    </div>
    <input 
    type="submit" 
    value="Añadir Gasto"
    />
</form>


    </div>
  )
}

export default VentanaModal
