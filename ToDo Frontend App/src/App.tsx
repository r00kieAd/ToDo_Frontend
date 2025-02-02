import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './components/login';
import illustration from '/src/assets/notes.png';
import './App.css';

function App() {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);

  const displayLogin = () => {
    setLoginVisible(true);
  }

  return (
    <>
      <div id="app">
        <div id="app-navcontainer">
          <NavBar />
        </div>
        <div id="appComponents">
          {loginVisible && <Login />}
          {!loginVisible && <>
            <div id="introTextContainer" className='nunito-font'>
              <div id="heading">
                <h1></h1>
              </div>
              <div id="intro">
                <p>“Stay organized and focused effortlessly. Manage tasks with ease, one step at a time.”</p>
              </div>
              <div id="loginbuttoncontainer">
                <div>
                  <button className='nunito-font' id="login" onClick={displayLogin}>Login</button>
                  <button className='nunito-font' id="signup">Register</button>
                </div>
              </div>
            </div>
          </>}
          <div id="introIllustration">
            <img src={illustration} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
