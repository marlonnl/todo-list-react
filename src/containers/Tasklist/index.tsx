import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'
import Task from '../../components/Task'

const Tasklist = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const taskFilter = () => {
    let tarefasFiltradas = itens

    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.title.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'priority') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.priority === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const filterTextResult = (total: number) => {
    let message = ''
    const comp = termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
    const criterioTraduzido =
      criterio === 'priority' ? `prioridade=${valor}` : `${criterio}=${valor}`

    if (criterio === 'todas') {
      message = `${total} tarefa(s) encontradas como todas ${comp}`
    } else {
      message = `${total} tarefa(s) encontradas como ${criterioTraduzido} ${comp}`
    }

    return message
  }

  const totalTasks = taskFilter()
  const taskMessage = filterTextResult(totalTasks.length)

  return (
    <MainContainer>
      <Titulo as="p">{taskMessage}</Titulo>

      <ul>
        {taskFilter().map((i) => (
          <li key={i.title}>
            <Task
              title={i.title}
              description={i.description}
              priority={i.priority}
              status={i.status}
              id={i.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Tasklist
