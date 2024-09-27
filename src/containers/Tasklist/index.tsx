import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { Container } from './styles'
import Task from '../../components/Task'

const Tasklist = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { termo } = useSelector((state: RootReducer) => state.filter)

  const taskFilter = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;{termo}&quot;</p>
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
