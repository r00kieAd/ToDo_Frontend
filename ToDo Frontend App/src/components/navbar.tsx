import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import profile from '/src/assets/user.png';
function NavBar() {
    return (<>
        <div id="navbar" className='nunito-font'>
          <div id="nav">
            <div id="logo">
                <img src={logo} alt="" />
            </div>
            <div id="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Lists</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>
            <div id="profile">
                <button><img src={profile} alt="" /></button>
            </div>
          </div>
        </div>
    </>)
}

export default NavBar;