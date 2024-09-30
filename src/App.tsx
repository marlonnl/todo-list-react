import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import GlobalStyle, { Container } from './styles'

import store from './store'
import Home from './pages/Home'

const rota = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/new',
    element: <p>nova tarefa</p>
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rota} />
      </Container>
    </Provider>
  )
}

export default App
