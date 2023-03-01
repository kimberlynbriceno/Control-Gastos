
export const generarId=()=>{
 const random = Math.random().toString(32).substr(4)
 const fecha = Date.now().toString(22)
 return random + fecha
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: "numeric",
        month: "long",
        day: "2-digit",
     
    }
    return fechaNueva.toLocaleDateString("es-ES", opciones)
    
}