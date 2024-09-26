import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { Container } from './styles'
import Task from '../../components/Task'

const Tasklist = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tarefas marcadas como: </p>
      <ul>
        {tasks.map((i) => (
          <li key={i.title}>
            <Task
              title={i.title}
              description={i.description}
              priority={i.priority}
              status={i.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Tasklist
