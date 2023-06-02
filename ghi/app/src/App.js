import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import MainPage from './MainPage'
import ShoeList from './ShoeList'
import ShoeForm from './ShoeForm'
import Nav from './Nav'


function App(props) {
  if (props.shoes === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />  
          <Route path="shoes" element={<ShoeList shoes={props.shoes} />} />
          <Route path="shoes/new" element={<ShoeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
