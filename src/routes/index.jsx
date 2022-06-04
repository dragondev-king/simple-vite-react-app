import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Welcome from './Welcome'
import Profile from './Profile'

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<Welcome />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main
