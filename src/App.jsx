import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import jar from './assets/images/jamjar.png'
import logo from './assets/images/JamZLogo.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='header'>
        <img id='logo' src={logo}></img>
        <NavBar />
      </div>

      <div class='title-and-body'>
        <div id='react-app-title'>
          <h2 class='JamZ'>JamZ</h2>
          <h1 class='ReactApp'>React App</h1>
        </div>
        <img id='jar' src={jar}></img>
      </div>
    </>
  )
}

export default App
