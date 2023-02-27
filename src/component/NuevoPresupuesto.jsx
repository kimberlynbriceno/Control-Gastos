import React from "react";
import { useState } from "react";
import Mensaje from "./Mensaje";


function NuevoPresupuesto ({presupuesto,setPresupuesto,setIsValid}) {

const [mensaje, setMensaje]= useState("")

const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!Number(presupuesto) || Number(presupuesto) < 0 ){
        setMensaje("No es un presupuesto valido ")

    return
    } else{
        setMensaje("")
    setIsValid(true)
    }
    
}



    return ( 
     <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto}  className="formulario">
                <div className="campo">
                    <h3>Definir presupuesto</h3>
                   
                    <input
                        className="nuevo-presupuesto"
                        type="Number"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                        
                    />
                </div>
                    <input type="submit" value="añadir"/>
                    {mensaje && <Mensaje tipo="error" >{mensaje}</Mensaje>}
            </form>
        </div>
     );
}

 export default NuevoPresupuesto ;