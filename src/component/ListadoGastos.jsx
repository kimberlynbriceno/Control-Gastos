import Gasto from "./Gasto"

const ListadoGastos = ({gastos,
   setGastoEditar,
    eliminarGasto,
     filtros,
      gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? "Gastos" : "Ho hay Gastos aun"}</h2>
      
      {filtros ? (
        gastosFiltrados.map(gasto => ( 
          <Gasto

          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
          />))
      ):(   gastos.map( gasto => (
        <Gasto

        key={gasto.id}
        gasto={gasto}
        setGastoEditar={setGastoEditar}
        eliminarGasto={eliminarGasto}
        />                )        
                    )
        )
      }

  
    </div>
  )
}

export default ListadoGastos
 