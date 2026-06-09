import {BrowserRouter, Routes, Route} from 'react-router'
import { Header } from './components/Header'
import { Sobre } from './components/Sobre'
import {Home} from './components/Home'
import './style.css'
function App() {


  return (
    <>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="sobre" element={<Sobre/>}/>
          </Routes>
          
          </BrowserRouter>
            
    </>
  )
}

export default App
