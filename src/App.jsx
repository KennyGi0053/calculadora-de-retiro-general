import './App.css'
import Navbar from '../components/Navbar'
import Calculadora from '../components/Calculadora'
import Formulario from '../components/Formulario'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {


  return (
  <div>
  <Navbar/>  
  <Calculadora/>
  <Formulario/>
  <ToastContainer position="top-center" autoClose={3000} />
  </div>
  )
}

export default App
