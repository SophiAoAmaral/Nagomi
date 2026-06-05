import {BrowserRouter, Routes, Route} from 'react-router'
import { Header } from './components/Header'
import { Sobre } from './components/Sobre'
import './style.css'
function App() {


  return (
    <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="sobre" element={<Sobre/>}/>
          </Routes>
          
          </BrowserRouter>
            
    </>
  )
}

export default App
