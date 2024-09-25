import Task from '../../components/Task'
import { Container } from './styles'

import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'estudar typescript',
    description: 'ver a aula 3 da EBAC',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    title: 'pagar tenis',
    description: 'mil reais',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    title: 'fazer feijao',
    description: 'feijoadinha',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    title: 'comer pizza',
    description: 'hummmm',
    priority: enums.Priority.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const Tasklist = () => {
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
