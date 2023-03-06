import {useState, useEffect} from 'react'

const Filtro = () => {
  return (
    <div className='filtro sombra contenedor'>
        <form>
            <div className='campo'>
                <label>
                    Filtrar Gastos
                </label>
                <select>
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
        </form>
      
    </div>
  )
}

export default Filtro
