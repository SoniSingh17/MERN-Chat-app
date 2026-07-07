import { Route ,Routes , Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
   const {AuthUser} = useAuthContext();
  

  return  (
   
    <div className='p-4 h-screen flex items-center  justify-center bg-[#0B141A]'>
      <Routes>
        <Route path='/' element={AuthUser ? <Home/> : <Navigate to = '/login'/>}/>
        <Route path='/login' element={AuthUser ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/signup' element={AuthUser ? <Navigate to='/'/> : <SignUp/>}/>
      </Routes>
      <Toaster/>
      


    </div>
    
  )
   
}

export default App
