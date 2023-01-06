import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header } from './Components/Header'

import { HomePages } from './Pages/HomePages'
import { Main } from './Pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/header' element={<Header />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
