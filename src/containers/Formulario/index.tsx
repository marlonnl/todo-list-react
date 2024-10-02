import { ButtonSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="nome/título" />
      <Campo as="textarea" placeholder="descrição" />

      <Opcoes>
        <p>Prioridade</p>

        <input name="priority" type="radio" id="normal" />
        <label htmlFor="normal">normal</label>

        <input name="priority" type="radio" id="importante" />
        <label htmlFor="importante">importante</label>

        <input name="priority" type="radio" id="urgente" />
        <label htmlFor="urgente">urgente</label>
      </Opcoes>

      <ButtonSalvar type="submit">Adicionar</ButtonSalvar>
    </Form>
  </MainContainer>
)

export default Formulario
