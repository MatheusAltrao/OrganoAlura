import { useState } from 'react'
import './App.css'
import Forms from './components/Forms/Forms'
import Time from './components/Time/Time'


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'

    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'

    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'

    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'

    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'

    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'

    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'

    },
  ]


  const [colaboradores, setColaboradores] = useState([])

  const novoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="app">

      <div className='area-form' >
        <Forms times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaborador(colaborador)} />
      </div>


      {times.map((time) => (
        <Time key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
        />
      ))}
    </div >
  )
}

export default App
