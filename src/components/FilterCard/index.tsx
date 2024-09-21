import * as S from './styles'

// para receber a propriedade ativo (true/false) para o card
export type Props = {
  ativo?: boolean
}

const FilterCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Counter>3</S.Counter>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default FilterCard
