import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";

function ControlPresupuesto({presupuesto,gastos}) {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [mensaje, setMensaje] = useState("")

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado

        if(totalDisponible < 0){
            setMensaje("ESTE GASTO SUPERO TU PRESUPUESTO")
        }

        setGastado(totalGastado)
        setDisponible(totalDisponible)


    }, [gastos])
    

     const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString("en-US", {style:"currency", currency:"USD"});
    }

 

    return ( 
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica aqui</p>
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