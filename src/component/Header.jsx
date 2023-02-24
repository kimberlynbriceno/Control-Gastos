import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";


function Header({presupuesto, setPresupuesto, isValid, setIsValid}) {
    return ( 
        
        <header>
            <h1>
            Planificador de gastos
            </h1>

         {  isValid ? (
            <p>Control gastos</p> 
        ) :(
         <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValid={setIsValid}
            /> )}

        
        </header>
            
        
        
     );
}

export default Header;