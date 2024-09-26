import GlobalStyle, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Tasklist from './containers/Tasklist'
import { Provider } from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Tasklist />
      </Container>
    </Provider>
  )
}

export default App
