import Task from '../../components/Task'
import { Container } from './styles'

const tasks = [
  {
    title: 'estudar typescript',
    description: 'ver a aula 3 da EBAC',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'pagar tenis',
    description: 'mil reais',
    priority: 'importante',
    status: 'pendente'
  },
  {
    title: 'fazer feijao',
    description: 'feijoadinha',
    priority: 'importante',
    status: 'concluido'
  },
  {
    title: 'comer pizza',
    description: 'hummmm',
    priority: 'urgente',
    status: 'pendente'
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
