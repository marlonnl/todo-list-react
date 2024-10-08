import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  /* css reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 80vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
  display: block;
`

// estilo do input
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  color: #666;
  border-color: #666;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`

// editar, cancelar, salvar, remover
export const Button = styled.button`
  color: #fff;
  background-color: ${variables.darkBlue};
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

  &:hover {
    background-color: rgba(68, 189, 50, 0.9);
  }
`

export default GlobalStyle
