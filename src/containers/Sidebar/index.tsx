import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { alteraTermo } from '../../store/reducers/filter'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />

        <S.Filters>
          <FilterCard label={'pendentes'} />
          <FilterCard label={'concluídas'} />
          <FilterCard label={'urgentes'} />
          <FilterCard label={'importantes'} />
          <FilterCard label={'normal'} />
          <FilterCard label={'todas'} ativo />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
