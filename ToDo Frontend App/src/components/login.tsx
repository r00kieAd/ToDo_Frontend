function Login() {
    return (
        <>
            <div id="loginDiv">
                <div id="welcome" className="nunito-font">
                    <h2>WELCOME BACK</h2>
                    <p>Please enter your details.</p>
                </div>
                <div id="infoentry">
                    <div id="inputs">
                        <div className="form__group nunito-font">
                            <input type="text" name="user" id="usr" className="form__field" placeholder="Username" required />
                            <label htmlFor="usr" className="form__label">Username</label>
                        </div>
                        <div className="form__group nunito-font">
                            <input type="password" name="pass" id="pass" className="form__field" placeholder="Password" required />
                            <label htmlFor="pass" className="form__label">Password</label>
                        </div>
                    </div>
                    <div id="buttons">
                        <div id="login">
                            <button type="submit" id="lgn">Login</button>
                        </div>
                    </div>
                    <div id="errors">
                        <div id="error">
                            <span id="err"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;