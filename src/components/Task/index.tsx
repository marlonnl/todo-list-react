import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { remove, edit, alteraStatus } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { Button, ButtonSalvar } from '../../styles'

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

  function alteraStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: e.target.checked }))
  }

  return (
    <S.TaskCard>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          onChange={alteraStatusTarefa}
          checked={status === enums.Status.CONCLUIDA}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
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
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
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
