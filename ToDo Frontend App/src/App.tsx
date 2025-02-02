import { useState } from 'react'
import NavBar from './components/navbar'
import illustration from '/src/assets/notes.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app">
        <div id="navcontainer">
          <NavBar />
        </div>
        <div id="introdiv">
          <div id="introTextContainer" className='nunito-font'>
            <div id="heading">
              <h1></h1>
            </div>
            <div id="intro">
              <p>“Stay organized and focused effortlessly. Manage tasks with ease, one step at a time.”</p>
            </div>
            <div id="loginbuttoncontainer">
              <div>
                <button className='nunito-font' id="login">Login</button>
                <button className='nunito-font' id="signup">Register</button>
              </div>
            </div>
          </div>
          <div id="introIllustration">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
