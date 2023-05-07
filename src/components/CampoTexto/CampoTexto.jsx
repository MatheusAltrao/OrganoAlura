import React, { useState } from 'react'
import './campoTexto.css'

const CampoTexto = ({ title, placeholder, required, value, alterado }) => {

  const aoDigitado = (ev) => {
    alterado(ev.target.value)
  }

  return (
    <label>
      <span>{title} </span>
      <input onChange={aoDigitado} value={value} type="text" placeholder={placeholder} required={required} />
    </label>
  )
}

export default CampoTexto