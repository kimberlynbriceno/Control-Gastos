import React, { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

function ControlPresupuesto({presupuesto,gastos}) {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [mensaje, setMensaje] = useState("")
    const [porcentaje, setPorcentaje] = useState(10)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado

        if(totalDisponible < 0){
            setMensaje("ESTE GASTO SUPERO TU PRESUPUESTO")

            setTimeout(()=> {
                setMensaje("")
            }, 4000)
        }
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto)* 100).toFixed(2);  
        
        setGastado(totalGastado)
        setDisponible(totalDisponible)
        setTimeout(() =>{
            setPorcentaje(nuevoPorcentaje)
        }, 1000)

    }, [gastos])
    

     const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }

 

    return ( 
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
            <CircularProgressbar
            styles={buildStyles({
            pathColor: '#37CF83',
            strokeLinecap : 'butt' ,
            textColor: '#37cf83' 

            })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
             />

            </div>



                    <div className="contenido-presupuesto">    
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <p>
                    <span> Presupuesto:</span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span> Disponible:</span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span> Gastado:</span> {formatearCantidad(gastado)}  
                </p>
            </div>
        </div>
     );
}

export default ControlPresupuesto ;
export const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {style:"currency", currency:"USD"});
}