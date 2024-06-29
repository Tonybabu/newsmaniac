import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import News from './pages/News'
import { Route,Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <NavBar/>}
     <Routes>
      <Route path='/' element={<News news="india" />} />
      <Route path='/ipl' element={<News news="ipl" />} />
      <Route path='/finance' element={<News news="finance" />} />
      <Route path='/politics' element={<News news="politics" />} />
      <Route path='/movie' element={<News news="movies" />} />
      <Route path='/technology' element={<News news="technology" />} />
      <Route path='/celeb' element={<News news="celebrities" />} />
      <Route path='/:searchNews' element={<News news="nothing" />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>} />
     </Routes>
    </>
  )
}

export default App
