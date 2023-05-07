import React, { useState } from 'react'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './forms.css'

const Forms = ({ colaboradorCadastrado, times }) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')



  const aoSalvar = (ev) => {
    ev.preventDefault()
    colaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <form onSubmit={aoSalvar} >

      <h2>Preencha os dados para criar o card do colaborador.</h2>
      <div className='inputs' >
        <CampoTexto
          title='Nome'
          placeholder='Digite seu nome'
          required={true}
          value={nome}
          alterado={value => setNome(value)}
        />

        <CampoTexto
          title='Cargo'
          placeholder='Digite seu cargo'
          required={true}
          value={cargo}
          alterado={value => setCargo(value)}
        />

        <CampoTexto
          title='Imagem'
          placeholder='Informe o endereço da imagem'
          required={false}
          value={imagem}
          alterado={value => setImagem(value)}
        />

        <ListaSuspensa
          title='Time'
          iten={times}
          required={true}
          value={time}
          alterado={value => setTime(value)}
        />


      </div>

      <button>Criar card</button>
    </form>
  )
}

export default Forms