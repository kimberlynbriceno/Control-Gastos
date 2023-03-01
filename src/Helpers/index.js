
export const generarId=()=>{
 const random = Math.random().toString(32).substr(4)
 const fecha = Date.now().toString(22)
 return random + fecha
}