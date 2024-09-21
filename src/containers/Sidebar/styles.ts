import styled from 'styled-components'

// estilo da barra lateral
export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

// estilo do container dos filtros
export const Filters = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`

// estilo do input
export const Input = styled.input`
  border-radius: 8px;
  padding: 8px;
  color: #666;
  border-color: #666;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`
