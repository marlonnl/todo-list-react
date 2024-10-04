import AddButton from '../../components/AddButton'
import Sidebar from '../../containers/Sidebar'
import Tasklist from '../../containers/Tasklist'

const Home = () => (
  <>
    <Sidebar mostrarFiltro />
    <Tasklist />
    <AddButton />
  </>
)

export default Home
