import {BrowserRouter, Routes, Route} from 'react-router'
import { Header } from '../src/components/Header/Header'
import './style.css'
import { Content } from '../src/components/Content/Content'
function App() {


  return (
    <>
          <BrowserRouter>
            <Content/>

          <Routes>
            
          </Routes>
          </BrowserRouter>
            
    </>
  )
}

export default App
