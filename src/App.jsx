import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/Accordian'
import RandomColour from './components/Accordian/RandomColour'

function App() {

  return (
    <>
      <div className='app__main'>
        <Accordian />
        <RandomColour/>
      </div>
    </>
  )
}

export default App
