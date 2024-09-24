import Task from '../../components/Task'
import { Container } from './styles'

const Tasklist = () => (
  <Container>
    <p>2 tarefas marcadas como: </p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </Container>
)

export default Tasklist
