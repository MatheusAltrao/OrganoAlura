import React from 'react'
import './listaSuspensa.css'
const ListaSuspensa = ({ title, iten, alterado, value }) => {
  return (
    <div className='lista-suspensa' >
      <label>
        <span>{title}</span>
      </label>

      <select onChange={ev => alterado(ev.target.value)} value={value} >
        <option value=""></option>
        {iten.map(item => <option key={item} > {item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa