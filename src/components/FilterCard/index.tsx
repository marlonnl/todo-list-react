import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

// para receber a propriedade ativo (true/false) para o card
export type Props = {
  counter?: number
  label?: string
  criterio: 'status' | 'todas' | 'priority'
  valor?: enums.Priority | enums.Status
}

const FilterCard = ({ label, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const filtroEstaAtivo = () => {
    const sameCriterio = filter.criterio === criterio
    const sameValor = filter.valor === valor

    // retorna boolean se ambos forem iguais
    return sameCriterio && sameValor
  }

  const taksCounter = () => {
    if (criterio === 'todas') return tasks.itens.length
    if (criterio === 'priority') {
      return tasks.itens.filter((item) => item.priority === valor).length
    }
    if (criterio === 'status') {
      return tasks.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
    // console.log(criterio, valor)
  }

  const ativo = filtroEstaAtivo()
  const counter = taksCounter()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FilterCard
