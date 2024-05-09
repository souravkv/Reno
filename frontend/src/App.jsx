
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import { SignUp } from './pages/Signup'
import {  Send } from './pages/Send'
import { Dashboard } from './pages/Dashboard'
import { SignIn } from './pages/SignIn'
import { Done } from './pages/Done'

function App() {

  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>} ></Route>
      <Route path='/send' element={<Send/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>} ></Route>
      <Route path='/signin' element={<SignIn/>} ></Route>
      <Route path="/done"  element={<Done/>} ></Route>
      <Route path="/"  element={<SignIn/>} ></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
