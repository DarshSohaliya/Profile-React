import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './components/Profile'
import { RecoilRoot } from 'recoil'
function App() {

  return (
    <RecoilRoot>
      <Profile/>        
    </RecoilRoot>
  )
}

export default App
