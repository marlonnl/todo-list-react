import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

const Task = ({ description, title, priority, status }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.TaskCard>
      <S.Title>{title}</S.Title>
      <S.Tag priority={priority}>{priority}</S.Tag>
      <S.Tag status={status}>{status}</S.Tag>
      <S.Description value={description} />

      <S.ActionBar>
        {isEditing ? (
          <>
            <S.ButtonSalvar>Salvar</S.ButtonSalvar>
            <S.ButtonCancelarRemover onClick={() => setIsEditing(false)}>
              Cancelar
            </S.ButtonCancelarRemover>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.ButtonCancelarRemover>Remover</S.ButtonCancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.TaskCard>
  )
}

export default Task
