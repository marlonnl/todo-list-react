import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'

type Props = TaskClass

const Task = ({ description, title, priority, status, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.ButtonCancelarRemover onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancelarRemover>
          </>
        )}
      </S.ActionBar>
    </S.TaskCard>
  )
}

export default Task
