import {useState, useEffect} from 'react'

const Filtro = ({filtros, setFiltros}) => {


  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>
                    Filtrar Gastos
                </label>
                <select 
                    value={filtros}
                    onChange={e => setFiltros(e.target.value)}
                    >


                <option value="">--TODAS LAS CATEGORIAS--</option>
                <option value="Entretenimiento">Entretenimiento</option>
                <option value="Salud">Salud</option>
                <option value="Alimentacion">Alimentacion</option>
                <option value="Ahorro">Ahorro</option>
                <option value="Casa">Casa</option>
                <option value="Suscripciones">Suscripciones</option>
                <option value="Varios">Gastos Varios</option>
                </select>
            </div>
        </form>
      
    </div>
  )
}

export default Filtro
