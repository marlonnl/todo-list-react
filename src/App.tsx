import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Tasklist from './containers/Tasklist'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Tasklist />
      </Container>
    </>
  )
}

export default App
