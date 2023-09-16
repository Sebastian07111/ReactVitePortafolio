import { Header } from "./Components/Header/Header"
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { Main } from "./Components/Main/Main"
import { Routes, Route } from "react-router-dom"
import { Projects } from "./Components/Projects/Projects"
import { Shop } from "./Components/Shop/Shop"
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Shop" element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
