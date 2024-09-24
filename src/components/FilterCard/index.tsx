import * as S from './styles'

// para receber a propriedade ativo (true/false) para o card
export type Props = {
  ativo?: boolean
  counter?: number
  label?: string
}

const FilterCard = ({ ativo, counter = 0, label }: Props) => (
  <S.Card ativo={ativo}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{label}</S.Label>
  </S.Card>
)

export default FilterCard
