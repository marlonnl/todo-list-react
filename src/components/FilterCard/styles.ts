import styled from 'styled-components'

type Props = {
  ativo: boolean
}

// personalização dos cards para filtragem de busca
export const Card = styled.div<Props>`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  cursor: pointer;
`
export const Counter = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`
export const Label = styled.span`
  font-size: 14px;
`
