import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ description, title, priority, status }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.TaskCard>
      <S.Title>{title}</S.Title>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={status}>
        {status}
      </S.Tag>
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
