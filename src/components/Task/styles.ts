import styled from 'styled-components'
import variables from '../../styles/variables'

type TagProps = {
  priority?: string
  status?: string
}

function tagBgColor(props: TagProps): string {
  if ('status' in props) {
    if (props.status === 'pendente') return variables.yellow
    if (props.status === 'concluída') return variables.green
  } else if ('priority' in props) {
    if (props.priority === 'urgente') return variables.red
    if (props.priority === 'importante') return variables.orange
    // if (props.priority === 'normal') return '#ccc'
  }
  return '#ccc'
}

export const TaskCard = styled.div`
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  padding: 16px;
  margin-bottom: 32px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => tagBgColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;

  &:before {
    content: '#';
  }
`

export const Description = styled.textarea`
  font-family: 'Roboto Mono', monospace;
  color: #8b8b88;
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

// editar, cancelar, salvar, remover
export const Button = styled.button`
  color: #fff;
  background-color: #2f3640;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
`

export const ButtonSalvar = styled(Button)`
  background-color: ${variables.green};
`

export const ButtonCancelarRemover = styled(Button)`
  background-color: ${variables.red};
`
