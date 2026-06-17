import {BrowserRouter, Routes, Route} from 'react-router'
import { Header } from '../src/components/Header/Header'
import './style.css'
import { Content } from '../src/components/Content/Content'
import { Cardapio } from './components/Cardapio/Cardapio'
function App() {


  return (
    <>
          <BrowserRouter>
            <Content/>

          <Routes>
            <Route path='/reservar'></Route>
            <Route path='/cardapio' element={<Cardapio/>}></Route>
          </Routes>
          </BrowserRouter>
            
    </>
  )
}

export default App
