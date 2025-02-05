function SignUp() {
    return (
        <>
            <div id="signupDiv" className="user-info">
                <div id="welcome" className="wlcm nunito-font">
                    <h2>WELCOME</h2>
                    <p>Please register yourself.</p>
                </div>
                <div className="infoentry">
                    <div className="inputs">
                        <div className="form__group nunito-font">
                            <input type="text" name="sgnuser" id="sgnusr" className="form__field" placeholder="Username" required />
                            <label htmlFor="sgnusr" className="form__label">Username</label>
                        </div>
                        <div className="form__group nunito-font">
                            <input type="password" name="sgnpass" id="sgnpass" className="form__field" placeholder="Password" required />
                            <label htmlFor="sgnpass" className="form__label">Password</label>
                        </div>
                        <div className="form__group nunito-font">
                            <input type="password" name="sgnpass2" id="sgnpass2" className="form__field" placeholder="Re-enter Password" required />
                            <label htmlFor="sgnpass2" className="form__label">Re-enter Password</label>
                        </div>
                    </div>
                    <div id="sgnBtn" className="submit-info-div">
                        <div id="signup" className="submit-info">
                            <button type="submit" id="sgn">Register</button>
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

export default SignUp;