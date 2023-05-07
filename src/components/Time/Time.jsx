import React from 'react'
import './time.css'
import Colaborador from '../Colaborador/Colaborador'

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {



  return (

    (colaboradores.length > 0) &&
    <section className='time' style={{ backgroundColor: corSecundaria }} >
      <h3 style={{ borderColor: corPrimaria }} >{nome}</h3>

      <div className='cards' >
        {colaboradores.map((item, index) => (
          <Colaborador key={index} nome={item.nome} imagem={item.imagem} cargo={item.cargo} corPrimaria={corPrimaria} />
        ))}

      </div>

    </section>
  )
}

export default Time