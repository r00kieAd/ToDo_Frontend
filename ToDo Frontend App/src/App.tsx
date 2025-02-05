import { useRef, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/navbar';
import Login from './components/login';
import SignUp from './components/signup';
import illustration from '/src/assets/notes.png';
import './App.css';

function App() {
  const [loginVisible, setLoginVisible] = useState<boolean>(false);
  const [signupVisible, setsignupVisible] = useState<boolean>(false);
  const userInfoComponents = useRef<HTMLDivElement>(null);

  const displayLogin = () => {
    setLoginVisible(true);
    setsignupVisible(false);
    if (userInfoComponents.current) userInfoComponents.current.style.right = '0';
  }

  const displaySignup = () => {
    setLoginVisible(false);
    setsignupVisible(true);
    if (userInfoComponents.current) userInfoComponents.current.style.right = '0';
  }

  return (
    <>
      <div id="app">
        <div id="app-navcontainer">
          <NavBar />
        </div>
        <div id="appComponents">
          <div ref={userInfoComponents} id="userInfoComponents">
            {loginVisible && !signupVisible && <Login />}
            {signupVisible && !loginVisible && <SignUp />}
          </div>
          {!loginVisible && !signupVisible && <>
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
                  <button className='nunito-font' id="signup" onClick={displaySignup}>Register</button>
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
