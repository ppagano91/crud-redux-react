import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUser'

function App() {

  return (
    <>
      <h1>CRUD - REDUX</h1>
      <ListOfUsers/>
      <CreateNewUser/>
      <Toaster richColors />
    </>
  )
}

export default App
