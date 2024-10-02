import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remove, edit } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { ButtonSalvar } from '../../styles'

type Props = TaskClass

const Task = ({
  description: originalDescription,
  title,
  priority,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEdit() {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  return (
    <S.TaskCard>
      <S.Title>{title}</S.Title>
      <S.Tag param="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag param="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSalvar
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    id,
                    title,
                    priority,
                    status
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </ButtonSalvar>
            <S.ButtonCancelarRemover onClick={() => cancelEdit()}>
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
