import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { Container } from './styles'
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

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;{termo}&quot;</p>
      <p>
        {termo}, {criterio}, {valor}
      </p>
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
    </Container>
  )
}

export default Tasklist
