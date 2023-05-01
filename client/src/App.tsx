import { Fragment } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/Signup'

function App() {

  return (
    <BrowserRouter>
    <Fragment>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Fragment>
    </BrowserRouter>
  )
}

export default App
