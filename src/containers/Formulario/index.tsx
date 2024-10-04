import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrar } from '../../store/reducers/tasks'

import { ButtonSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'

import * as enums from '../../utils/enums/Task'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const addTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      cadastrar({
        title,
        priority,
        status: enums.Status.PENDENTE,
        description
      })
    )
    // volta para a pagina inicial
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={addTask}>
        <Campo
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="nome/título"
        />
        <Campo
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          placeholder="descrição"
        />

        <Opcoes>
          <p>Prioridade</p>

          {Object.values(enums.Priority).map((priority) => (
            <Opcao key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
              />
              <label htmlFor={priority}>{priority}</label>
            </Opcao>
          ))}
        </Opcoes>

        <ButtonSalvar type="submit">Adicionar</ButtonSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
