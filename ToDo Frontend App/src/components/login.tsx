function Login() {
    return (
        <>
            <div id="loginDiv" className="user-info">
                <div id="welcomeBack" className="wlcm nunito-font">
                    <h2>WELCOME BACK</h2>
                    <p>Please enter your details.</p>
                </div>
                <div className="infoentry">
                    <div className="inputs">
                        <div className="form__group nunito-font">
                            <input type="text" name="user" id="usr" className="form__field" placeholder="Username" required />
                            <label htmlFor="usr" className="form__label">Username</label>
                        </div>
                        <div className="form__group nunito-font">
                            <input type="password" name="pass" id="pass" className="form__field" placeholder="Password" required />
                            <label htmlFor="pass" className="form__label">Password</label>
                        </div>
                    </div>
                    <div id="lgnBtn" className="submit-info-div">
                        <div id="login" className="submit-info">
                            <button type="submit" id="lgn">Login</button>
                        </div>
                    </div>
                    <div id="loginErrors">
                        <div className="user-input-error">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;