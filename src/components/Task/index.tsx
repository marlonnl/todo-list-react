import * as S from './styles'

const Task = () => (
  <>
    <S.TaskCard>
      <S.Title>Nome da tarefa</S.Title>
      <S.Tag>importante</S.Tag>
      <S.Tag>importante</S.Tag>
      <S.Description />

      <S.ActionBar>
        <S.Button>Editar</S.Button>
        <S.Button>Remover</S.Button>
      </S.ActionBar>
    </S.TaskCard>
  </>
)

export default Task
