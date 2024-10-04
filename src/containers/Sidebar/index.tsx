import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filter'
import { useNavigate } from 'react-router-dom'

import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'
import { Button, Campo } from '../../styles'

type Props = {
  mostrarFiltro: boolean
}

const Sidebar = ({ mostrarFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {mostrarFiltro ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />

            <S.Filters>
              <FilterCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                label={'pendentes'}
              />
              <FilterCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                label={'concluídas'}
              />
              <FilterCard
                valor={enums.Priority.URGENTE}
                criterio="priority"
                label={'urgentes'}
              />
              <FilterCard
                valor={enums.Priority.IMPORTANTE}
                criterio="priority"
                label={'importantes'}
              />
              <FilterCard
                valor={enums.Priority.NORMAL}
                criterio="priority"
                label={'normal'}
              />
              <FilterCard criterio="todas" label={'todas'} />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar para a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
