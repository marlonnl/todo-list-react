import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
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

export default Sidebar
